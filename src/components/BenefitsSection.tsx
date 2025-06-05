const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "АВТОМАТИЗАЦИЯ",
      description:
        "Полная автоматизация процесса. Загрузили контент — получили результат",
      color: "graffiti-red",
    },
    {
      icon: "🛡️",
      title: "НАДЕЖНОСТЬ",
      description: "Стабильная работа 24/7. Аккаунты защищены от блокировок",
      color: "graffiti-gold",
    },
    {
      icon: "👥",
      title: "ОПЫТНАЯ КОМАНДА",
      description:
        "Профессиональные монтажеры и SMM-специалисты с опытом 5+ лет",
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
    <section className="py-20 bg-graffiti-white relative overflow-hidden">
      {/* Background Graffiti */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-graffiti-black text-9xl font-oswald font-bold rotate-45">
          ★
        </div>
        <div className="absolute bottom-20 right-20 text-graffiti-red text-8xl font-oswald font-bold -rotate-12">
          ♣
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-graffiti-gold text-6xl font-oswald font-bold">
          #1
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-oswald font-bold text-graffiti-black mb-6 graffiti-text">
            ПОЧЕМУ МЫ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
            Преимущества, которые делают нас лидерами в индустрии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center p-8 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:animate-spray">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-2xl font-oswald font-bold text-${benefit.color} mb-4 group-hover:animate-glitch`}
              >
                Опыт
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-roboto leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Line */}
              <div
                className={`w-16 h-1 bg-${benefit.color} mx-auto mt-6 group-hover:w-24 transition-all duration-300`}
              ></div>
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
                <div className="bg-graffiti-red text-graffiti-white px-6 py-3 font-oswald font-bold inline-block animate-pulse-gold">
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
