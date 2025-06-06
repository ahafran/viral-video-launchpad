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
    <section
      id="contacts"
      className="py-12 sm:py-20 bg-graffiti-black dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold text-graffiti-white dark:text-white mb-3 sm:mb-4 px-2">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Готовы начать? Свяжитесь с нами для обсуждения вашего проекта
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Форма заявки */}
          <Card className="lg:col-span-2 p-6 sm:p-8 bg-graffiti-white dark:bg-gray-800">
            <h3 className="text-2xl sm:text-3xl font-oswald font-bold mb-4 sm:mb-6 text-graffiti-black dark:text-white px-2">
              Заявка на сотрудничество
            </h3>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Тип проекта
                </label>
                <select className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent dark:bg-gray-700 dark:text-white">
                  <option>Граффити на стене</option>
                  <option>Роспись фасада</option>
                  <option>Художественное оформление</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Сообщение *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-graffiti-red focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="submit"
                    className="w-full bg-graffiti-red hover:bg-red-700 text-white font-oswald font-bold py-3 px-6 text-lg transition-colors"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <div className="text-center py-6">
                    <Icon
                      name="CheckCircle"
                      size={48}
                      className="text-green-500 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Заявка отправлена!
                    </h3>
                    <p className="text-gray-600">
                      Мы свяжемся с вами в ближайшее время
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </form>
          </Card>

          {/* Контактная информация */}
          <div className="space-y-6">
            <Card className="p-6 bg-graffiti-white dark:bg-gray-800">
              <div className="flex items-center mb-4">
                <Icon
                  name="MapPin"
                  size={24}
                  className="text-graffiti-red mr-3"
                />
                <h4 className="text-lg font-oswald font-bold text-graffiti-black dark:text-white">
                  Адрес
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                г. Москва, ул. Граффити, д. 1
              </p>
            </Card>

            <Card className="p-6 bg-graffiti-white dark:bg-gray-800">
              <div className="flex items-center mb-4">
                <Icon
                  name="Phone"
                  size={24}
                  className="text-graffiti-red mr-3"
                />
                <h4 className="text-lg font-oswald font-bold text-graffiti-black dark:text-white">
                  Телефон
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                +7 (999) 123-45-67
              </p>
            </Card>

            <Card className="p-6 bg-graffiti-white dark:bg-gray-800">
              <div className="flex items-center mb-4">
                <Icon
                  name="Mail"
                  size={24}
                  className="text-graffiti-red mr-3"
                />
                <h4 className="text-lg font-oswald font-bold text-graffiti-black dark:text-white">
                  Email
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                info@graffiti-studio.ru
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
