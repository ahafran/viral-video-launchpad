const BenefitsSection = () => {
  const benefits = [
    {
      title: "Экономия времени",
      description: "До 10 часов в неделю освобождается для развития бизнеса",
      icon: "⏰",
    },
    {
      title: "Больше охвата",
      description:
        "Увеличение охвата аудитории в 3-5 раз благодаря регулярности",
      icon: "📈",
    },
    {
      title: "Рост продаж",
      description: "Средний рост конверсии составляет 40% за первый месяц",
      icon: "💰",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Преимущества
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
