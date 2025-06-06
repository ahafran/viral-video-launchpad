import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacts");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black dark:from-gray-950 dark:via-black dark:to-gray-950">
      {/* Graffiti Background Elements - скрыты на мобильных */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 hidden sm:block">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 text-graffiti-gold dark:text-yellow-400 text-6xl sm:text-9xl font-oswald font-bold rotate-12 animate-pulse-gold">
          $
        </div>
        <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 text-graffiti-red dark:text-red-400 text-5xl sm:text-7xl font-oswald font-bold -rotate-12 animate-spray">
          ♠
        </div>
        <div className="absolute top-1/2 left-1/4 text-graffiti-gold dark:text-yellow-400 text-3xl sm:text-5xl font-oswald font-bold rotate-45 opacity-50">
          ★
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-oswald font-bold text-graffiti-white dark:text-white mb-4 sm:mb-6 graffiti-text animate-glitch leading-tight">
            МАССОВЫЙ ПОСТИНГ
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Автоматизация постинга в социальные сети. Увеличьте охват и продажи
            с минимальными усилиями.
          </p>

          <Button
            onClick={scrollToContact}
            className="bg-graffiti-gold hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            НАЧАТЬ СЕЙЧАС
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-graffiti-red to-transparent opacity-30"></div>
    </section>
  );
};

export default HeroSection;
