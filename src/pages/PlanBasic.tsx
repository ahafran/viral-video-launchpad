import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PlanBasic = () => {
  const navigate = useNavigate();

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
            }, 100);
          }}
          className="mb-8 bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад к тарифам
        </Button>

        <Card className="max-w-2xl mx-auto p-12 bg-graffiti-white dark:bg-gray-800">
          <div className="text-center">
            <h1 className="text-5xl font-oswald font-bold text-graffiti-black dark:text-white mb-4">
              БАЗОВЫЙ ПЛАН
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              50 роликов в день
            </p>

            <div className="text-6xl font-oswald font-bold text-graffiti-black dark:text-white mb-2">
              115 000
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {" "}
                ₽/месяц
              </span>
            </div>
            <div className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Или 1 100 000 ₽/год (скидка 20%)
            </div>

            <div className="text-left mb-8">
              <h3 className="text-2xl font-oswald font-bold mb-4">
                Что входит:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Публикация 50 коротких роликов в день на всех ключевых
                    платформах (TikTok, YouTube, Instagram, VK)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Профессиональный монтаж роликов с высокой частотой
                    обновления контента
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Ежедневный мониторинг и отчёты по результатам публикаций
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-oswald font-bold mt-6 mb-2 text-graffiti-black dark:text-white">
                Для кого:
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
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
                }, 100);
              }}
              className="w-full bg-graffiti-black hover:bg-gray-800 text-graffiti-white font-oswald font-bold text-xl py-6"
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
