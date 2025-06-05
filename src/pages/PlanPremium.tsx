import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PlanPremium = () => {
  const navigate = useNavigate();

  const features = [
    "Безлимитные проекты",
    "Все функции + эксклюзив",
    "VIP поддержка 24/7",
    "Персональный менеджер",
    "Белая маркировка",
    "Продвинутая аналитика",
    "Кастомные интеграции",
    "Приоритетные обновления",
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

      {/* Premium Badge */}
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-graffiti-red to-graffiti-gold text-graffiti-white px-8 py-3 font-oswald font-bold text-lg transform -rotate-2 animate-pulse-gold">
          👑 ПРЕМИУМ УРОВЕНЬ 👑
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-oswald font-bold text-graffiti-red mb-6 graffiti-text">
            ПРЕМИУМ ПЛАН
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-roboto">
            Максимум возможностей для профессионалов
          </p>

          <div className="text-5xl font-oswald font-bold text-graffiti-red mb-12">
            9990₽
            <span className="text-lg text-gray-400">/месяц</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-graffiti-white border-4 border-graffiti-red">
            <h3 className="text-2xl font-oswald font-bold text-graffiti-dark mb-6">
              Эксклюзивные возможности:
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 font-roboto"
                >
                  <Icon
                    name="Crown"
                    className="text-graffiti-red mr-3"
                    size={20}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-graffiti-red to-graffiti-gold text-white">
            <h3 className="text-2xl font-oswald font-bold mb-6">
              Премиум преимущества:
            </h3>
            <ul className="space-y-4 font-roboto">
              <li className="flex items-start">
                <Icon
                  name="Rocket"
                  className="text-white mr-3 mt-1"
                  size={20}
                />
                Первый доступ к новым функциям
              </li>
              <li className="flex items-start">
                <Icon
                  name="Shield"
                  className="text-white mr-3 mt-1"
                  size={20}
                />
                Максимальная безопасность
              </li>
              <li className="flex items-start">
                <Icon
                  name="Headphones"
                  className="text-white mr-3 mt-1"
                  size={20}
                />
                Персональная поддержка
              </li>
              <li className="flex items-start">
                <Icon name="Star" className="text-white mr-3 mt-1" size={20} />
                Эксклюзивные инструменты
              </li>
            </ul>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-graffiti-red to-graffiti-gold text-graffiti-white font-oswald font-bold text-xl px-12 py-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            СТАТЬ ПРЕМИУМ 👑
          </Button>
          <p className="text-sm text-gray-400 mt-4 font-roboto">
            Для тех, кто выбирает лучшее
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanPremium;
