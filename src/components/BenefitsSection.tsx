const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "АВТОМАТИЗАЦИЯ",
      description:
        "Полная автоматизация процесса. Вся система работает как часы.",
      color: "graffiti-red",
    },
    {
      icon: "🛡️",
      title: "НАДЕЖНОСТЬ",
      description: "Стабильная работа 24/7. Аккаунты защищены от блокировок",
      color: "graffiti-gold",
    },
    {
      icon: "🏆",
      title: "ОПЫТ",
      description:
        "Тысячи роликов с успехом запущены для популярных артистов и блогеров.",
      color: "graffiti-red",
    },
    {
      icon: "📈",
      title: "ГАРАНТИЯ РОСТА",
      description: "Увеличение охватов на 300-500% или возврат денег",
      color: "graffiti-gold",
    },
    {
      icon: "💬",
      title: "ПОДДЕРЖКА 24/7",
      description: "Персональный менеджер всегда на связи в Telegram",
      color: "graffiti-red",
    },
    {
      icon: "🎯",
      title: "ТАРГЕТИНГ",
      description: "Точное попадание в целевую аудиторию через алгоритмы",
      color: "graffiti-gold",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-graffiti-white relative overflow-hidden">
      {/* Background Graffiti - скрыты на мобильных */}
      <div className="absolute inset-0 opacity-5 hidden lg:block">
        <div className="absolute top-10 left-10 text-graffiti-black text-6xl xl:text-9xl font-oswald font-bold rotate-45">
          ★
        </div>
        <div className="absolute bottom-20 right-20 text-graffiti-red text-6xl xl:text-8xl font-oswald font-bold -rotate-12">
          ♣
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-graffiti-gold text-4xl xl:text-6xl font-oswald font-bold">
          #1
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-oswald font-bold text-graffiti-black mb-4 sm:mb-6 graffiti-text px-2">
            ПОЧЕМУ МЫ
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-roboto px-2">
            Преимущества, которые делают нас лидерами в индустрии
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 group border-l-4 ${
                benefit.color === "graffiti-red"
                  ? "border-graffiti-red dark:border-red-400"
                  : "border-graffiti-gold dark:border-yellow-400"
              } street-shadow`}
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {benefit.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-oswald font-bold mb-3 sm:mb-4 text-graffiti-black dark:text-white group-hover:text-graffiti-red dark:group-hover:text-red-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-roboto leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-graffiti-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-graffiti-black text-graffiti-white p-8 transform -rotate-1 street-shadow">
              <h3 className="text-3xl font-oswald font-bold mb-4 text-graffiti-gold">
                ГОТОВЫ СТАТЬ ЗВЕЗДОЙ? 🌟
              </h3>
              <p className="text-xl font-roboto mb-6">
                Присоединяйтесь к сотням успешных блогеров уже сегодня!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div
                  className="bg-graffiti-red text-graffiti-white px-6 py-3 font-oswald font-bold inline-block animate-pulse-gold cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    const contactSection =
                      document.querySelector("#contact-section");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  ПЕРВЫЙ МЕСЯЦ -50% 🔥
                </div>
                <div className="bg-graffiti-gold text-graffiti-black px-6 py-3 font-oswald font-bold inline-block">
                  БЕЗ ДОЛГИХ ДОГОВОРОВ ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
