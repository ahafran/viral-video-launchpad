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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-oswald font-bold text-graffiti-black dark:text-white mb-4">
            НАШИ ТАРИФЫ
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий план для масштабирования вашего контента
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-graffiti-red dark:border-red-400 shadow-2xl bg-white dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-graffiti-red text-graffiti-white px-6 py-2 font-oswald font-bold text-sm transform -rotate-2">
                    ПОПУЛЯРНЫЙ! ⭐
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className={`text-center mb-6`}>
                <h3
                  className={`text-3xl font-oswald font-bold text-${plan.color} mb-2`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-roboto">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div
                  className={`text-5xl font-oswald font-bold text-${plan.color} mb-2`}
                >
                  {plan.price}
                  <span className="text-lg text-gray-500">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center font-roboto"
                  >
                    <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => {
                  const routes = [
                    "/plan-basic",
                    "/plan-standard",
                    "/plan-premium",
                  ];
                  navigate(routes[index]);
                }}
                className={`w-full font-oswald font-bold text-lg py-6 ${
                  plan.popular
                    ? "bg-graffiti-red hover:bg-red-600 text-graffiti-white street-shadow"
                    : `bg-${plan.color} hover:opacity-90 text-graffiti-white`
                }`}
              >
                ВЫБРАТЬ ПЛАН 🚀
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/guarantee")}
            className="inline-block bg-graffiti-gold text-graffiti-black px-8 py-4 font-oswald font-bold text-xl transform rotate-2 hover:scale-105 transition-transform cursor-pointer"
          >
            ГАРАНТИЯ ВОЗВРАТА 30 ДНЕЙ! 💯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
