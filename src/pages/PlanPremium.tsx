import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const PlanPremium = () => {
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

        <Card className="max-w-2xl mx-auto p-3 xs:p-4 sm:p-6 lg:p-12 bg-graffiti-white dark:bg-gray-800">
          <div className="text-center">
            <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-5xl font-oswald font-bold text-graffiti-gold mb-2 xs:mb-3 sm:mb-4 leading-tight">
              ПРЕМИУМ ПЛАН
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
              500 роликов в день
            </p>

            <div className="text-xl xs:text-2xl sm:text-3xl lg:text-5xl font-oswald font-bold text-graffiti-gold mb-1 xs:mb-2 leading-tight">
              1 134 000
              <span className="text-xs xs:text-sm sm:text-base lg:text-xl text-gray-500 block xs:inline mt-1 xs:mt-0">
                {" "}
                ₽/месяц
              </span>
            </div>
            <div className="text-[10px] xs:text-xs sm:text-sm lg:text-lg text-gray-500 dark:text-gray-400 mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
              Или 10 900 000 ₽/год (скидка 20%)
            </div>

            <div className="text-left mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-oswald font-bold mb-2 xs:mb-2 sm:mb-3 lg:mb-4 text-graffiti-black dark:text-white">
                Что входит:
              </h3>
              <ul className="space-y-1 xs:space-y-2 sm:space-y-3">
                <li className="flex items-start text-xs xs:text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 xs:mr-2 sm:mr-3 text-sm xs:text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Публикация 500 роликов ежедневно на всех ключевых платформах
                    (TikTok, YouTube, Instagram, VK)
                  </span>
                </li>
                <li className="flex items-start text-xs xs:text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 xs:mr-2 sm:mr-3 text-sm xs:text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Персональный менеджер, который курирует весь процесс
                    продвижения
                  </span>
                </li>
                <li className="flex items-start text-xs xs:text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 xs:mr-2 sm:mr-3 text-sm xs:text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Индивидуальные решения по монтажу и адаптации контента под
                    тренды
                  </span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-graffiti-gold mr-2 sm:mr-3 text-base sm:text-lg lg:text-xl mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Ежемесячные отчёты и аналитика с рекомендациями по улучшению
                    ROI
                  </span>
                </li>
              </ul>

              <h3 className="text-base sm:text-lg lg:text-xl font-oswald font-bold mt-3 sm:mt-4 lg:mt-6 mb-2 text-graffiti-black dark:text-white">
                Для кого:
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-tight">
                Для топовых звёзд, крупных брендов и агентств, которым важно
                доминировать в медиа пространстве и быстро наращивать охваты.
              </p>
            </div>

            <Button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById("contacts");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }, 500);
              }}
              className="w-full bg-graffiti-gold hover:opacity-90 text-graffiti-black font-oswald font-bold text-base sm:text-lg lg:text-xl py-3 sm:py-4 lg:py-6"
            >
              ОФОРМИТЬ ПОДПИСКУ 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanPremium;
