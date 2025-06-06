import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Новый подход к разработке
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Создавайте сайты на русском языке
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Поехали! — революционная платформа для создания веб-сайтов без
            программирования. Просто опишите что хотите — остальное сделает ИИ.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать создание
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Возможности платформы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Icon name="Zap" className="w-12 h-12 text-yellow-500 mb-4" />
                <CardTitle>Быстрое создание</CardTitle>
                <CardDescription>
                  Создавайте сайты в 30 раз быстрее традиционной разработки
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon
                  name="Palette"
                  className="w-12 h-12 text-purple-500 mb-4"
                />
                <CardTitle>Красивый дизайн</CardTitle>
                <CardDescription>
                  Современные UI/UX решения на уровне лучших дизайн-студий
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Globe" className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>Мгновенная публикация</CardTitle>
                <CardDescription>
                  Опубликуйте сайт в интернет одним кликом
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Выберите тарифный план</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle>Базовый</CardTitle>
                <div className="text-3xl font-bold">₽990/мес</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    1 проект
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    Базовые компоненты
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    Техподдержка
                  </li>
                </ul>
                <Link to="/plan-basic">
                  <Button className="w-full mt-6">Выбрать план</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-purple-500">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle>Стандартный</CardTitle>
                <div className="text-3xl font-bold">₽1990/мес</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    5 проектов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    Продвинутые компоненты
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    GitHub интеграция
                  </li>
                </ul>
                <Link to="/plan-standard">
                  <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                    Выбрать план
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Премиум</CardTitle>
                <div className="text-3xl font-bold">₽2990/мес</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    Безлимитные проекты
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    Все компоненты
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-500"
                    />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Link to="/plan-premium">
                  <Button className="w-full mt-6">Выбрать план</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Icon
            name="Shield"
            className="w-16 h-16 text-green-500 mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">Гарантия результата</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Не получили ожидаемый результат? Вернём деньги в течение 30 дней.
          </p>
          <Link to="/guarantee">
            <Button variant="outline">Узнать подробнее</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
