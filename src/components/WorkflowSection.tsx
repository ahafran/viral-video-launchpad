const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Подключение",
      description: "Интегрируем ваши социальные сети за 5 минут",
    },
    {
      number: "02",
      title: "Настройка",
      description: "Создаем контент-план и расписание публикаций",
    },
    {
      number: "03",
      title: "Автопилот",
      description: "Система работает автоматически, вы получаете результат",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Как это работает
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
