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
    <section
      id="pricing"
      className="py-[5rem] bg-graffiti-white dark:bg-gray-900"
    >
      <div className="max-w-[87.5rem] mx-auto">
        <div className="text-center mb-[4rem]">
          <h2 className="text-[2.5rem] md:text-[3.125rem] font-bold text-gray-900 dark:text-white mb-[1rem]">
            Наши тарифы
          </h2>
          <p className="text-[1.25rem] text-gray-600 dark:text-gray-300 max-w-[48rem] mx-auto">
            Выберите подходящий план для вашего контента
          </p>
        </div>

        <div className="grid gap-[1rem] sm:gap-[1.5rem] lg:grid-cols-3 max-w-[75rem] mx-auto px-[1rem] sm:px-[1.5rem]">
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
                <div className="absolute -top-[0.25rem] xs:-top-[0.5rem] sm:-top-[0.75rem] lg:-top-[1rem] left-1/2 transform -translate-x-1/2">
                  <div className="bg-graffiti-red text-graffiti-white px-[0.5rem] xs:px-[0.75rem] sm:px-[1rem] lg:px-[1.5rem] py-[0.25rem] xs:py-[0.25rem] sm:py-[0.5rem] font-oswald font-bold text-[0.625rem] xs:text-[0.75rem] transform -rotate-2">
                    ПОПУЛЯРНЫЙ! ⭐
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-[1rem] xs:mb-[1.5rem] sm:mb-[2rem]">
                <h3
                  className={`text-[1.125rem] xs:text-[1.25rem] sm:text-[1.5rem] lg:text-[1.875rem] font-oswald font-bold mb-[0.25rem] xs:mb-[0.5rem] sm:mb-[0.75rem] ${
                    plan.color === "graffiti-red"
                      ? "text-graffiti-red"
                      : plan.color === "graffiti-gold"
                        ? "text-graffiti-gold"
                        : "text-graffiti-black dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem] text-gray-600 dark:text-gray-300 mb-[0.5rem] xs:mb-[0.75rem] sm:mb-[1rem]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-[1rem] xs:mb-[1.5rem] sm:mb-[2rem]">
                <div
                  className={`text-[1.25rem] xs:text-[1.5rem] sm:text-[1.875rem] lg:text-[2.5rem] font-oswald font-bold ${
                    plan.color === "graffiti-red"
                      ? "text-graffiti-red"
                      : plan.color === "graffiti-gold"
                        ? "text-graffiti-gold"
                        : "text-graffiti-black dark:text-white"
                  }`}
                >
                  {plan.price}
                  <span className="text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem] text-gray-500 dark:text-gray-400 block xs:inline mt-[0.25rem] xs:mt-0">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-[0.5rem] xs:space-y-[0.75rem] sm:space-y-[1rem] mb-[1.5rem] xs:mb-[2rem] sm:mb-[2.5rem]">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem]"
                  >
                    <span className="text-graffiti-gold mr-[0.5rem] xs:mr-[0.75rem] text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mt-[0.125rem] flex-shrink-0">
                      ✓
                    </span>
                    <span className="flex-1 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={handleSubscribe}
                className={`w-full py-[0.5rem] xs:py-[0.75rem] sm:py-[1rem] px-[1rem] xs:px-[1.5rem] sm:px-[2rem] text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem] font-oswald font-bold transition-all duration-300 ${
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
        <div className="text-center mt-[2rem] sm:mt-[3rem] lg:mt-[4rem] px-[1rem]">
          <button
            onClick={() => navigate("/guarantee")}
            className="inline-block bg-graffiti-gold text-graffiti-black px-[1rem] sm:px-[1.5rem] lg:px-[2rem] py-[0.75rem] sm:py-[1rem] font-oswald font-bold text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] transform rotate-2 hover:scale-105 hover:rotate-0 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:bg-yellow-400 pulse"
          >
            ГАРАНТИЯ ВОЗВРАТА 30 ДНЕЙ! 💯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
