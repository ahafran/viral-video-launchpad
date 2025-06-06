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
            <div
              key={index}
              className={`relative p-6 sm:p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-3 group border-t-4 ${
                step.color === "graffiti-red"
                  ? "border-graffiti-red dark:border-red-400"
                  : "border-graffiti-gold dark:border-yellow-400"
              } street-shadow`}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-oswald font-bold text-gray-200 dark:text-gray-700 mr-4 transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <div className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-oswald font-bold mb-3 sm:mb-4 text-graffiti-black dark:text-white group-hover:text-graffiti-red dark:group-hover:text-red-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-roboto leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-graffiti-gold/10 to-graffiti-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
