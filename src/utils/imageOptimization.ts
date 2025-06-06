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
    return `${url}&${params.toString()}`;
  }
  return url;
};

// Lazy loading для изображений
export const createLazyImage = (
  src: string,
  alt: string,
  className?: string,
) => {
  return {
    src,
    alt,
    className: `transition-opacity duration-300 ${className || ""}`,
    loading: "lazy" as const,
    decoding: "async" as const,
  };
};
