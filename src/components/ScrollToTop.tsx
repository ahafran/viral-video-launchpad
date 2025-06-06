import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-auto sm:h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 bg-graffiti-red hover:bg-red-600 text-white animate-bounce hover:animate-none"
      aria-label="Прокрутить вверх"
    >
      <Icon
        name="ArrowUp"
        size={18}
        className="sm:w-5 sm:h-5 transition-transform duration-300 hover:scale-125"
      />
    </Button>
  );
};

export default ScrollToTop;
