import { useEffect } from "react";

const Guarantee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-graffiti-white">
      {/* Header */}
      <div className="bg-graffiti-black text-graffiti-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => window.history.back()}
            className="mb-4 text-graffiti-gold hover:text-graffiti-red transition-colors font-oswald"
          >
            ← Назад
          </button>
          <h1 className="text-4xl md:text-5xl font-oswald font-bold text-graffiti-gold">
            🔒 Гарантия 30 дней
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 street-shadow border-l-8 border-graffiti-gold">
            <p className="text-lg text-gray-700 font-roboto leading-relaxed mb-8">
              Мы уверены в качестве нашего сервиса и хотим, чтобы вы чувствовали
              себя спокойно, работая с нами. Поэтому предоставляем тройную
              гарантию на 30 дней с момента начала сотрудничества:
            </p>

            <div className="space-y-8">
              {/* Guarantee 1 */}
              <div className="border-l-4 border-graffiti-red pl-6">
                <h3 className="text-2xl font-oswald font-bold text-graffiti-black mb-4">
                  ✅ 1. Гарантия качества исполнения
                </h3>
                <p className="text-gray-700 font-roboto leading-relaxed mb-3">
                  Если вы обнаружите ошибки в работе:
                </p>
                <ul className="text-gray-700 font-roboto leading-relaxed ml-4 space-y-1">
                  <li>— ролики не были опубликованы,</li>
                  <li>— нарушена периодичность выкладки,</li>
                  <li>
                    — допущены технические сбои со стороны нашей команды —
                  </li>
                </ul>
                <p className="text-gray-700 font-roboto leading-relaxed mt-3">
                  мы устраним проблему за наш счёт или предоставим компенсацию.
                </p>
              </div>

              {/* Guarantee 2 */}
              <div className="border-l-4 border-graffiti-gold pl-6">
                <h3 className="text-2xl font-oswald font-bold text-graffiti-black mb-4">
                  📈 2. Гарантия результата
                </h3>
                <p className="text-gray-700 font-roboto leading-relaxed mb-3">
                  Мы гарантируем, что при соблюдении всех условий
                  (предоставление исходных роликов, стабильный объём контента,
                  отсутствие блокировок по вине клиента) вы получите минимальный
                  охват по каждой соцсети.
                </p>
                <p className="text-gray-700 font-roboto leading-relaxed">
                  Если результат окажется значительно ниже среднерыночных
                  показателей, мы проведём аудит и предложим либо доработку
                  стратегии, либо частичный возврат средств.
                </p>
              </div>

              {/* Guarantee 3 */}
              <div className="border-l-4 border-graffiti-red pl-6">
                <h3 className="text-2xl font-oswald font-bold text-graffiti-black mb-4">
                  🛠 3. Гарантия технической поддержки
                </h3>
                <p className="text-gray-700 font-roboto leading-relaxed mb-3">
                  В течение 30 дней с вами работает наша команда поддержки —
                  монтажёры, технические специалисты и аккаунт-менеджер.
                </p>
                <p className="text-gray-700 font-roboto leading-relaxed">
                  Мы реагируем на любые обращения в течение 24 часов и
                  оперативно решаем любые вопросы, связанные с публикациями,
                  аккаунтами и работой платформ.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 text-center">
              <div className="bg-graffiti-black text-graffiti-white p-6 transform rotate-1 street-shadow">
                <h4 className="text-2xl font-oswald font-bold text-graffiti-gold mb-3">
                  ГОТОВЫ НАЧАТЬ? 🚀
                </h4>
                <p className="text-lg font-roboto mb-4">
                  Свяжитесь с нами и получите персональную консультацию
                </p>
                <button
                  onClick={() => {
                    // Переходим на главную страницу к секции контактов
                    window.location.href = "/#contacts";
                  }}
                  className="bg-graffiti-red text-graffiti-white px-8 py-3 font-oswald font-bold hover:scale-105 transition-transform"
                >
                  СВЯЗАТЬСЯ СЕЙЧАС
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
