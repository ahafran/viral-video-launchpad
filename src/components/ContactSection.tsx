import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tariff: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Данные формы:", formData);
    alert("Благодарим за обращение. В ближайшее время мы с вами свяжемся.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="contact-section"
      className="py-20 bg-gradient-to-br from-graffiti-purple to-graffiti-blue"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-graffiti-black text-9xl font-oswald font-bold rotate-12">
          @
        </div>
        <div className="absolute bottom-20 right-20 text-graffiti-red text-8xl font-oswald font-bold -rotate-12">
          📱
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-graffiti-gold text-6xl font-oswald font-bold">
          GO!
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-oswald font-bold text-graffiti-black mb-6 graffiti-text">
            СВЯЗАТЬСЯ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-roboto">
            Готовы обсудить ваш проект? Напишите нам прямо сейчас!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 street-shadow">
            <h3 className="text-3xl font-oswald font-bold text-graffiti-black mb-6">
              ЗАЯВКА НА СОТРУДНИЧЕСТВО 🚀
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-graffiti-black font-roboto text-lg focus:border-graffiti-red outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-graffiti-black font-roboto text-lg focus:border-graffiti-red outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-graffiti-black font-roboto text-lg focus:border-graffiti-gold outline-none"
                />
              </div>

              <div>
                <select
                  name="tariff"
                  value={formData.tariff}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-graffiti-black font-roboto text-lg focus:border-graffiti-gold outline-none"
                >
                  <option value="">Выберите тариф</option>
                  <option value="basic">Базовый - 29 900₽</option>
                  <option value="standard">Стандартный - 49 900₽</option>
                  <option value="premium">Премиум - 99 900₽</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Расскажите о вашем проекте..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-graffiti-black font-roboto text-lg focus:border-graffiti-gold outline-none resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-graffiti-red hover:bg-red-600 text-graffiti-white font-oswald font-bold text-xl py-6 street-shadow animate-pulse-gold"
              >
                ОТПРАВИТЬ ЗАЯВКУ 💥
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-4 font-roboto text-center">
              * Обязательные поля. Мы свяжемся с вами в течение 15 минут!
            </p>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-8 bg-graffiti-black text-graffiti-white">
              <h3 className="text-3xl font-oswald font-bold text-graffiti-gold mb-6">
                БЫСТРАЯ СВЯЗЬ ⚡
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <div className="font-oswald font-bold text-xl text-graffiti-gold">
                      Telegram
                    </div>
                    <div className="font-roboto">@mass_posting_bot</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <div className="font-oswald font-bold text-xl text-graffiti-gold">
                      Телефон
                    </div>
                    <div className="font-roboto">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <div className="font-oswald font-bold text-xl text-graffiti-gold">
                      Email
                    </div>
                    <div className="font-roboto">info@massposting.ru</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-graffiti-red transform -rotate-1">
                <div className="text-center font-oswald font-bold text-lg">
                  ОТВЕТИМ В ТЕЧЕНИЕ 15 МИНУТ! ⏰
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8">
              <h3 className="text-2xl font-oswald font-bold text-graffiti-black mb-6">
                МЫ В СОЦСЕТЯХ 📲
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-graffiti-red hover:bg-red-600 text-graffiti-white font-oswald font-bold py-4">
                  YouTube 📺
                </Button>
                <Button className="bg-graffiti-gold hover:bg-yellow-500 text-graffiti-black font-oswald font-bold py-4">
                  TikTok 🎵
                </Button>
                <Button className="bg-graffiti-black hover:bg-gray-800 text-graffiti-white font-oswald font-bold py-4">
                  Instagram 📸
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-graffiti-white font-oswald font-bold py-4">
                  VK 🌐
                </Button>
              </div>
            </Card>

            {/* Guarantee */}
            <div className="text-center">
              <div className="inline-block bg-graffiti-gold text-graffiti-black px-6 py-4 font-oswald font-bold text-lg transform rotate-2 animate-pulse-gold">
                🛡️ ГАРАНТИЯ КОНФИДЕНЦИАЛЬНОСТИ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
