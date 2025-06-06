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
              className="bg-graffiti-white p-6 sm:p-8 transform hover:scale-105 transition-all duration-300 street-shadow group"
            >
              {/* Quote Icon */}
              <div className="text-graffiti-red text-3xl sm:text-4xl font-oswald font-bold mb-3 sm:mb-4 group-hover:animate-spray">
                "
              </div>

              {/* Content */}
              <p className="text-gray-800 font-roboto text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-graffiti-gold text-xl sm:text-2xl"
                  >
                    ⭐
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                  {testimonial.avatar}
                </div>
                <div className="font-oswald font-bold text-graffiti-black text-lg sm:text-xl">
                  {testimonial.name}
                </div>
                <div className="text-graffiti-red font-roboto text-sm sm:text-base">
                  {testimonial.role}
                </div>
              </div>
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
