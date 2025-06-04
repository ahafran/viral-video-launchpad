import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black">
      {/* Graffiti Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-graffiti-gold text-9xl font-oswald font-bold rotate-12 animate-pulse-gold">
          $
        </div>
        <div className="absolute bottom-32 right-16 text-graffiti-red text-7xl font-oswald font-bold -rotate-12 animate-spray">
          ♠
        </div>
        <div className="absolute top-1/2 left-1/4 text-graffiti-gold text-5xl font-oswald font-bold rotate-45 opacity-50">
          ★
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-graffiti-white mb-6 graffiti-text animate-glitch">
            МАССОВЫЙ ПОСТИНГ
          </h1>
          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-graffiti-red mb-8">
            REELS & SHORTS
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-graffiti-white mb-4 font-roboto">
            Мы превращаем твои длинные видео в тысячи вирусных 15-секундных
            роликов
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-roboto">
            Выкладываем их с сотен аккаунтов в TikTok, Instagram, YouTube и VK
            🎯 Чтобы о тебе узнали ВСЕ!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-graffiti-red hover:bg-red-600 text-graffiti-white font-oswald font-bold text-xl px-12 py-6 street-shadow animate-pulse-gold"
            >
              ПОПРОБОВАТЬ БЕСПЛАТНО 🚀
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-graffiti-gold text-graffiti-gold hover:bg-graffiti-gold hover:text-graffiti-black font-oswald font-bold text-xl px-12 py-6"
              onClick={scrollToContact}
            >
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-2">
                500+
              </div>
              <div className="text-sm text-gray-300 font-roboto">Аккаунтов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-red mb-2">
                10М+
              </div>
              <div className="text-sm text-gray-300 font-roboto">
                Просмотров
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-300 font-roboto">Поддержка</div>
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
