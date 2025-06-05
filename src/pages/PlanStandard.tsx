import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PlanStandard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black py-20">
      <div className="container mx-auto px-4">
        <Button
          onClick={() => navigate("/")}
          className="mb-8 bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад к тарифам
        </Button>

        <Card className="max-w-2xl mx-auto p-12 bg-graffiti-white ring-4 ring-graffiti-red">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-graffiti-red text-graffiti-white px-6 py-2 font-oswald font-bold text-sm transform -rotate-2">
              ПОПУЛЯРНЫЙ! ⭐
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-oswald font-bold text-graffiti-red mb-4">
              СТАНДАРТНЫЙ ПЛАН
            </h1>
            <p className="text-xl text-gray-600 mb-8">200 роликов в день</p>

            <div className="text-6xl font-oswald font-bold text-graffiti-red mb-2">
              454 000<span className="text-xl text-gray-500"> ₽/месяц</span>
            </div>
            <div className="text-lg text-gray-500 mb-8">
              Или 4 358 000 ₽/год (скидка 20%)
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
                    Публикация 200 роликов ежедневно на всех ключевых платформах
                    (TikTok, YouTube, Instagram, VK)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Подробная аналитика и рекомендации по улучшению стратегии
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Подробная аналитика и рекомендации по улучшению стратегии
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Подробная аналитика и рекомендации по улучшению стратегии
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-graffiti-gold mr-3 text-xl mt-1">
                    ✓
                  </span>
                  <span>
                    Подробная аналитика и рекомендации по улучшению стратегии
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-oswald font-bold mt-6 mb-2">
                Для кого:
              </h3>
              <p className="text-gray-600">
                Для известных блогеров, музыкальных артистов и брендов, которым
                необходим мощный и системный рост аудитории.
              </p>
            </div>

            <Button className="w-full bg-graffiti-red hover:bg-red-600 text-graffiti-white font-oswald font-bold text-xl py-6 street-shadow">
              ОФОРМИТЬ ПОДПИСКУ 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanStandard;
