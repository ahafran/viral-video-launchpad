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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-graffiti-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 text-graffiti-gold text-8xl font-oswald font-bold rotate-12 animate-pulse-gold">
          ⭐
        </div>
        <div className="absolute bottom-32 left-16 text-graffiti-red text-7xl font-oswald font-bold -rotate-12">
          💬
        </div>
        <div className="absolute top-1/2 right-1/4 text-graffiti-gold text-5xl font-oswald font-bold rotate-45 opacity-50">
          ❤️
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-oswald font-bold text-graffiti-white mb-6 graffiti-text">
            ОТЗЫВЫ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-roboto">
            Что говорят наши клиенты о результатах
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-graffiti-white p-8 transform hover:scale-105 transition-all duration-300 street-shadow group"
            >
              {/* Quote Icon */}
              <div className="text-graffiti-red text-4xl font-oswald font-bold mb-4 group-hover:animate-spray">
                "
              </div>

              {/* Content */}
              <p className="text-gray-800 font-roboto text-lg leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-graffiti-gold text-2xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="text-center">
                <div className="text-4xl mb-3">{testimonial.avatar}</div>
                <div className="font-oswald font-bold text-graffiti-black text-xl">
                  {testimonial.name}
                </div>
                <div className="text-graffiti-red font-roboto">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-2">
                1000+
              </div>
              <div className="text-sm text-gray-300 font-roboto">
                Довольных клиентов
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-red mb-2">
                4.9/5
              </div>
              <div className="text-sm text-gray-300 font-roboto">
                Средняя оценка
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-gold mb-2">
                95%
              </div>
              <div className="text-sm text-gray-300 font-roboto">
                Повторных заказов
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-graffiti-red mb-2">
                24ч
              </div>
              <div className="text-sm text-gray-300 font-roboto">
                Время ответа
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-block bg-graffiti-gold text-graffiti-black px-8 py-4 font-oswald font-bold text-xl transform -rotate-2 animate-pulse-gold">
            ✅ ПРОВЕРЕНО СОТНЯМИ КЛИЕНТОВ
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
