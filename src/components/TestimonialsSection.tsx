const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр К.",
      role: "Музыкант",
      content:
        "За месяц мои треки набрали 5 млн просмотров! Раньше с трудом получал 10К. Ребята знают свое дело!",
      rating: 5,
      avatar: "🎵",
    },
    {
      name: "Мария Д.",
      role: "Beauty-блогер",
      content:
        "Офигенский результат! Подписчики растут как на дрожжах. Менеджер всегда на связи, поддержка топ!",
      rating: 5,
      avatar: "💄",
    },
    {
      name: "Владимир Т.",
      role: "Фитнес-тренер",
      content:
        "Мой канал взорвался! Клиенты теперь сами находят меня. Инвестиции окупились за 2 недели.",
      rating: 5,
      avatar: "💪",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-graffiti-black to-gray-900 relative overflow-hidden">
      {/* Background Elements - скрыты на мобильных */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 right-10 text-graffiti-gold text-6xl lg:text-8xl font-oswald font-bold rotate-12 animate-pulse-gold">
          ⭐
        </div>
        <div className="absolute bottom-32 left-16 text-graffiti-red text-5xl lg:text-7xl font-oswald font-bold -rotate-12">
          💬
        </div>
        <div className="absolute top-1/2 right-1/4 text-graffiti-gold text-4xl lg:text-5xl font-oswald font-bold rotate-45 opacity-50">
          ❤️
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-oswald font-bold text-graffiti-white mb-4 sm:mb-6 graffiti-text px-2">
            ОТЗЫВЫ
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-roboto px-2">
            Что говорят наши клиенты о результатах
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:-translate-y-2 group street-shadow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-graffiti-red dark:bg-red-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl text-white mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-lg sm:text-xl text-graffiti-black dark:text-white group-hover:text-graffiti-red dark:group-hover:text-red-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4 transition-transform duration-300 group-hover:scale-110">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-graffiti-gold dark:text-yellow-400 text-xl"
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-roboto italic leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                "{testimonial.content}"
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-graffiti-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4 max-w-4xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-1 sm:mb-2">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Довольных клиентов
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-red mb-1 sm:mb-2">
                4.9/5
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Средняя оценка
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-1 sm:mb-2">
                95%
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Повторных заказов
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-graffiti-red mb-1 sm:mb-2">
                24ч
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-roboto">
                Время ответа
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <div className="inline-block bg-graffiti-gold text-graffiti-black px-6 sm:px-8 py-3 sm:py-4 font-oswald font-bold text-lg sm:text-xl transform -rotate-2 animate-pulse-gold">
            ✅ ПРОВЕРЕНО СОТНЯМИ КЛИЕНТОВ
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
