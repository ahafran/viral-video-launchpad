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
      {/* Graffiti Background Elements - улучшенное мобильное позиционирование */}
      <div className="absolute inset-0 opacity-10 sm:opacity-15 md:opacity-20 dark:opacity-15 sm:dark:opacity-20 md:dark:opacity-30">
        {/* Доллар - левый верхний угол */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-6 md:top-12 md:left-8 lg:top-20 lg:left-10 text-graffiti-gold dark:text-yellow-400 text-2xl sm:text-4xl md:text-6xl lg:text-9xl font-oswald font-bold rotate-12 animate-pulse-gold">
          $
        </div>
        {/* Пика - правый нижний угол */}
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-8 lg:bottom-32 lg:right-16 text-graffiti-red dark:text-red-400 text-xl sm:text-3xl md:text-5xl lg:text-7xl font-oswald font-bold -rotate-12 animate-spray">
          ♠
        </div>
        {/* Звездочка - центр слева */}
        <div className="absolute top-1/3 left-2 sm:left-4 md:left-6 lg:left-1/4 text-graffiti-gold dark:text-yellow-400 text-lg sm:text-2xl md:text-3xl lg:text-5xl font-oswald font-bold rotate-45 opacity-50">
          ★
        </div>
        {/* Дополнительная звездочка - правый верх */}
        <div className="absolute top-1/4 right-6 sm:right-8 md:right-12 lg:right-20 text-graffiti-red dark:text-red-400 text-base sm:text-xl md:text-2xl lg:text-4xl font-oswald font-bold -rotate-12 opacity-40">
          ★
        </div>
        {/* Дополнительный доллар - левый низ */}
        <div className="absolute bottom-1/3 left-6 sm:left-8 md:left-12 lg:left-20 text-graffiti-gold dark:text-yellow-400 text-sm sm:text-lg md:text-xl lg:text-3xl font-oswald font-bold rotate-45 opacity-30">
          $
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline - улучшенная адаптивность */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-oswald font-bold text-graffiti-white dark:text-white mb-3 sm:mb-4 lg:mb-6 graffiti-text animate-glitch leading-tight px-2">
            МАССОВЫЙ ПОСТИНГ
          </h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-oswald font-bold text-graffiti-red dark:text-red-400 mb-4 sm:mb-6 lg:mb-8">
            REELS & SHORTS
          </h2>

          {/* Subtitle - оптимизированные размеры */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-graffiti-white dark:text-gray-100 mb-2 sm:mb-3 lg:mb-4 font-roboto px-2 leading-relaxed">
            Мы превращаем твои длинные видео в тысячи вирусных 15-секундных
            роликов
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto font-roboto px-2 leading-relaxed">
            Выкладываем их с сотен аккаунтов в TikTok, Instagram, YouTube и VK
            🎯 Чтобы о тебе узнали ВСЕ!
          </p>

          {/* CTA Buttons - улучшенная мобильная версия */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:gap-6 justify-center items-center px-2 sm:px-4">
            <Button
              size="lg"
              className="w-full sm:w-full lg:w-auto bg-graffiti-red hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-graffiti-white dark:text-white font-oswald font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 street-shadow animate-pulse-gold min-h-[48px] touch-manipulation"
              onClick={scrollToContact}
            >
              ПОПРОБОВАТЬ БЕСПЛАТНО 🚀
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-full lg:w-auto border-graffiti-gold text-graffiti-gold hover:bg-graffiti-gold hover:text-graffiti-black font-oswald font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 min-h-[48px] touch-manipulation"
              onClick={scrollToContact}
            >
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </div>

          {/* Stats - улучшенная мобильная сетка */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 max-w-2xl mx-auto px-2 sm:px-4">
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-oswald font-bold text-graffiti-gold mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-roboto">
                Аккаунтов
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-oswald font-bold text-graffiti-red mb-1 sm:mb-2">
                10М+
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-roboto">
                Просмотров
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-oswald font-bold text-graffiti-gold mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-roboto">
                Поддержка
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - адаптивная высота */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-graffiti-red to-transparent opacity-30"></div>
    </section>
  );
};

export default HeroSection;
