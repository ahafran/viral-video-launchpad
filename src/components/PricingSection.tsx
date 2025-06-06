import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: "БАЗОВЫЙ",
      price: "115 000",
      period: " ₽/месяц",
      description: "50 роликов в день",
      features: [
        "50 роликов ежедневно",
        "Все платформы (TikTok, YouTube, Instagram, VK)",
        "Профессиональный монтаж",
        "Ежедневный мониторинг и отчёты",
      ],
      popular: false,
      color: "graffiti-black",
    },
    {
      name: "СТАНДАРТНЫЙ",
      price: "454 000",
      period: " ₽/месяц",
      description: "200 роликов в день",
      features: [
        "200 роликов ежедневно",
        "Все ключевые платформы",
        "Команда монтажёров",
        "Контроль качества",
        "Подробная аналитика",
        "Рекомендации по стратегии",
      ],
      popular: true,
      color: "graffiti-red",
    },
    {
      name: "ПРЕМИУМ",
      price: "1 134 000",
      period: " ₽/месяц",
      description: "500 роликов в день",
      features: [
        "500 роликов ежедневно",
        "Персональный менеджер",
        "Индивидуальные решения",
        "Адаптация под тренды",
        "Ежемесячные отчёты",
        "Анализ ROI",
      ],
      popular: false,
      color: "graffiti-gold",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold text-graffiti-black dark:text-white mb-3 sm:mb-4 px-2">
            НАШИ ТАРИФЫ
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Выберите подходящий план для масштабирования вашего контента
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const popular = plan.popular;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                  popular && "ring-4 ring-graffiti-gold dark:ring-yellow-400"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-graffiti-gold dark:bg-yellow-400 text-graffiti-black dark:text-black px-4 py-1 rounded-full text-sm font-bold animate-bounce">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="text-center space-y-4 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-oswald font-bold text-graffiti-black dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-bold text-graffiti-red dark:text-red-400">
                    {plan.price}
                    <span className="text-lg text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-graffiti-red dark:text-red-400 font-bold text-xl">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-oswald font-bold text-lg py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl transform hover:-translate-y-1 ${
                    popular
                      ? "bg-graffiti-red hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white"
                      : "bg-graffiti-black hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white"
                  }`}
                  onClick={() => navigate("/calculator")}
                >
                  ВЫБРАТЬ ПЛАН
                </Button>
              </div>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button
            onClick={() => navigate("/guarantee")}
            className="inline-block bg-graffiti-gold text-graffiti-black px-6 sm:px-8 py-3 sm:py-4 font-oswald font-bold text-lg sm:text-xl transform rotate-2 hover:scale-105 transition-transform cursor-pointer"
          >
            ГАРАНТИЯ ВОЗВРАТА 30 ДНЕЙ! 💯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
