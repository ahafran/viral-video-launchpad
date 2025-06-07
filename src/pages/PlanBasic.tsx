import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const PlanBasic = () => {
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
            <h1 className="text-[1.25rem] xs:text-[1.5rem] sm:text-[1.875rem] lg:text-[3.125rem] font-oswald font-bold text-graffiti-black dark:text-white mb-[0.5rem] xs:mb-[0.75rem] sm:mb-[1rem] leading-tight">
              БАЗОВЫЙ ПЛАН
            </h1>
            <p className="text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-600 dark:text-gray-300 mb-[0.75rem] xs:mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem]">
              50 роликов в день
            </p>

            <div className="text-[1.25rem] xs:text-[1.5rem] sm:text-[1.875rem] lg:text-[3.125rem] font-oswald font-bold text-graffiti-black dark:text-white mb-[0.25rem] xs:mb-[0.5rem] leading-tight">
              115 000
              <span className="text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem] lg:text-[1.25rem] text-gray-500 dark:text-gray-400 block xs:inline mt-[0.25rem] xs:mt-0">
                {" "}
                ₽/месяц
              </span>
            </div>
            <div className="text-[0.625rem] xs:text-[0.75rem] sm:text-[0.875rem] lg:text-[1.125rem] text-gray-500 dark:text-gray-400 mb-[0.75rem] xs:mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem]">
              Или 1 100 000 ₽/год (скидка 20%)
            </div>

            <div className="text-left mb-[0.75rem] xs:mb-[1rem] sm:mb-[1.5rem] lg:mb-[2rem]">
              <h3 className="text-[1rem] xs:text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-oswald font-bold mb-[0.5rem] xs:mb-[0.5rem] sm:mb-[0.75rem] lg:mb-[1rem]">
                Что входит:
              </h3>
              <ul className="space-y-[0.25rem] xs:space-y-[0.5rem] sm:space-y-[0.75rem]">
                <li className="flex items-start text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem]">
                  <span className="text-graffiti-gold mr-[0.5rem] xs:mr-[0.5rem] sm:mr-[0.75rem] text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mt-[0.125rem] flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Публикация 50 коротких роликов в день на всех ключевых
                    платформах (TikTok, YouTube, Instagram, VK)
                  </span>
                </li>
                <li className="flex items-start text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem]">
                  <span className="text-graffiti-gold mr-[0.5rem] xs:mr-[0.5rem] sm:mr-[0.75rem] text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mt-[0.125rem] flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Профессиональный монтаж роликов с высокой частотой
                    обновления контента
                  </span>
                </li>
                <li className="flex items-start text-[0.75rem] xs:text-[0.875rem] sm:text-[1rem]">
                  <span className="text-graffiti-gold mr-[0.5rem] xs:mr-[0.5rem] sm:mr-[0.75rem] text-[0.875rem] xs:text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mt-[0.125rem] flex-shrink-0">
                    ✓
                  </span>
                  <span className="flex-1 leading-tight">
                    Ежедневный мониторинг и отчёты по результатам публикаций
                  </span>
                </li>
              </ul>

              <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-oswald font-bold mt-[0.75rem] sm:mt-[1rem] lg:mt-[1.5rem] mb-[0.5rem] text-graffiti-black dark:text-white">
                Для кого:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-gray-600 dark:text-gray-300 leading-tight">
                Для медийных личностей, артистов и блогеров, которые хотят
                увеличить охват и начать масштабное продвижение без лишних
                хлопот.
              </p>
            </div>

            <Button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById("contacts");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
              className="w-full bg-graffiti-black hover:bg-gray-800 text-graffiti-white font-oswald font-bold text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] py-[0.75rem] sm:py-[1rem] lg:py-[1.5rem]"
            >
              ОФОРМИТЬ ПОДПИСКУ 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanBasic;
