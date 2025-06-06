import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Базовый",
      price: "2,990",
      features: ["3 соцсети", "50 постов/месяц", "Базовая аналитика"],
      popular: false,
    },
    {
      name: "Стандарт",
      price: "4,990",
      features: [
        "6 соцсетей",
        "200 постов/месяц",
        "Продвинутая аналитика",
        "Техподдержка",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "7,990",
      features: [
        "Безлимит соцсетей",
        "Безлимит постов",
        "AI-генерация контента",
        "Персональный менеджер",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Тарифы
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${plan.popular ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"}`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    ПОПУЛЯРНЫЙ
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-4">
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg"> ₽/мес</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                Выбрать план
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
