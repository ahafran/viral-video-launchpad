// Утилиты для мониторинга производительности
export const measurePageLoad = () => {
  if (!("performance" in window)) return;

  window.addEventListener("load", () => {
    // Измеряем основные метрики загрузки
    const perfData = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;

    const metrics = {
      // DNS lookup time
      dnsTime: perfData.domainLookupEnd - perfData.domainLookupStart,
      // TCP connection time
      tcpTime: perfData.connectEnd - perfData.connectStart,
      // Time to first byte
      ttfb: perfData.responseStart - perfData.requestStart,
      // DOM loading time
      domLoad: perfData.domContentLoadedEventEnd - perfData.navigationStart,
      // Full page load time
      pageLoad: perfData.loadEventEnd - perfData.navigationStart,
    };

    console.log("Performance Metrics:", metrics);

    // Отправляем метрики в аналитику (если нужно)
    if (window.gtag) {
      window.gtag("event", "page_load_time", {
        value: metrics.pageLoad,
        custom_parameter: "page_performance",
      });
    }
  });
};

// Измерение Core Web Vitals
export const measureWebVitals = () => {
  // Largest Contentful Paint (LCP)
  if ("PerformanceObserver" in window) {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      console.log("LCP:", lcp.startTime);
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        console.log("FID:", entry.processingStart - entry.startTime);
      });
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log("CLS:", clsValue);
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });
  }
};

// Мониторинг использования памяти
export const measureMemoryUsage = () => {
  if ("memory" in performance) {
    const memory = (performance as any).memory;
    console.log("Memory Usage:", {
      used: Math.round(memory.usedJSHeapSize / 1048576) + " MB",
      total: Math.round(memory.totalJSHeapSize / 1048576) + " MB",
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + " MB",
    });
  }
};

// Оптимизация рендеринга
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Проверка скорости соединения
export const getConnectionSpeed = (): string => {
  const connection = (navigator as any).connection;
  if (connection) {
    return connection.effectiveType || "unknown";
  }
  return "unknown";
};

// Адаптивная загрузка контента в зависимости от скорости соединения
export const shouldLoadHeavyContent = (): boolean => {
  const speed = getConnectionSpeed();
  const slowConnections = ["slow-2g", "2g"];
  return !slowConnections.includes(speed);
};
