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
    <div className="min-h-screen bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black py-20">
      <div className="container mx-auto px-4">
        <Button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 500);
          }}
          className="mb-8 bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад к тарифам
        </Button>

        <Card className="max-w-2xl mx-auto p-6 xs:p-8 sm:p-12 bg-graffiti-white dark:bg-gray-800">
          <div className="text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-oswald font-bold text-graffiti-black dark:text-white mb-4">
              БАЗОВЫЙ ПЛАН
            </h1>
            <p className="text-lg xs:text-xl text-gray-600 dark:text-gray-300 mb-6 xs:mb-8">
              50 роликов в день
            </p>

            <div className="text-3xl xs:text-4xl sm:text-5xl font-oswald font-bold text-graffiti-black dark:text-white mb-2 whitespace-nowrap">
              115 000
              <span className="text-base xs:text-lg sm:text-xl text-gray-500 dark:text-gray-400">
                {" "}
                ₽/месяц
              </span>
            </div>
            <div className="text-sm xs:text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6 xs:mb-8 whitespace-nowrap">
              Или 1 100 000 ₽/год (скидка 20%)
            </div>

            <div className="text-left mb-6 xs:mb-8">
              <h3 className="text-xl xs:text-2xl font-oswald font-bold mb-3 xs:mb-4">
                Что входит:
              </h3>
              <ul className="space-y-2 xs:space-y-3">
                <li className="flex items-start text-sm xs:text-base">
                  <span className="text-graffiti-gold mr-2 xs:mr-3 text-lg xs:text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Публикация 50 коротких роликов в день на всех ключевых
                    платформах (TikTok, YouTube, Instagram, VK)
                  </span>
                </li>
                <li className="flex items-start text-sm xs:text-base">
                  <span className="text-graffiti-gold mr-2 xs:mr-3 text-lg xs:text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Профессиональный монтаж роликов с высокой частотой
                    обновления контента
                  </span>
                </li>
                <li className="flex items-start text-sm xs:text-base">
                  <span className="text-graffiti-gold mr-2 xs:mr-3 text-lg xs:text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Ежедневный мониторинг и отчёты по результатам публикаций
                  </span>
                </li>
              </ul>

              <h3 className="text-lg xs:text-xl font-oswald font-bold mt-4 xs:mt-6 mb-2 text-graffiti-black dark:text-white">
                Для кого:
              </h3>
              <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300">
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
              className="w-full bg-graffiti-black hover:bg-gray-800 text-graffiti-white font-oswald font-bold text-lg xs:text-xl py-4 xs:py-6"
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
