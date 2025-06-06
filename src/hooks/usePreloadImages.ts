import { useEffect } from "react";
import { getOptimizedImageUrl } from "@/utils/imageOptimization";

export const usePreloadImages = (images: string[], priority = false) => {
  useEffect(() => {
    if (!priority) return;

    const preloadPromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = getOptimizedImageUrl(src, 1920, undefined, 90);
      });
    });

    Promise.allSettled(preloadPromises).then((results) => {
      const successful = results.filter(
        (result) => result.status === "fulfilled",
      ).length;
      console.log(`Preloaded ${successful}/${images.length} images`);
    });
  }, [images, priority]);
};

// Hook для preload изображений при hover
export const useHoverPreload = () => {
  const preloadOnHover = (src: string) => {
    return {
      onMouseEnter: () => {
        const img = new Image();
        img.src = getOptimizedImageUrl(src);
      },
    };
  };

  return { preloadOnHover };
};
