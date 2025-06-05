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
      title: "МАССОВАЯ ПУБЛИКАЦИЯ",
      description:
        "Сотни аккаунтов в TikTok, Instagram, YouTube Shorts, VK публикуют твой контент ежедневно — быстро, качественно и эффективно",
      icon: "🚀",
      color: "graffiti-gold",
    },
    {
      number: "03",
      title: "ВЗРЫВНОЙ РЕЗУЛЬТАТ",
      description:
        "Ты получаешь миллионы просмотров, тысячи новых подписчиков и узнаваемость бренда — легко и без лишних усилий",
      icon: "💥",
      color: "graffiti-red",
    },
  ];

  return (
    <section className="py-20 bg-graffiti-white relative overflow-hidden">
      {/* Background Graffiti */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-graffiti-black text-8xl font-oswald font-bold rotate-12">
          #VIRAL
        </div>
        <div className="absolute bottom-20 left-20 text-graffiti-red text-6xl font-oswald font-bold -rotate-12">
          ♦
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-oswald font-bold text-graffiti-black mb-6 graffiti-text">
            КАК ЭТО РАБОТАЕТ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
            Простая схема от загрузки контента до миллионов просмотров
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div
                className={`inline-block text-6xl font-oswald font-bold text-${step.color} mb-6 animate-pulse-gold`}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:animate-spray">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-oswald font-bold text-graffiti-black mb-4 group-hover:animate-glitch">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-roboto leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="text-graffiti-gold text-4xl animate-pulse-gold">
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
