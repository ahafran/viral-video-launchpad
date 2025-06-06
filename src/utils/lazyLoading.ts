
import { lazy, ComponentType } from 'react';

// Lazy loading для компонентов с fallback
export const createLazyComponent = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
) => {
  const LazyComponent = lazy(importFunc);
  
  if (fallback) {
    return (props: any) => (
      <React.Suspense fallback={<fallback />}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  }
  
  return LazyComponent;
};

// Preload компонентов при hover
export const preloadComponent = (importFunc: () => Promise<any>) => {
  return () => {
    const componentImport = importFunc();
    return componentImport;
  };
};

// HOC для добавления preload на hover
export const withPreload = <P extends object>(
  Component: React.ComponentType<P>,
  preloadFunc: () => Promise<any>
) => {
  return (props: P) => (
    <div onMouseEnter={preloadFunc}>
      <Component {...props} />
    </div>
  );
};

// Утилита для preload критически важных компонентов
export const preloadCriticalComponents = () => {
  // Список критически важных компонентов для preload
  const criticalComponents = [
    () => import('@/components/HeroSection'),
    () => import('@/components/ui/button'),
    () => import('@/components/ui/card'),
  ];

  criticalComponents.forEach(importFunc => {
    // Запускаем import с небольшой задержкой
    setTimeout(importFunc, 100);
  });
};

// Intersection Observer для lazy loading контента
export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions = {
    rootMargin: '100px',
    threshold: 0.1,
    ...options,
  };

  return (element: HTMLElement | null) => {
    if (!element || !('IntersectionObserver' in window)) {
      callback();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.disconnect();
          }
        });
      },
      defaultOptions
    );

    observer.observe(element);
  };
};
