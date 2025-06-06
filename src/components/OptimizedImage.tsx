import React, { useState, useEffect } from "react";
import {
  createOptimizedImage,
  createImageObserver,
} from "@/utils/imageOptimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==",
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (priority) return;

    const observer = createImageObserver((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    });

    return () => observer?.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageProps = createOptimizedImage(src, alt, className, sizes);

  // Показываем placeholder если изображение не в поле зрения или не загружено
  if (!isInView || hasError) {
    return (
      <div
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ aspectRatio: "16/9" }}
        aria-label={alt}
      >
        {hasError && (
          <div className="flex items-center justify-center h-full text-gray-500">
            Изображение недоступно
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Placeholder пока изображение загружается */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className={`absolute inset-0 ${className}`}
          aria-hidden="true"
        />
      )}

      {/* Основное изображение */}
      <img
        {...imageProps}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        style={{
          ...(priority ? {} : { loading: "lazy" }),
        }}
      />
    </div>
  );
};

export default OptimizedImage;
