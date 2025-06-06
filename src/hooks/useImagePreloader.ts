import { useEffect } from "react";
import { preloadImage } from "@/utils/imageOptimization";

interface PreloadConfig {
  src: string;
  width?: number;
  priority?: boolean;
}

export const useImagePreloader = (images: PreloadConfig[]) => {
  useEffect(() => {
    // Preload критически важных изображений
    const priorityImages = images.filter((img) => img.priority);
    priorityImages.forEach((img) => {
      preloadImage(img.src, img.width);
    });

    // Preload остальных изображений с задержкой
    const timer = setTimeout(() => {
      const otherImages = images.filter((img) => !img.priority);
      otherImages.forEach((img) => {
        preloadImage(img.src, img.width);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [images]);
};
