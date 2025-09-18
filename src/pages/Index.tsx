import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const topMentors = [
    {
      id: 1,
      name: "Анна Петрова",
      avatar: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 127,
      expertise: ["Математика", "Физика"],
      experience: "5 лет",
      description: "Кандидат физико-математических наук, преподаватель МГУ",
      status: "online",
      university: "МГУ",
      responseTime: "~30 мин"
    },
    {
      id: 2,
      name: "Дмитрий Козлов",
      avatar: "/api/placeholder/80/80",
      rating: 4.8,
      reviews: 89,
      expertise: ["Программирование", "Алгоритмы", "IT"],
      experience: "3 года",
      description: "Senior Developer в Яндексе, ментор по IT",
      status: "busy",
      university: "МФТИ",
      responseTime: "~2 часа"
    },
    {
      id: 3,
      name: "Елена Смирнова",
      avatar: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 156,
      expertise: ["Английский", "Подготовка к ЕГЭ"],
      experience: "7 лет",
      description: "Преподаватель английского языка, кембриджский сертификат",
      status: "online",
      university: "РУДН",
      responseTime: "~15 мин"
    }
  ];

  const categories = [
    { name: "Математика", icon: "Calculator", count: 45, color: "bg-blue-100 text-blue-700" },
    { name: "Физика", icon: "Atom", count: 32, color: "bg-purple-100 text-purple-700" },
    { name: "Программирование", icon: "Code", count: 67, color: "bg-green-100 text-green-700" },
    { name: "Английский", icon: "Languages", count: 54, color: "bg-orange-100 text-orange-700" },
    { name: "Химия", icon: "TestTube", count: 29, color: "bg-pink-100 text-pink-700" },
    { name: "История", icon: "BookOpen", count: 38, color: "bg-yellow-100 text-yellow-700" }
  ];

  const sessionTypes = [
    {
      title: "Индивидуальная консультация",
      description: "Персональная встреча с наставником один на один",
      icon: "User",
      duration: "45 мин",
      popular: true
    },
    {
      title: "Групповая сессия",
      description: "Обучение в небольшой группе до 5 человек",
      icon: "Users",
      duration: "60 мин",
      popular: false
    },
    {
      title: "Экспресс-помощь",
      description: "Быстрое решение конкретного вопроса",
      icon: "Zap",
      duration: "15 мин",
      popular: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "busy": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "В сети";
      case "busy": return "Занят";
      default: return "Не в сети";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  МентурМетрон
                </h1>
                <p className="text-sm text-gray-600">Платформа наставничества</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                Стать наставником
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Найди своего <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">наставника</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Бесплатная платформа для связи студентов и старшеклассников с опытными наставниками. 
            Персональные консультации, подготовка к экзаменам, карьерное развитие.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск наставников по предмету, университету или имени..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 transition-all duration-300 shadow-lg"
              />
              <Link to="/search">
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl">
                  Найти
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Популярные направления</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={category.icon as any} size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                  <p className="text-sm text-gray-500">{category.count} наставников</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Mentors */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Топ наставники</h3>
            <Link to="/search">
              <Button variant="outline" className="border-2 hover:border-blue-500 hover:text-blue-600">
                Посмотреть всех
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topMentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16 ring-4 ring-white shadow-md">
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                            {mentor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor(mentor.status)} rounded-full border-2 border-white`}></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{mentor.name}</h4>
                        <p className="text-sm text-gray-500">{mentor.university}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold text-gray-700">{mentor.rating}</span>
                          <span className="text-sm text-gray-500">({mentor.reviews} отзывов)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={mentor.status === "online" ? "default" : "secondary"} className="mb-2">
                        {getStatusText(mentor.status)}
                      </Badge>
                      <p className="text-xs text-gray-500">Ответ {mentor.responseTime}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm">{mentor.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-xs text-gray-500 flex items-center">
                      <Icon name="Clock" size={12} className="mr-1" />
                      Опыт {mentor.experience}
                    </div>
                    <Link to={`/mentor/${mentor.id}`}>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Написать
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Типы консультаций</h3>
          
          <Tabs defaultValue="individual" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="individual" className="text-sm">Индивидуальные</TabsTrigger>
              <TabsTrigger value="group" className="text-sm">Групповые</TabsTrigger>
              <TabsTrigger value="express" className="text-sm">Экспресс</TabsTrigger>
            </TabsList>
            
            {sessionTypes.map((type, index) => (
              <TabsContent key={index} value={index === 0 ? "individual" : index === 1 ? "group" : "express"}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={type.icon as any} size={32} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {type.title}
                      {type.popular && <Badge className="ml-2 bg-orange-500">Популярно</Badge>}
                    </h4>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-1" />
                        {type.duration}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Video" size={16} className="mr-1" />
                        Видеосвязь
                      </div>
                      <div className="flex items-center">
                        <Icon name="FileText" size={16} className="mr-1" />
                        Материалы
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1,247</div>
            <p className="text-gray-600">Активных наставников</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">15,000+</div>
            <p className="text-gray-600">Студентов помогли</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.8</div>
            <p className="text-gray-600">Средний рейтинг</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <p className="text-gray-600">Поддержка</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">МентурМетрон</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Платформа наставничества для студентов и старшеклассников
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Для студентов</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Найти наставника</a></li>
                <li><a href="#" className="hover:text-blue-600">Подготовка к ЕГЭ</a></li>
                <li><a href="#" className="hover:text-blue-600">Карьерная консультация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Для наставников</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Стать наставником</a></li>
                <li><a href="#" className="hover:text-blue-600">Создать профиль</a></li>
                <li><a href="#" className="hover:text-blue-600">Управление расписанием</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Помощь</a></li>
                <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
                <li><a href="#" className="hover:text-blue-600">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 МентурМетрон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;