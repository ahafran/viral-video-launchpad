import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "БАЗОВЫЙ",
      slug: "basic",
      description: "Для начинающих",
      price: "990₽",
      period: "/мес",
      color: "graffiti-gold",
      features: [
        "До 5 проектов",
        "Базовые шаблоны",
        "Техподдержка в чате",
        "Стандартные функции",
      ],
      popular: false,
    },
    {
      name: "СТАНДАРТНЫЙ",
      slug: "standard",
      description: "Самый популярный",
      price: "2990₽",
      period: "/мес",
      color: "graffiti-blue",
      features: [
        "До 20 проектов",
        "Все шаблоны + премиум",
        "Приоритетная поддержка",
        "Расширенные функции",
        "API интеграции",
      ],
      popular: true,
    },
    {
      name: "ПРЕМИУМ",
      slug: "premium",
      description: "Максимум возможностей",
      price: "9990₽",
      period: "/мес",
      color: "graffiti-red",
      features: [
        "Безлимитные проекты",
        "Все функции + эксклюзив",
        "VIP поддержка 24/7",
        "Персональный менеджер",
        "Белая маркировка",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-graffiti-black via-gray-900 to-graffiti-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-graffiti-gold text-9xl font-oswald font-bold rotate-12 animate-spray">
          ₽
        </div>
        <div className="absolute bottom-32 right-16 text-graffiti-red text-7xl font-oswald font-bold -rotate-12">
          💰
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-oswald font-bold text-graffiti-white mb-6 graffiti-text">
            ТАРИФЫ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-roboto">
            Выберите план, который подходит именно вам
          </p>

          {/* Discount Banner */}
          <div className="inline-block bg-graffiti-red text-graffiti-white px-6 py-2 font-oswald font-bold text-lg transform rotate-2 mt-6 animate-pulse-gold">
            СКИДКА 20% НА ГОДОВУЮ ПОДПИСКУ! 🔥
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-graffiti-white transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? "ring-4 ring-graffiti-red scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-graffiti-red text-graffiti-white px-6 py-2 font-oswald font-bold text-sm transform -rotate-2">
                    ПОПУЛЯРНЫЙ! ⭐
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className={`text-center mb-6`}>
                <h3
                  className={`text-3xl font-oswald font-bold mb-2 ${
                    plan.color === "graffiti-gold"
                      ? "text-graffiti-gold"
                      : plan.color === "graffiti-blue"
                        ? "text-graffiti-blue"
                        : "text-graffiti-red"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-roboto">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div
                  className={`text-5xl font-oswald font-bold mb-2 ${
                    plan.color === "graffiti-gold"
                      ? "text-graffiti-gold"
                      : plan.color === "graffiti-blue"
                        ? "text-graffiti-blue"
                        : "text-graffiti-red"
                  }`}
                >
                  {plan.price}
                  <span className="text-lg text-gray-500">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center font-roboto"
                  >
                    <span className="text-graffiti-gold mr-3 text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className={`font-oswald font-bold text-lg px-8 py-4 transition-all duration-300 hover:scale-105 ${
                  plan.color === "graffiti-gold"
                    ? "bg-graffiti-gold text-graffiti-dark hover:bg-yellow-400"
                    : plan.color === "graffiti-blue"
                      ? "bg-graffiti-blue text-graffiti-white hover:bg-blue-600"
                      : "bg-graffiti-red text-graffiti-white hover:bg-red-600"
                }`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-block bg-graffiti-gold text-graffiti-black px-8 py-4 font-oswald font-bold text-xl transform rotate-2">
            ГАРАНТИЯ ВОЗВРАТА 30 ДНЕЙ! 💯
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
