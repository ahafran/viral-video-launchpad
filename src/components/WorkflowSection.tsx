const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "МОНТАЖ",
      description:
        "Наши профи режут твои видео на короткие динамичные ролики, которые цепляют и удерживают внимание",
      icon: "🎬",
      color: "graffiti-red",
    },
    {
      number: "02",
      title: "МАССОВЫЙ ПОСТИНГ",
      description:
        "Сотни аккаунтов в TikTok, Instagram, YouTube Shorts, VK публикуют твой контент ежедневно — быстро, качественно и эффективно",
      icon: "🚀",
      color: "graffiti-gold",
    },
    {
      number: "03",
      title: "РОСТ АУДИТОРИИ",
      description:
        "Ты получаешь миллионы просмотров, тысячи новых подписчиков и узнаваемость бренда — легко и без лишних усилий",
      icon: "💥",
      color: "graffiti-red",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-graffiti-white relative overflow-hidden">
      {/* Background Graffiti - скрыты на мобильных */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-10 right-10 text-graffiti-black text-6xl lg:text-8xl font-oswald font-bold rotate-12">
          #VIRAL
        </div>
        <div className="absolute bottom-20 left-20 text-graffiti-red text-4xl lg:text-6xl font-oswald font-bold -rotate-12">
          ♦
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-oswald font-bold text-graffiti-black mb-4 sm:mb-6 graffiti-text px-2">
            КАК ЭТО РАБОТАЕТ
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-roboto px-2">
            Простая схема от загрузки контента до миллионов просмотров
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              {/* Step Number */}
              <div
                className={`inline-block text-4xl sm:text-6xl font-oswald font-bold text-${step.color} mb-4 sm:mb-6 animate-pulse-gold`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 group-hover:animate-spray">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-oswald font-bold text-graffiti-black mb-3 sm:mb-4 group-hover:animate-glitch px-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-roboto leading-relaxed text-sm sm:text-base px-2">
                {step.description}
              </p>

              {/* Arrow (только на desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="text-graffiti-gold text-3xl xl:text-4xl animate-pulse-gold">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-graffiti-black text-graffiti-gold px-8 py-4 font-oswald font-bold text-xl transform -rotate-2 street-shadow">
            ГОТОВЫ ВЗОРВАТЬ ИНТЕРНЕТ? 💣
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
