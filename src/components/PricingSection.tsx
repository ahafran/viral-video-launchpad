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
      color: "graffiti-yellow",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Наши тарифы
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Выберите подходящий план для вашего контента
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 sm:p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-graffiti-red dark:border-red-400 shadow-2xl bg-white dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-graffiti-red text-graffiti-white px-4 sm:px-6 py-1 sm:py-2 font-oswald font-bold text-xs sm:text-sm transform -rotate-2">
                    ПОПУЛЯРНЫЙ! ⭐
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className={`text-center mb-4 sm:mb-6`}>
                <h3
                  className={`text-2xl sm:text-3xl font-oswald font-bold text-${plan.color} mb-2 px-2`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-roboto text-sm sm:text-base px-2">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6 sm:mb-8">
                <div
                  className={`text-3xl sm:text-5xl font-oswald font-bold text-${plan.color} mb-2`}
                >
                  {plan.price}
                  <span className="text-sm sm:text-lg text-gray-500">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start font-roboto text-sm sm:text-base px-2"
                  >
                    <span className="text-graffiti-gold mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">
                      ✓
                    </span>
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
                className={`w-full font-oswald font-bold text-base sm:text-lg py-4 sm:py-6 ${
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
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button
            onClick={() => navigate("/guarantee")}
            className="inline-block bg-graffiti-gold text-graffiti-black px-6 sm:px-8 py-3 sm:py-4 font-oswald font-bold text-lg sm:text-xl transform rotate-2 hover:scale-110 hover:rotate-0 transition-all duration-300 cursor-pointer animate-pulse hover:animate-none shadow-lg hover:shadow-xl"
          >
            ГАРАНТИЯ ВОЗВРАТА 30 ДНЕЙ! 💯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
