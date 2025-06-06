import { useEffect } from "react";
import { useAI } from "@/contexts/AIContext";
import { useLocation } from "react-router-dom";

export const usePageTracking = () => {
  const { trackBehavior } = useAI();
  const location = useLocation();

  useEffect(() => {
    trackBehavior("page_view", location.pathname);
  }, [location.pathname, trackBehavior]);
};

export const useInteractionTracking = () => {
  const { trackBehavior } = useAI();

  const trackClick = (element: string) => {
    trackBehavior("click", element);
  };

  const trackScroll = (section: string) => {
    trackBehavior("scroll", section);
  };

  const trackTimeSpent = (section: string, duration: number) => {
    trackBehavior("time_spent", { section, duration });
  };

  return {
    trackClick,
    trackScroll,
    trackTimeSpent,
  };
};
