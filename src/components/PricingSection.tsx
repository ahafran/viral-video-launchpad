import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    const element = document.getElementById("application-form");
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 120; // Увеличил смещение для лучшего позиционирования

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
    <section id="pricing" className="py-20 bg-graffiti-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Наши тарифы
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Выберите подходящий план для вашего контента
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 max-w-6xl mx-auto px-4 sm:px-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-graffiti-red dark:border-red-400 shadow-2xl bg-white dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-graffiti-red text-graffiti-white px-3 sm:px-4 lg:px-6 py-1 sm:py-2 font-oswald font-bold text-xs transform -rotate-2">
                    ПОПУЛЯРНЫЙ! ⭐
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl font-oswald font-bold mb-2 text-${plan.color} dark:text-white`}
                >
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    {plan.price}
                  </span>
                  <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 whitespace-nowrap">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start font-roboto text-xs sm:text-sm lg:text-base leading-tight"
                  >
                    <span className="text-graffiti-gold mr-2 text-sm sm:text-base lg:text-xl flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => {
                  const planRoutes = {
                    БАЗОВЫЙ: "/plan-basic",
                    СТАНДАРТНЫЙ: "/plan-standard",
                    ПРЕМИУМ: "/plan-premium",
                  };
                  const route =
                    planRoutes[plan.name as keyof typeof planRoutes];
                  if (route) {
                    navigate(route);
                  }
                }}
                className={`w-full font-oswald font-bold text-sm sm:text-base lg:text-lg py-3 sm:py-4 lg:py-6 ${
                  plan.popular
                    ? "bg-graffiti-red hover:bg-red-600 text-graffiti-white"
                    : plan.color === "graffiti-yellow"
                      ? "bg-graffiti-yellow hover:bg-yellow-600 text-graffiti-black border-2 border-gray-800 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-black dark:border-yellow-300"
                      : `bg-${plan.color} hover:opacity-90 text-graffiti-white`
                }`}
              >
                ВЫБРАТЬ ПЛАН 🚀
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 px-4">
          <button
            onClick={() => navigate("/guarantee")}
            className="inline-block bg-graffiti-gold text-graffiti-black px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-oswald font-bold text-base sm:text-lg lg:text-xl transform rotate-2 hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:bg-yellow-400 pulse"
          >
            ГАРАНТИЯ ВОЗВРАТА 30 ДНЕЙ! 💯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
