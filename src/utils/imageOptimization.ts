// Утилиты для оптимизации изображений
export const getOptimizedImageUrl = (
  url: string,
  width?: number,
  height?: number,
  quality: number = 80,
): string => {
  // Для Unsplash изображений добавляем параметры оптимизации
  if (url.includes("unsplash.com")) {
    const params = new URLSearchParams();
    if (width) params.set("w", width.toString());
    if (height) params.set("h", height.toString());
    params.set("q", quality.toString());
    params.set("fm", "webp"); // Современный формат
    params.set("auto", "format"); // Автоматический выбор формата
    return `${url}&${params.toString()}`;
  }
  return url;
};

// Генерация srcset для responsive изображений
export const generateSrcSet = (url: string, sizes: number[]): string => {
  if (!url.includes("unsplash.com")) return "";

  return sizes
    .map((size) => `${getOptimizedImageUrl(url, size)} ${size}w`)
    .join(", ");
};

// Размеры для responsive изображений
export const RESPONSIVE_SIZES = {
  hero: [640, 768, 1024, 1280, 1920],
  card: [320, 480, 640, 800],
  avatar: [64, 128, 256],
  thumbnail: [150, 300, 450],
};

// Lazy loading для изображений с современными форматами
export const createOptimizedImage = (
  src: string,
  alt: string,
  className?: string,
  sizes?: string,
) => {
  const srcSet = src.includes("unsplash.com")
    ? generateSrcSet(src, RESPONSIVE_SIZES.card)
    : undefined;

  return {
    src: getOptimizedImageUrl(src),
    srcSet,
    sizes: sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    alt,
    className: `transition-opacity duration-300 ${className || ""}`,
    loading: "lazy" as const,
    decoding: "async" as const,
  };
};

// Preload критически важных изображений
export const preloadImage = (src: string, as: "image" = "image") => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = as;
  link.href = getOptimizedImageUrl(src, 1920, undefined, 90);
  document.head.appendChild(link);
};

// Intersection Observer для lazy loading
export const createImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
) => {
  if (!("IntersectionObserver" in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: "50px 0px",
      threshold: 0.01,
    },
  );
};
