import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PlanPremium = () => {
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

        <Card className="max-w-2xl mx-auto p-12 bg-graffiti-white">
          <div className="text-center">
            <h1 className="text-5xl font-oswald font-bold text-graffiti-gold mb-4">
              ПРЕМИУМ ПЛАН
            </h1>
            <p className="text-xl text-gray-600 mb-8">Максимальная мощность</p>

            <div className="text-6xl font-oswald font-bold text-graffiti-gold mb-8">
              99 900<span className="text-xl text-gray-500">/месяц</span>
            </div>

            <div className="text-left mb-8">
              <h3 className="text-2xl font-oswald font-bold mb-4">
                Что включено:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  500+ аккаунтов
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Безлимит роликов
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Экспертный монтаж
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  VIP поддержка
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Полная аналитика
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Стратегия продвижения
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Гарантия результата
                </li>
              </ul>
            </div>

            <Button className="w-full bg-graffiti-gold hover:opacity-90 text-graffiti-black font-oswald font-bold text-xl py-6">
              ОФОРМИТЬ ПОДПИСКУ 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanPremium;
