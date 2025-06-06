import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section
      id="contacts"
      className="py-20 bg-gray-900 dark:bg-black text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Готовы автоматизировать постинг?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Начните бесплатную пробную версию на 7 дней
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Ваш email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 w-full sm:w-auto">
            Попробовать бесплатно
          </Button>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Без обязательств. Отменить можно в любой момент.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
