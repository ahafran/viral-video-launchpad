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
    <div className="min-h-screen bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black py-[5rem]">
      <div className="container mx-auto px-[1rem]">
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
          className="mb-[2rem] bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад к тарифам
        </Button>

        <Card className="max-w-[32rem] mx-auto p-[0.75rem] xs:p-[1rem] sm:p-[1.5rem] lg:p-[3rem] bg-graffiti-white dark:bg-gray-800">
          <div className="text-center">
            <h1 className="text-[1.25rem] xs:text-[1.5rem] sm:text-[1.875rem] lg:text-[3.125rem] font-oswald font-bold text-graffiti-gold mb-[0.5rem] xs:mb-[0.75rem] sm:mb-[1rem] leading-tight">
              ПРЕМИУМ ПЛАН
            </h1>
            <p className="text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 dark:text-gray-300 mb-[0.75rem] xs:mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem]">
              500 роликов в день
            </p>

            <div className="text-[1.25rem] xs:text-[1.5rem] sm:text-[1.875rem] lg:text-[3.125rem] font-oswald font-bold text-graffiti-gold mb-[0.25rem] xs:mb-[0.5rem] leading-tight">
              1 134 000
              <span className="text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem] text-gray-500 block xs:inline mt-[0.25rem] xs:mt-0">
                {" "}
                ₽/месяц
              </span>
            </div>
            <div className="text-[0.625rem] xs:text-[0.75rem] sm:text-[0.875rem] lg:text-[1.125rem] text-gray-500 dark:text-gray-400 mb-[0.75rem] xs:mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem]">
              Или 10 900 000 ₽/год (скидка 20%)
            </div>

            <div className="text-left mb-[0.75rem] xs:mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem]">
              <h3 className="text-[1rem] xs:text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-oswald font-bold mb-[0.5rem] xs:mb-[0.5rem] sm:mb-[0.75rem] lg:mb-[1rem] text-graffiti-black dark:text-white">
                Что входит:
              </h3>
              <ul className="space-y-[0.25rem] xs:space-y-[0.5rem] sm:space-y-[0.75rem]">
                <li className="flex items-start text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem]">
                  <span className="text-graffiti-gold mr-[0.5rem] xs:mr-[0.5rem] sm:mr-[0.75rem] text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mt-[0.125rem] flex-shrink-0">
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

              <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-oswald font-bold mt-[0.75rem] sm:mt-[1rem] lg:mt-[1.5rem] mb-[0.5rem] text-graffiti-black dark:text-white">
                Для кого:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-gray-600 dark:text-gray-300 leading-tight">
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
              className="w-full bg-graffiti-gold hover:opacity-90 text-graffiti-black font-oswald font-bold text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] py-[0.75rem] sm:py-[1rem] lg:py-[1.5rem]"
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
