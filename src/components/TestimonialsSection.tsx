const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Владелец интернет-магазина",
      text: "Продажи выросли на 45% за первый месяц использования. Освободилось море времени для других задач.",
      avatar: "👩‍💼",
    },
    {
      name: "Михаил Сидоров",
      role: "Маркетолог",
      text: "Идеальный инструмент для масштабирования SMM. Качество постинга на высоте, все автоматизировано.",
      avatar: "👨‍💻",
    },
    {
      name: "Елена Козлова",
      role: "Фрилансер",
      text: "Теперь могу вести в разы больше проектов. Клиенты довольны стабильностью и качеством контента.",
      avatar: "👩‍💻",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Отзывы клиентов
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
