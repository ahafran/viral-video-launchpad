import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 bg-graffiti-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-oswald font-bold text-graffiti-white mb-4">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы начать? Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-graffiti-white">
            <h3 className="text-2xl font-oswald font-bold mb-6">
              Написать нам
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="Mail" className="mr-3 text-graffiti-red" />
                <span>info@streetpromo.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="mr-3 text-graffiti-red" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="MessageCircle" className="mr-3 text-graffiti-red" />
                <span>@streetpromo_support</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-graffiti-white">
            <h3 className="text-2xl font-oswald font-bold mb-6">Офис</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Icon name="MapPin" className="mr-3 text-graffiti-red mt-1" />
                <div>
                  <p>г. Москва, ул. Тверская, 1</p>
                  <p className="text-gray-600">БЦ "Центральный", офис 501</p>
                </div>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="mr-3 text-graffiti-red" />
                <span>Пн-Пт: 10:00 - 19:00</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-graffiti-red hover:bg-red-600 text-white font-oswald font-bold text-lg px-8 py-4">
            <Icon name="Send" className="mr-2" />
            ОТПРАВИТЬ ЗАЯВКУ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
