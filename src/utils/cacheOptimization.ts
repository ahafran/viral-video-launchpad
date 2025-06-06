// Система оптимизации кэширования и протоколов передачи данных
interface CacheConfig {
  staticAssets: number;
  images: number;
  api: number;
  html: number;
}

interface PreloadResource {
  href: string;
  as: "script" | "style" | "image" | "font" | "fetch";
  crossorigin?: boolean;
  type?: string;
}

class CacheOptimizer {
  private config: CacheConfig = {
    staticAssets: 31536000, // 1 год для статики
    images: 2592000, // 30 дней для изображений
    api: 300, // 5 минут для API
    html: 3600, // 1 час для HTML
  };

  // Настройка HTTP заголовков кэширования
  setupHttpCaching() {
    // Добавляем мета-теги для кэширования
    const meta = document.createElement("meta");
    meta.httpEquiv = "Cache-Control";
    meta.content = `public, max-age=${this.config.staticAssets}`;
    document.head.appendChild(meta);
  }

  // Предзагрузка критических ресурсов
  preloadCriticalResources(resources: PreloadResource[]) {
    resources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource.href;
      link.as = resource.as;

      if (resource.crossorigin) {
        link.crossOrigin = "anonymous";
      }

      if (resource.type) {
        link.type = resource.type;
      }

      document.head.appendChild(link);
    });
  }

  // DNS предварительное разрешение
  prefetchDNS(domains: string[]) {
    domains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  // Предварительное подключение к доменам
  preconnectDomains(domains: string[]) {
    domains.forEach((domain) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }

  // Мониторинг эффективности кэша
  monitorCachePerformance() {
    if ("performance" in window && "getEntriesByType" in performance) {
      const resources = performance.getEntriesByType(
        "resource",
      ) as PerformanceResourceTiming[];

      const cacheStats = {
        cached: 0,
        network: 0,
        totalSize: 0,
        avgLoadTime: 0,
      };

      resources.forEach((resource) => {
        if (resource.transferSize === 0 && resource.decodedBodySize > 0) {
          cacheStats.cached++;
        } else {
          cacheStats.network++;
        }

        cacheStats.totalSize += resource.transferSize || 0;
      });

      cacheStats.avgLoadTime =
        resources.reduce((sum, r) => sum + r.duration, 0) / resources.length;

      console.log("Cache Performance:", {
        hitRate: `${Math.round((cacheStats.cached / (cacheStats.cached + cacheStats.network)) * 100)}%`,
        totalRequests: cacheStats.cached + cacheStats.network,
        cachedRequests: cacheStats.cached,
        avgLoadTime: `${Math.round(cacheStats.avgLoadTime)}ms`,
      });

      return cacheStats;
    }
  }
}

// Инициализация оптимизации кэширования
export const initCacheOptimization = () => {
  const optimizer = new CacheOptimizer();

  // Настройка HTTP кэширования
  optimizer.setupHttpCaching();

  // Предзагрузка критических ресурсов
  const criticalResources: PreloadResource[] = [
    { href: "/src/index.css", as: "style" },
    { href: "/src/main.tsx", as: "script" },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      as: "style",
      crossorigin: true,
    },
  ];

  optimizer.preloadCriticalResources(criticalResources);

  // DNS предзагрузка для внешних ресурсов
  optimizer.prefetchDNS([
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://images.unsplash.com",
  ]);

  // Предварительное подключение к CDN
  optimizer.preconnectDomains([
    "https://fonts.googleapis.com",
    "https://images.unsplash.com",
  ]);

  // Мониторинг производительности каждые 30 секунд
  setInterval(() => {
    optimizer.monitorCachePerformance();
  }, 30000);

  return optimizer;
};

// Система адаптивной загрузки контента
export class AdaptiveLoader {
  private connectionSpeed: string = "unknown";

  constructor() {
    this.detectConnection();
  }

  private detectConnection() {
    const connection = (navigator as any).connection;
    if (connection) {
      this.connectionSpeed = connection.effectiveType || "unknown";

      // Слушаем изменения соединения
      connection.addEventListener("change", () => {
        this.connectionSpeed = connection.effectiveType || "unknown";
        this.adaptContent();
      });
    }
  }

  // Адаптация контента под скорость соединения
  private adaptContent() {
    const isSlowConnection = ["slow-2g", "2g"].includes(this.connectionSpeed);

    if (isSlowConnection) {
      // Отключаем тяжелые анимации
      document.body.classList.add("reduce-motion");

      // Уменьшаем качество изображений
      this.optimizeImages();
    } else {
      document.body.classList.remove("reduce-motion");
    }
  }

  private optimizeImages() {
    const images = document.querySelectorAll("img[data-src]");
    images.forEach((img) => {
      const element = img as HTMLImageElement;
      const originalSrc = element.dataset.src;
      if (originalSrc && originalSrc.includes("unsplash.com")) {
        // Уменьшаем качество для медленных соединений
        element.src = originalSrc
          .replace(/w=\d+/, "w=600")
          .replace(/q=\d+/, "q=60");
      }
    });
  }

  shouldLoadResource(type: "image" | "video" | "font"): boolean {
    const slowConnections = ["slow-2g", "2g"];
    const mediumConnections = ["3g"];

    if (slowConnections.includes(this.connectionSpeed)) {
      return type === "font"; // Загружаем только шрифты
    }

    if (mediumConnections.includes(this.connectionSpeed)) {
      return type !== "video"; // Пропускаем видео
    }

    return true; // Загружаем всё на быстрых соединениях
  }
}

// HTTP/2 Server Push эмуляция через предзагрузку
export const enableHTTP2Push = () => {
  const pushResources = ["/src/index.css", "/src/main.tsx", "/manifest.json"];

  pushResources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource;
    link.as = resource.endsWith(".css")
      ? "style"
      : resource.endsWith(".js") || resource.endsWith(".tsx")
        ? "script"
        : "fetch";
    document.head.appendChild(link);
  });
};

export { CacheOptimizer };
