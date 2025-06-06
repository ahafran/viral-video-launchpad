// Утилиты для оптимизации изображений с максимальным сжатием
export const getOptimizedImageUrl = (
  url: string,
  width?: number,
  height?: number,
  quality: number = 85,
): string => {
  // Для Unsplash изображений добавляем параметры оптимизации
  if (url.includes("unsplash.com")) {
    const params = new URLSearchParams();
    if (width) params.set("w", width.toString());
    if (height) params.set("h", height.toString());
    params.set("q", quality.toString());
    params.set("fm", "webp"); // WebP для лучшего сжатия
    params.set("auto", "format,compress"); // Автосжатие
    params.set("cs", "srgb"); // Оптимальное цветовое пространство
    params.set("fit", "crop"); // Обрезка для точного размера
    params.set("crop", "smart"); // Умная обрезка
    return `${url}&${params.toString()}`;
  }
  return url;
};

// Генерация srcset для responsive изображений с оптимальными размерами
export const generateSrcSet = (url: string, sizes: number[]): string => {
  if (!url.includes("unsplash.com")) return "";

  return sizes
    .map((size) => `${getOptimizedImageUrl(url, size, undefined, 80)} ${size}w`)
    .join(", ");
};

// Оптимизированные размеры для разных типов изображений
export const RESPONSIVE_SIZES = {
  hero: [480, 768, 1024, 1440, 1920], // Герои с высоким качеством
  card: [240, 320, 480, 640, 800], // Карточки с умеренным качеством
  avatar: [48, 96, 144, 192], // Аватары маленькие
  thumbnail: [120, 240, 360], // Миниатюры компактные
  gallery: [320, 640, 960, 1280], // Галерея средние размеры
};

// Создание высокооптимизированного изображения
export const createOptimizedImage = (
  src: string,
  alt: string,
  className?: string,
  sizes?: string,
  imageType: keyof typeof RESPONSIVE_SIZES = "card",
) => {
  const srcSet = src.includes("unsplash.com")
    ? generateSrcSet(src, RESPONSIVE_SIZES[imageType])
    : undefined;

  return {
    src: getOptimizedImageUrl(src, RESPONSIVE_SIZES[imageType][2]), // Средний размер как fallback
    srcSet,
    sizes: sizes || getSizesForType(imageType),
    alt,
    className: `transition-opacity duration-300 ${className || ""}`,
    loading: "lazy" as const,
    decoding: "async" as const,
  };
};

// Оптимальные sizes для разных типов изображений
const getSizesForType = (type: keyof typeof RESPONSIVE_SIZES): string => {
  switch (type) {
    case "hero":
      return "100vw";
    case "card":
      return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
    case "avatar":
      return "(max-width: 768px) 48px, 96px";
    case "thumbnail":
      return "(max-width: 768px) 120px, 240px";
    case "gallery":
      return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw";
    default:
      return "100vw";
  }
};

// Preload критически важных изображений с максимальным сжатием
export const preloadImage = (src: string, width: number = 1920) => {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = getOptimizedImageUrl(src, width, undefined, 90);
  link.type = "image/webp"; // Указываем современный формат
  document.head.appendChild(link);
};

// Создание оптимизированного placeholder с минимальным размером
export const createPlaceholder = (
  width: number = 100,
  height: number = 100,
): string => {
  // Создаем крошечный SVG placeholder
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
    <circle cx="50%" cy="50%" r="20%" fill="#e5e7eb"/>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};
