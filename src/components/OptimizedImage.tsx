import React, { useState, useEffect, useRef } from "react";
import {
  createOptimizedImage,
  createImageObserver,
  createPlaceholder,
  RESPONSIVE_SIZES,
} from "@/utils/imageOptimization";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
  imageType?: keyof typeof RESPONSIVE_SIZES;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  placeholder,
  imageType = "card",
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Создаем оптимизированный placeholder
  const defaultPlaceholder = placeholder || createPlaceholder();

  useEffect(() => {
    if (priority) return;

    const observer = createImageObserver((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer?.disconnect();
      }
    });

    if (imgRef.current && observer) {
      observer.observe(imgRef.current);
    }

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

  // Получаем оптимизированные параметры изображения
  const optimizedProps = createOptimizedImage(
    src,
    alt,
    className,
    sizes,
    imageType,
  );

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder - показываем пока изображение не загрузилось */}
      {!isLoaded && !hasError && (
        <img
          src={defaultPlaceholder}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${className}`}
          aria-hidden="true"
        />
      )}

      {/* Основное изображение */}
      {(isInView || priority) && (
        <img
          ref={imgRef}
          {...optimizedProps}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            filter: isLoaded ? "none" : "blur(5px)",
            transform: isLoaded ? "scale(1)" : "scale(1.1)",
            transition: "all 0.3s ease",
          }}
        />
      )}

      {/* Ошибка загрузки */}
      {hasError && (
        <div
          className={`flex items-center justify-center bg-gray-100 ${className}`}
        >
          <span className="text-gray-400 text-sm">Ошибка загрузки</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
