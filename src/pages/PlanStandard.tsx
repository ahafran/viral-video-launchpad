import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const PlanStandard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black py-20">
      <div className="container mx-auto px-4">
        <Button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const pricingSection = document.getElementById("pricing");
              if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
          className="mb-8 bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад к тарифам
        </Button>

        <Card className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-12 bg-graffiti-white dark:bg-gray-800 ring-4 ring-graffiti-red relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="bg-graffiti-red text-graffiti-white px-3 sm:px-4 lg:px-6 py-1 sm:py-2 font-oswald font-bold text-xs transform -rotate-2">
              ПОПУЛЯРНЫЙ! ⭐
            </div>
          </div>

          <div className="text-center pt-3 sm:pt-4">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-oswald font-bold text-graffiti-red mb-3 sm:mb-4 leading-tight">
              СТАНДАРТНЫЙ ПЛАН
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 lg:mb-8">
              200 роликов в день
            </p>

            <div className="text-2xl sm:text-3xl lg:text-5xl font-oswald font-bold text-graffiti-red mb-2 leading-tight">
              454 000
              <span className="text-sm sm:text-base lg:text-xl text-gray-500 block sm:inline mt-1 sm:mt-0">
                {" "}
                ₽/месяц
              </span>
            </div>
            <div className="text-xs sm:text-sm lg:text-lg text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 lg:mb-8">
              Или 4 400 000 ₽/год (скидка 20%)
            </div>

            <div className="text-left mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-oswald font-bold mb-2 sm:mb-3 lg:mb-4 text-graffiti-black dark:text-white">
                Что входит:
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 sm:mr-3 text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Публикация 200 роликов ежедневно на всех ключевых платформах
                    (TikTok, YouTube, Instagram, VK)
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 sm:mr-3 text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Подробная аналитика и рекомендации по улучшению стратегии
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 sm:mr-3 text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Команда монтажёров с контролем качества
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 sm:mr-3 text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Ежедневный мониторинг и отчёты
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 sm:mr-3 text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Рекомендации по стратегии развития
                  </span>
                </li>
              </ul>

              <h3 className="text-base sm:text-lg lg:text-xl font-oswald font-bold mt-3 sm:mt-4 lg:mt-6 mb-2 text-graffiti-black dark:text-white">
                Для кого:
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-tight">
                Для известных блогеров, музыкальных артистов и брендов, которым
                необходим мощный и системный рост аудитории.
              </p>
            </div>

            <Button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById("contacts");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="w-full bg-graffiti-red hover:bg-red-600 text-graffiti-white font-oswald font-bold text-base sm:text-lg lg:text-xl py-3 sm:py-4 lg:py-6 street-shadow"
            >
              ОФОРМИТЬ ПОДПИСКУ 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanStandard;
