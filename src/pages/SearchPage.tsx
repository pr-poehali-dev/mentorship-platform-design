import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("all");
  const [ratingFilter, setRatingFilter] = useState([0]);
  const [statusFilter, setStatusFilter] = useState("all");

  const mentors = [
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
      responseTime: "~30 мин",
      completedSessions: 145
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
      responseTime: "~2 часа",
      completedSessions: 98
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
      responseTime: "~15 мин",
      completedSessions: 234
    },
    {
      id: 4,
      name: "Михаил Волков",
      avatar: "/api/placeholder/80/80",
      rating: 4.7,
      reviews: 73,
      expertise: ["Химия", "Биология"],
      experience: "4 года",
      description: "Аспирант МГУ, специалист по органической химии",
      status: "online",
      university: "МГУ",
      responseTime: "~45 мин",
      completedSessions: 87
    },
    {
      id: 5,
      name: "Ольга Иванова",
      avatar: "/api/placeholder/80/80",
      rating: 4.8,
      reviews: 112,
      expertise: ["История", "Обществознание"],
      experience: "6 лет",
      description: "Кандидат исторических наук, преподаватель СПбГУ",
      status: "offline",
      university: "СПбГУ",
      responseTime: "~1 час",
      completedSessions: 134
    },
    {
      id: 6,
      name: "Александр Соколов",
      avatar: "/api/placeholder/80/80",
      rating: 4.9,
      reviews: 201,
      expertise: ["Математика", "Информатика"],
      experience: "8 лет",
      description: "Преподаватель высшей математики, олимпиадник",
      status: "online",
      university: "МФТИ",
      responseTime: "~20 мин",
      completedSessions: 289
    }
  ];

  const subjects = [
    "Математика", "Физика", "Программирование", "Английский", 
    "Химия", "Биология", "История", "Обществознание", "Информатика"
  ];

  const universities = [
    "МГУ", "МФТИ", "РУДН", "СПбГУ", "ВШЭ", "МГТУ", "ИТМО"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "busy": return "bg-yellow-500";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "В сети";
      case "busy": return "Занят";
      case "offline": return "Не в сети";
      default: return "Не в сети";
    }
  };

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         mentor.university.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = selectedSubject === "all" || 
                          mentor.expertise.some(skill => skill === selectedSubject);
    
    const matchesUniversity = selectedUniversity === "all" || 
                             mentor.university === selectedUniversity;
    
    const matchesRating = mentor.rating >= ratingFilter[0];
    
    const matchesStatus = statusFilter === "all" || mentor.status === statusFilter;

    return matchesSearch && matchesSubject && matchesUniversity && matchesRating && matchesStatus;
  });

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

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="border-0 shadow-lg mb-6">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Icon name="Filter" size={20} className="mr-2" />
                  Фильтры
                </h3>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Поиск</label>
                  <div className="relative">
                    <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Имя, предмет, университет..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Subject Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Предмет</label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите предмет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все предметы</SelectItem>
                      {subjects.map(subject => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* University Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Университет</label>
                  <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите университет" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все университеты</SelectItem>
                      {universities.map(university => (
                        <SelectItem key={university} value={university}>{university}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Минимальный рейтинг: {ratingFilter[0].toFixed(1)}
                  </label>
                  <Slider
                    value={ratingFilter}
                    onValueChange={setRatingFilter}
                    max={5}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* Status Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Статус</label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все статусы</SelectItem>
                      <SelectItem value="online">В сети</SelectItem>
                      <SelectItem value="busy">Занят</SelectItem>
                      <SelectItem value="offline">Не в сети</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSubject("all");
                    setSelectedUniversity("all");
                    setRatingFilter([0]);
                    setStatusFilter("all");
                  }}
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Очистить фильтры
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Наставники ({filteredMentors.length})
              </h2>
              <Select defaultValue="rating">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="reviews">По количеству отзывов</SelectItem>
                  <SelectItem value="experience">По опыту</SelectItem>
                  <SelectItem value="sessions">По проведенным сессиям</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Avatar and Status */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <Avatar className="w-20 h-20 ring-4 ring-white shadow-lg">
                            <AvatarImage src={mentor.avatar} alt={mentor.name} />
                            <AvatarFallback className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                              {mentor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${getStatusColor(mentor.status)} rounded-full border-2 border-white`}></div>
                        </div>
                      </div>

                      {/* Main Info */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                            <p className="text-gray-600 mb-2">{mentor.university}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                              <div className="flex items-center">
                                <Icon name="Star" size={16} className="text-yellow-500 fill-current mr-1" />
                                <span className="font-semibold text-gray-700">{mentor.rating}</span>
                                <span className="ml-1">({mentor.reviews} отзывов)</span>
                              </div>
                              <div className="flex items-center">
                                <Icon name="Clock" size={16} className="mr-1" />
                                <span>Опыт {mentor.experience}</span>
                              </div>
                              <div className="flex items-center">
                                <Icon name="Users" size={16} className="mr-1" />
                                <span>{mentor.completedSessions} сессий</span>
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

                        <p className="text-gray-600 mb-4">{mentor.description}</p>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {mentor.expertise.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-3">
                            <Link to={`/mentor/${mentor.id}`}>
                              <Button variant="outline" size="sm">
                                <Icon name="Eye" size={16} className="mr-2" />
                                Профиль
                              </Button>
                            </Link>
                            <Link to={`/booking/${mentor.id}`}>
                              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                <Icon name="Calendar" size={16} className="mr-2" />
                                Записаться
                              </Button>
                            </Link>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            <Icon name="MessageCircle" size={16} className="mr-2" />
                            Написать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMentors.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Наставники не найдены</h3>
                <p className="text-gray-600 mb-4">Попробуйте изменить параметры поиска или фильтры</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSubject("all");
                    setSelectedUniversity("all");
                    setRatingFilter([0]);
                    setStatusFilter("all");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;