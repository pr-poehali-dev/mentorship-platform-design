import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const topMentors = [
    {
      id: 1,
      name: "Анна Петрова",
      avatar: "img/9b709a5b-62ea-4e54-a874-637e1d86efc0.jpg",
      rating: 4.9,
      reviews: 127,
      expertise: ["Математика", "Физика"],
      price: "1500₽/час",
      experience: "5 лет",
      description: "Кандидат физико-математических наук, преподаватель МГУ",
      status: "online"
    },
    {
      id: 2,
      name: "Дмитрий Козлов",
      avatar: "img/4b6abfb9-ac40-42aa-ad54-e97fd33ae649.jpg",
      rating: 4.8,
      reviews: 89,
      expertise: ["Программирование", "Алгоритмы"],
      price: "2000₽/час",
      experience: "3 года",
      description: "Senior Developer в Яндексе, ментор по IT",
      status: "busy"
    },
    {
      id: 3,
      name: "Елена Смирнова",
      avatar: "img/4be99b4d-eb34-4881-96b9-a304660df79c.jpg",
      rating: 4.9,
      reviews: 156,
      expertise: ["Английский", "Подготовка к ЕГЭ"],
      price: "1200₽/час",
      experience: "7 лет",
      description: "Преподаватель английского языка, кембриджский сертификат",
      status: "online"
    }
  ];

  const categories = [
    { name: "Математика", icon: "Calculator", count: 45 },
    { name: "Программирование", icon: "Code", count: 38 },
    { name: "Физика", icon: "Zap", count: 32 },
    { name: "Английский", icon: "Globe", count: 67 },
    { name: "Химия", icon: "Beaker", count: 28 },
    { name: "История", icon: "Scroll", count: 24 }
  ];

  const stats = [
    { label: "Активных менторов", value: "240+", icon: "Users" },
    { label: "Проведено сессий", value: "12,500+", icon: "Calendar" },
    { label: "Студентов", value: "8,300+", icon: "GraduationCap" },
    { label: "Средний рейтинг", value: "4.8", icon: "Star" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">МентурМетрон</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Найти ментора</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Как это работает</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Помощь</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Найдите <span className="text-primary">идеального ментора</span>
            <br />для своего развития
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Платформа для связи студентов и старшеклассников с опытными наставниками. 
            Персональные консультации, подготовка к экзаменам, карьерное развитие.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Предмет, навык или имя ментора..."
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} менторов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Mentors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Топ менторы</h2>
            <p className="text-lg text-gray-600">Самые популярные и высокорейтинговые наставники</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topMentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        mentor.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{mentor.rating}</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-600">{mentor.reviews} отзывов</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {mentor.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-primary">{mentor.price}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Icon name="Clock" size={12} className="mr-1" />
                        Опыт {mentor.experience}
                      </div>
                    </div>
                    <Button size="sm">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть всех менторов
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-lg text-gray-600">Простые шаги к получению качественного образования</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Найдите ментора</h3>
              <p className="text-gray-600">
                Используйте поиск по предметам, навыкам или просматривайте профили менторов. 
                Читайте отзывы и выбирайте подходящего специалиста.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Calendar" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Забронируйте сессию</h3>
              <p className="text-gray-600">
                Выберите удобное время в календаре ментора и забронируйте сессию. 
                Укажите цели и вопросы для встречи.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Video" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Проведите встречу</h3>
              <p className="text-gray-600">
                Встретьтесь с ментором онлайн или офлайн. Получите персональные советы, 
                решите задачи и двигайтесь к своим целям.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Типы сессий</h2>
            <p className="text-lg text-gray-600">Выберите формат, который подходит именно вам</p>
          </div>

          <Tabs defaultValue="individual" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="individual">Индивидуальные</TabsTrigger>
              <TabsTrigger value="group">Групповые</TabsTrigger>
              <TabsTrigger value="intensive">Интенсивы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Индивидуальные сессии</CardTitle>
                  <CardDescription>Персональные занятия один на один с ментором</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-center">
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Полное внимание ментора</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Индивидуальная программа</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Гибкое расписание</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="group" className="mt-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Групповые сессии</CardTitle>
                  <CardDescription>Занятия в небольших группах до 6 человек</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-center">
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Более доступная цена</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Обмен опытом с коллегами</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Командная работа</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="intensive" className="mt-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Интенсивные курсы</CardTitle>
                  <CardDescription>Углубленное изучение тем за короткий период</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-center">
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Быстрый результат</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Структурированная программа</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span>Сертификат завершения</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам студентов, которые уже достигли своих целей с помощью наших менторов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary font-semibold">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать студентом
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="GraduationCap" size={20} className="mr-2" />
              Стать ментором
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">МентурМетрон</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Платформа для связи студентов с опытными менторами. Развивайтесь профессионально с лучшими наставниками.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Для студентов</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Найти ментора</a></li>
                <li><a href="#" className="hover:text-white">Как это работает</a></li>
                <li><a href="#" className="hover:text-white">Цены</a></li>
                <li><a href="#" className="hover:text-white">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Для менторов</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Стать ментором</a></li>
                <li><a href="#" className="hover:text-white">Требования</a></li>
                <li><a href="#" className="hover:text-white">Заработок</a></li>
                <li><a href="#" className="hover:text-white">Обучение</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МентурМетрон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;