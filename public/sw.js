// Service Worker для агрессивного кэширования и оптимизации
const CACHE_NAME = "poehali-v2";
const STATIC_CACHE = "static-v2";
const IMAGES_CACHE = "images-v2";
const API_CACHE = "api-v2";

// Критически важные ресурсы для кэширования
const CRITICAL_ASSETS = ["/", "/manifest.json"];

// Стратегии кэширования
const CACHE_STRATEGIES = {
  // Сначала кэш, потом сеть (для статики)
  cacheFirst: ["css", "js", "woff2", "woff", "ttf"],
  // Сначала сеть, потом кэш (для HTML)
  networkFirst: ["html"],
  // Только кэш при офлайне (для изображений)
  cacheOnly: ["png", "jpg", "jpeg", "gif", "webp", "avif", "svg"],
};

// Установка SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(CRITICAL_ASSETS)),
      self.skipWaiting(),
    ]),
  );
});

// Активация SW
self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // Очищаем старые кэши
      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter(
                (name) =>
                  name !== CACHE_NAME &&
                  name !== STATIC_CACHE &&
                  name !== IMAGES_CACHE &&
                  name !== API_CACHE,
              )
              .map((name) => caches.delete(name)),
          ),
        ),
      self.clients.claim(),
    ]),
  );
});

// Обработка запросов
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Пропускаем non-GET запросы
  if (request.method !== "GET") return;

  // Пропускаем chrome-extension и other protocols
  if (!url.protocol.startsWith("http")) return;

  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const extension = url.pathname.split(".").pop()?.toLowerCase();

  try {
    // Изображения - агрессивное кэширование
    if (isImage(extension)) {
      return handleImageRequest(request);
    }

    // Статические ресурсы - cache first
    if (isStaticAsset(extension)) {
      return handleStaticRequest(request);
    }

    // HTML страницы - network first
    if (isHtmlRequest(request)) {
      return handleHtmlRequest(request);
    }

    // API запросы - network first с коротким кэшем
    if (isApiRequest(url)) {
      return handleApiRequest(request);
    }

    // Остальное - network first
    return handleNetworkFirst(request, STATIC_CACHE);
  } catch (error) {
    console.error("SW Error:", error);
    return fetch(request);
  }
}

// Обработчики для разных типов ресурсов
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGES_CACHE);
  const cached = await cache.match(request);

  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return cached || new Response("Image not available", { status: 404 });
  }
}

async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);

  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  return response;
}

async function handleHtmlRequest(request) {
  const cache = await caches.open(STATIC_CACHE);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    return (
      cached || new Response("Page not available offline", { status: 503 })
    );
  }
}

async function handleApiRequest(request) {
  const cache = await caches.open(API_CACHE);

  try {
    const response = await fetch(request);
    if (response.ok) {
      // Кэшируем API ответы на 5 минут
      const responseToCache = response.clone();
      responseToCache.headers.set("sw-cache-timestamp", Date.now().toString());
      cache.put(request, responseToCache);
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) {
      const timestamp = cached.headers.get("sw-cache-timestamp");
      const age = Date.now() - parseInt(timestamp || "0");
      // Используем кэш только если он не старше 5 минут
      if (age < 5 * 60 * 1000) {
        return cached;
      }
    }
    throw new Error("Network unavailable");
  }
}

async function handleNetworkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return (
      (await cache.match(request)) ||
      new Response("Resource not available", { status: 503 })
    );
  }
}

// Утилиты для определения типов ресурсов
function isImage(extension) {
  return ["png", "jpg", "jpeg", "gif", "webp", "avif", "svg", "ico"].includes(
    extension,
  );
}

function isStaticAsset(extension) {
  return ["css", "js", "woff2", "woff", "ttf", "eot"].includes(extension);
}

function isHtmlRequest(request) {
  return request.headers.get("accept")?.includes("text/html");
}

function isApiRequest(url) {
  return url.pathname.startsWith("/api/") || url.hostname.includes("api.");
}
