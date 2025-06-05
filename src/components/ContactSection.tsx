import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Форма заявки */}
          <Card className="lg:col-span-2 p-8 bg-graffiti-white">
            <h3 className="text-3xl font-oswald font-bold mb-6 text-graffiti-black">
              Заявка на сотрудничество
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тариф
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent">
                  <option value="">Выберите тариф</option>
                  <option value="basic">Базовый (50 роликов/день)</option>
                  <option value="standard">
                    Стандартный (200 роликов/день)
                  </option>
                  <option value="premium">Премиум (500 роликов/день)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>

              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <Button
                  type="submit"
                  className="w-full bg-graffiti-red hover:bg-red-600 text-white font-oswald font-bold text-lg py-4"
                >
                  <Icon name="Send" className="mr-2" />
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
                <DialogContent className="bg-graffiti-white max-w-md">
                  <div className="text-center py-6">
                    <Icon
                      name="CheckCircle"
                      className="mx-auto mb-4 text-green-500"
                      size={48}
                    />
                    <h3 className="text-xl font-oswald font-bold mb-2">
                      Спасибо!
                    </h3>
                    <p className="text-gray-600">
                      Благодарим за обращение! В ближайшее время мы с вами
                      свяжемся.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </form>
          </Card>

          {/* Контактная информация */}
          <div className="space-y-6">
            <Card className="p-6 bg-graffiti-white">
              <h3 className="text-xl font-oswald font-bold mb-4">Связь</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-3 text-graffiti-red" />
                  <span className="text-sm">info@streetpromo.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-3 text-graffiti-red" />
                  <span className="text-sm">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MessageCircle"
                    className="mr-3 text-graffiti-red"
                  />
                  <span className="text-sm">@streetpromo_support</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-graffiti-white">
              <h3 className="text-xl font-oswald font-bold mb-4">Офис</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon name="MapPin" className="mr-3 text-graffiti-red mt-1" />
                  <div className="text-sm">
                    <p>г. Москва, ул. Тверская, 1</p>
                    <p className="text-gray-600">БЦ "Центральный", офис 501</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="mr-3 text-graffiti-red" />
                  <span className="text-sm">Пн-Пт: 10:00 - 19:00</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
