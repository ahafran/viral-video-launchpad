import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PlanBasic = () => {
  const navigate = useNavigate();

  const features = [
    "До 5 проектов",
    "Базовые шаблоны",
    "Техподдержка в чате",
    "Стандартные функции",
    "Экспорт в HTML/CSS",
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-oswald font-bold text-graffiti-gold mb-6 graffiti-text">
            БАЗОВЫЙ ПЛАН
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-roboto">
            Идеальный старт для новичков в веб-разработке
          </p>

          <div className="text-5xl font-oswald font-bold text-graffiti-gold mb-12">
            990₽
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
                    className="text-graffiti-gold mr-3"
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
                  name="User"
                  className="text-graffiti-blue mr-3 mt-1"
                  size={20}
                />
                Начинающие разработчики
              </li>
              <li className="flex items-start">
                <Icon
                  name="Briefcase"
                  className="text-graffiti-blue mr-3 mt-1"
                  size={20}
                />
                Малый бизнес
              </li>
              <li className="flex items-start">
                <Icon
                  name="Lightbulb"
                  className="text-graffiti-blue mr-3 mt-1"
                  size={20}
                />
                Тестирование идей
              </li>
            </ul>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-graffiti-gold text-graffiti-dark font-oswald font-bold text-xl px-12 py-6 hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
          >
            НАЧАТЬ С БАЗОВОГО ПЛАНА 🚀
          </Button>
          <p className="text-sm text-gray-400 mt-4 font-roboto">
            Отменить можно в любое время
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanBasic;
