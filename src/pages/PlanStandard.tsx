import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PlanStandard = () => {
  const navigate = useNavigate();

  const features = [
    "До 20 проектов",
    "Все шаблоны + премиум",
    "Приоритетная поддержка",
    "Расширенные функции",
    "API интеграции",
    "Командная работа",
    "Аналитика проектов",
  ];

  return (
    <div className="min-h-screen bg-graffiti-dark">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-8 bg-graffiti-white text-graffiti-dark hover:bg-gray-100"
        >
          <Icon name="ArrowLeft" className="mr-2" size={16} />
          Назад к тарифам
        </Button>
      </div>

      {/* Popular Badge */}
      <div className="text-center mb-8">
        <div className="inline-block bg-graffiti-red text-graffiti-white px-6 py-3 font-oswald font-bold text-lg transform rotate-2 animate-pulse">
          ⭐ САМЫЙ ПОПУЛЯРНЫЙ ПЛАН ⭐
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-oswald font-bold text-graffiti-blue mb-6 graffiti-text">
            СТАНДАРТНЫЙ ПЛАН
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-roboto">
            Оптимальный баланс возможностей и цены
          </p>

          <div className="text-5xl font-oswald font-bold text-graffiti-blue mb-12">
            2990₽
            <span className="text-lg text-gray-400">/месяц</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-graffiti-white">
            <h3 className="text-2xl font-oswald font-bold text-graffiti-dark mb-6">
              Что включено:
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 font-roboto"
                >
                  <Icon
                    name="Check"
                    className="text-graffiti-blue mr-3"
                    size={20}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-graffiti-white">
            <h3 className="text-2xl font-oswald font-bold text-graffiti-dark mb-6">
              Для кого подходит:
            </h3>
            <ul className="space-y-4 text-gray-700 font-roboto">
              <li className="flex items-start">
                <Icon
                  name="Users"
                  className="text-graffiti-blue mr-3 mt-1"
                  size={20}
                />
                Растущие команды
              </li>
              <li className="flex items-start">
                <Icon
                  name="TrendingUp"
                  className="text-graffiti-blue mr-3 mt-1"
                  size={20}
                />
                Развивающийся бизнес
              </li>
              <li className="flex items-start">
                <Icon
                  name="Zap"
                  className="text-graffiti-blue mr-3 mt-1"
                  size={20}
                />
                Активные проекты
              </li>
            </ul>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-graffiti-blue text-graffiti-white font-oswald font-bold text-xl px-12 py-6 hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            ВЫБРАТЬ СТАНДАРТНЫЙ 💎
          </Button>
          <p className="text-sm text-gray-400 mt-4 font-roboto">
            Самый выгодный план для большинства пользователей
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanStandard;
