// Утилиты для preload критических ресурсов
export const preloadCriticalResources = () => {
  // Preload критических шрифтов
  const preloadFont = (href: string, type = "font/woff2") => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "font";
    link.type = type;
    link.href = href;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  };

  // Preload критических стилей
  const preloadCSS = (href: string) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    document.head.appendChild(link);
  };

  // Preload hero изображения
  const preloadHeroImage = (src: string) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  };

  // DNS prefetch для внешних ресурсов
  const dnsPrefetch = (domain: string) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = domain;
    document.head.appendChild(link);
  };

  // Preconnect для критических доменов
  const preconnect = (domain: string) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = domain;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  };

  // Запускаем preload
  dnsPrefetch("//fonts.googleapis.com");
  dnsPrefetch("//images.unsplash.com");
  preconnect("https://fonts.gstatic.com");
  preconnect("https://images.unsplash.com");
};

// Resource hints для оптимизации загрузки
export const addResourceHints = () => {
  const hints = [
    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//images.unsplash.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
    {
      rel: "preconnect",
      href: "https://images.unsplash.com",
      crossorigin: true,
    },
  ];

  hints.forEach((hint) => {
    const link = document.createElement("link");
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
};
