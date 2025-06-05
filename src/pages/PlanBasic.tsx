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
          onClick={() => navigate("/")}
          className="mb-8 bg-gray-700 hover:bg-gray-600 text-white"
        >
          <Icon name="ArrowLeft" className="mr-2" />
          Назад к тарифам
        </Button>

        <Card className="max-w-2xl mx-auto p-12 bg-graffiti-white">
          <div className="text-center">
            <h1 className="text-5xl font-oswald font-bold text-graffiti-black mb-4">
              БАЗОВЫЙ ПЛАН
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Для начинающих блогеров
            </p>

            <div className="text-6xl font-oswald font-bold text-graffiti-black mb-8">
              29 900<span className="text-xl text-gray-500">/месяц</span>
            </div>

            <div className="text-left mb-8">
              <h3 className="text-2xl font-oswald font-bold mb-4">
                Что включено:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  50 аккаунтов
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  100 роликов/месяц
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Базовый монтаж
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Email поддержка
                </li>
                <li className="flex items-center">
                  <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                  Статистика
                </li>
              </ul>
            </div>

            <Button className="w-full bg-graffiti-black hover:bg-gray-800 text-graffiti-white font-oswald font-bold text-xl py-6">
              ОФОРМИТЬ ПОДПИСКУ 🚀
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlanBasic;
