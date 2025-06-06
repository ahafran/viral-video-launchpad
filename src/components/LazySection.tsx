import React, { Suspense, lazy } from "react";
import { useIntersectionObserver } from "@/utils/lazyLoading";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  className?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <div className="h-32 bg-gray-100 animate-pulse rounded" />,
  rootMargin = "100px",
  className = "",
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const observerCallback = React.useCallback(() => {
    setIsVisible(true);
  }, []);

  const observerRef = useIntersectionObserver(observerCallback, {
    rootMargin,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (ref.current) {
      observerRef(ref.current);
    }
  }, [observerRef]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
