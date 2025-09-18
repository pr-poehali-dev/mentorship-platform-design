import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const MentorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock mentor data - in real app would fetch by ID
  const mentor = {
    id: 1,
    name: "Анна Петрова",
    avatar: "/api/placeholder/120/120",
    rating: 4.9,
    reviews: 127,
    expertise: ["Математика", "Физика", "Механика", "Статистика"],
    experience: "5 лет",
    description: "Кандидат физико-математических наук, преподаватель МГУ с 5-летним опытом преподавания. Специализируюсь на подготовке к ЕГЭ, ОГЭ и олимпиадам по математике и физике.",
    status: "online",
    university: "МГУ им. М.В. Ломоносова",
    faculty: "Механико-математический факультет",
    responseTime: "~30 мин",
    completedSessions: 145,
    successRate: 92,
    languages: ["Русский", "Английский"],
    education: [
      {
        degree: "Кандидат физико-математических наук",
        university: "МГУ им. М.В. Ломоносова",
        year: "2018",
        field: "Теоретическая механика"
      },
      {
        degree: "Магистр математики",
        university: "МГУ им. М.В. Ломоносова", 
        year: "2015",
        field: "Прикладная математика"
      }
    ],
    achievements: [
      "Лауреат премии за лучшее преподавание МГУ 2022",
      "Подготовила 15 призёров олимпиад",
      "Средний балл учеников на ЕГЭ: 87 баллов",
      "Автор 3 научных статей"
    ],
    schedule: {
      monday: ["09:00-12:00", "14:00-18:00"],
      tuesday: ["10:00-13:00", "15:00-19:00"],
      wednesday: ["09:00-12:00", "14:00-17:00"],
      thursday: ["10:00-13:00", "15:00-18:00"],
      friday: ["09:00-15:00"],
      saturday: ["10:00-14:00"],
      sunday: ["выходной"]
    },
    sessionTypes: [
      {
        type: "Индивидуальная консультация",
        duration: "60 мин",
        description: "Персональное занятие по любой теме"
      },
      {
        type: "Подготовка к экзаменам",
        duration: "90 мин", 
        description: "Интенсивная подготовка к ЕГЭ/ОГЭ"
      },
      {
        type: "Помощь с домашним заданием",
        duration: "30 мин",
        description: "Быстрая помощь с конкретными задачами"
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      student: "Мария К.",
      avatar: "/api/placeholder/40/40",
      rating: 5,
      date: "2 недели назад",
      comment: "Отличный преподаватель! Анна Петровна очень доходчиво объясняет сложные темы по математике. Благодаря ей сдала ЕГЭ на 92 балла!",
      subject: "Математика"
    },
    {
      id: 2,
      student: "Дмитрий Н.",
      avatar: "/api/placeholder/40/40", 
      rating: 5,
      date: "1 месяц назад",
      comment: "Профессиональный подход к обучению. Помогла разобраться с механикой, теперь физика стала намного понятнее.",
      subject: "Физика"
    },
    {
      id: 3,
      student: "Елена С.",
      avatar: "/api/placeholder/40/40",
      rating: 4,
      date: "2 месяца назад", 
      comment: "Очень терпеливая и внимательная. Всегда готова помочь и ответить на любые вопросы. Рекомендую!",
      subject: "Математика"
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

  const getDayName = (day: string) => {
    const days: { [key: string]: string } = {
      monday: "Понедельник",
      tuesday: "Вторник", 
      wednesday: "Среда",
      thursday: "Четверг",
      friday: "Пятница",
      saturday: "Суббота",
      sunday: "Воскресенье"
    };
    return days[day];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  МентурМетрон
                </h1>
                <p className="text-sm text-gray-600">Платформа наставничества</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/search">
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  К поиску
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Avatar and Status */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="relative inline-block">
                  <Avatar className="w-32 h-32 ring-4 ring-white shadow-xl mx-auto md:mx-0">
                    <AvatarImage src={mentor.avatar} alt={mentor.name} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 ${getStatusColor(mentor.status)} rounded-full border-4 border-white`}></div>
                </div>
                <div className="mt-4">
                  <Badge variant={mentor.status === "online" ? "default" : "secondary"} className="mb-2">
                    {getStatusText(mentor.status)}
                  </Badge>
                  <p className="text-sm text-gray-600">Ответ {mentor.responseTime}</p>
                </div>
              </div>

              {/* Main Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{mentor.name}</h1>
                    <p className="text-lg text-gray-600 mb-3">{mentor.university}</p>
                    <p className="text-gray-600 mb-4">{mentor.faculty}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Icon name="Star" size={20} className="text-yellow-500 fill-current mr-2" />
                        <span className="text-lg font-semibold text-gray-900">{mentor.rating}</span>
                        <span className="ml-1">({mentor.reviews} отзывов)</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Clock" size={20} className="mr-2" />
                        <span>Опыт {mentor.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Icon name="Users" size={20} className="mr-2" />
                        <span>{mentor.completedSessions} сессий проведено</span>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3 lg:ml-6">
                    <Link to={`/booking/${mentor.id}`}>
                      <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Icon name="Calendar" size={20} className="mr-2" />
                        Записаться на сессию
                      </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="w-full">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать сообщение
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Icon name="Heart" size={20} className="mr-2" />
                      В избранное
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="education">Образование</TabsTrigger>
            <TabsTrigger value="schedule">Расписание</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            <TabsTrigger value="sessions">Сессии</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* About */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="User" size={20} className="mr-2" />
                    О наставнике
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{mentor.description}</p>
                  <Separator className="my-4" />
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-600">Языки:</span>
                      <div className="flex gap-2 mt-1">
                        {mentor.languages.map((lang, index) => (
                          <Badge key={index} variant="outline">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BarChart3" size={20} className="mr-2" />
                    Статистика
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Успешность сессий</span>
                      <span className="text-sm text-gray-600">{mentor.successRate}%</span>
                    </div>
                    <Progress value={mentor.successRate} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Рейтинг</span>
                      <span className="text-sm text-gray-600">{mentor.rating}/5.0</span>
                    </div>
                    <Progress value={mentor.rating * 20} className="h-2" />
                  </div>

                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{mentor.completedSessions}</div>
                      <div className="text-xs text-gray-500">Сессий проведено</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">{mentor.reviews}</div>
                      <div className="text-xs text-gray-500">Отзывов получено</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Award" size={20} className="mr-2" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mentor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle" size={16} className="text-white" />
                      </div>
                      <span className="text-gray-800 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="GraduationCap" size={20} className="mr-2" />
                  Образование
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mentor.education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-blue-100"></div>
                      {index < mentor.education.length - 1 && (
                        <div className="absolute left-2 top-5 w-0.5 h-16 bg-blue-200"></div>
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium">{edu.university}</p>
                        <p className="text-gray-600">{edu.field}</p>
                        <span className="text-sm text-gray-500">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Расписание работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {Object.entries(mentor.schedule).map(([day, times]) => (
                    <div key={day} className="flex items-center justify-between p-4 border rounded-lg">
                      <span className="font-medium text-gray-900">{getDayName(day)}</span>
                      <div className="flex gap-2">
                        {Array.isArray(times) ? (
                          times.map((time, index) => (
                            <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              {time}
                            </Badge>
                          ))
                        ) : (
                          <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
                            {times}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    Отзывы ({mentor.reviews})
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                    <span className="text-lg font-semibold">{mentor.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.avatar} alt={review.student} />
                          <AvatarFallback className="bg-gray-200 text-gray-600">
                            {review.student[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="font-medium text-gray-900">{review.student}</span>
                              <Badge variant="outline" className="ml-2 text-xs">{review.subject}</Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Icon
                                    key={i}
                                    name="Star"
                                    size={14}
                                    className={`${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sessions Tab */}
          <TabsContent value="sessions">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Video" size={20} className="mr-2" />
                  Типы сессий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {mentor.sessionTypes.map((session, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{session.type}</h3>
                          <p className="text-gray-600 mb-3">{session.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Icon name="Clock" size={16} className="mr-1" />
                            <span>Длительность: {session.duration}</span>
                          </div>
                        </div>
                        <Link to={`/booking/${mentor.id}?type=${encodeURIComponent(session.type)}`}>
                          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            Записаться
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MentorProfile;