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
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-oswald font-bold text-graffiti-white dark:text-white mb-4 sm:mb-6 graffiti-text animate-glitch leading-tight">
            МАССОВЫЙ ПОСТИНГ
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-oswald font-bold text-graffiti-red dark:text-red-400 mb-6 sm:mb-8">
            REELS & SHORTS
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-graffiti-white dark:text-gray-100 mb-3 sm:mb-4 font-roboto px-2">
            Мы превращаем твои длинные видео в тысячи вирусных 15-секундных
            роликов
          </p>
          <p className="text-base sm:text-lg text-gray-300 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto font-roboto px-2">
            Выкладываем их с сотен аккаунтов в TikTok, Instagram, YouTube и VK
            🎯 Чтобы о тебе узнали ВСЕ!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-graffiti-red hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-graffiti-white dark:text-white font-oswald font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 street-shadow animate-pulse-gold"
              onClick={scrollToContact}
            >
              ПОПРОБОВАТЬ БЕСПЛАТНО 🚀
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-graffiti-gold text-graffiti-gold hover:bg-graffiti-gold hover:text-graffiti-black font-oswald font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6"
              onClick={scrollToContact}
            >
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Аккаунтов
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-red mb-1 sm:mb-2">
                10М+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Просмотров
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Поддержка
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-graffiti-red to-transparent opacity-30"></div>
    </section>
  );
};

export default HeroSection;
