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
              className={`relative p-3 xs:p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-graffiti-red dark:border-red-400 shadow-2xl bg-white dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-1 xs:-top-2 sm:-top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-graffiti-red text-graffiti-white px-2 xs:px-3 sm:px-4 lg:px-6 py-1 xs:py-1 sm:py-2 font-oswald font-bold text-[10px] xs:text-xs transform -rotate-2">
                    ПОПУЛЯРНЫЙ! ⭐
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 xs:mb-6 sm:mb-8">
                <h3
                  className={`text-lg xs:text-xl sm:text-2xl lg:text-3xl font-oswald font-bold mb-1 xs:mb-2 sm:mb-3 ${
                    plan.color === "graffiti-red"
                      ? "text-graffiti-red"
                      : plan.color === "graffiti-gold"
                        ? "text-graffiti-gold"
                        : "text-graffiti-black dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2 xs:mb-3 sm:mb-4">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-4 xs:mb-6 sm:mb-8">
                <div
                  className={`text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-oswald font-bold ${
                    plan.color === "graffiti-red"
                      ? "text-graffiti-red"
                      : plan.color === "graffiti-gold"
                        ? "text-graffiti-gold"
                        : "text-graffiti-black dark:text-white"
                  }`}
                >
                  {plan.price}
                  <span className="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400 block xs:inline mt-1 xs:mt-0">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 xs:space-y-3 sm:space-y-4 mb-6 xs:mb-8 sm:mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-xs xs:text-sm sm:text-base"
                  >
                    <span className="text-graffiti-gold mr-2 xs:mr-3 text-sm xs:text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="flex-1 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={handleSubscribe}
                className={`w-full py-2 xs:py-3 sm:py-4 px-4 xs:px-6 sm:px-8 text-xs xs:text-sm sm:text-base font-oswald font-bold transition-all duration-300 ${
                  plan.color === "graffiti-red"
                    ? "bg-graffiti-red hover:bg-red-600 text-graffiti-white"
                    : plan.color === "graffiti-gold"
                      ? "bg-graffiti-gold hover:bg-yellow-500 text-graffiti-black"
                      : "bg-graffiti-black hover:bg-gray-800 text-graffiti-white"
                }`}
              >
                ПОДКЛЮЧИТЬ
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
