import { useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { format, addDays, isToday, isTomorrow } from "date-fns";
import { ru } from "date-fns/locale";

const BookingPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const preselectedType = searchParams.get('type');

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSessionType, setSelectedSessionType] = useState(preselectedType || "");
  const [sessionDuration, setSessionDuration] = useState("60");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [sessionTopic, setSessionTopic] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [goals, setGoals] = useState("");
  const [preferredFormat, setPreferredFormat] = useState("online");
  const [notifications, setNotifications] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  // Mock mentor data
  const mentor = {
    id: 1,
    name: "Анна Петрова",
    avatar: "/api/placeholder/80/80",
    rating: 4.9,
    reviews: 127,
    expertise: ["Математика", "Физика"],
    university: "МГУ",
    responseTime: "~30 мин"
  };

  const sessionTypes = [
    {
      id: "consultation",
      name: "Индивидуальная консультация",
      description: "Персональное занятие по любой теме",
      duration: "60 мин",
      icon: "User"
    },
    {
      id: "exam-prep",
      name: "Подготовка к экзаменам",
      description: "Интенсивная подготовка к ЕГЭ/ОГЭ",
      duration: "90 мин",
      icon: "BookOpen"
    },
    {
      id: "homework",
      name: "Помощь с домашним заданием",
      description: "Быстрая помощь с конкретными задачами",
      duration: "30 мин",
      icon: "HelpCircle"
    },
    {
      id: "group",
      name: "Групповая сессия",
      description: "Обучение в небольшой группе",
      duration: "90 мин",
      icon: "Users"
    }
  ];

  const availableSlots = {
    morning: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
    afternoon: ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    evening: ["18:00", "18:30", "19:00", "19:30", "20:00"]
  };

  const getDateDescription = (date: Date) => {
    if (isToday(date)) return "Сегодня";
    if (isTomorrow(date)) return "Завтра";
    return format(date, "EEEE", { locale: ru });
  };

  const isSlotAvailable = (slot: string) => {
    // Mock logic - some slots are unavailable
    const unavailable = ["10:30", "15:00", "19:30"];
    return !unavailable.includes(slot);
  };

  const handleBooking = () => {
    // Mock booking logic
    alert("Заявка отправлена! Анна Петровна свяжется с вами в течение 30 минут.");
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return "Выберите тип сессии";
      case 2: return "Выберите дату и время";
      case 3: return "Заполните информацию";
      case 4: return "Подтвердите запись";
      default: return "";
    }
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
              <Link to={`/mentor/${id}`}>
                <Button variant="ghost" className="text-gray-600 hover:text-blue-600">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  К профилю
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
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900">{getStepTitle(currentStep)}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mentor Info */}
          <Card className="border-0 shadow-md mb-6">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 ring-4 ring-white shadow-md">
                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.university}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center text-sm">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold">{mentor.rating}</span>
                      <span className="text-gray-500 ml-1">({mentor.reviews} отзывов)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      <span>Ответ {mentor.responseTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Steps */}
          {currentStep === 1 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Типы сессий</CardTitle>
                <CardDescription>Выберите подходящий формат консультации</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedSessionType} onValueChange={setSelectedSessionType}>
                  <div className="grid gap-4">
                    {sessionTypes.map((type) => (
                      <div key={type.id} className="relative">
                        <div className={`flex items-center space-x-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedSessionType === type.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                        }`}>
                          <RadioGroupItem value={type.name} id={type.id} />
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  selectedSessionType === type.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                                }`}>
                                  <Icon name={type.icon as any} size={20} />
                                </div>
                                <div>
                                  <Label htmlFor={type.id} className="text-base font-semibold cursor-pointer">
                                    {type.name}
                                  </Label>
                                  <p className="text-sm text-gray-600">{type.description}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {type.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
                
                <div className="flex justify-end mt-6">
                  <Button 
                    onClick={() => setCurrentStep(2)} 
                    disabled={!selectedSessionType}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    Далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Calendar */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Выберите дату</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              {/* Time Slots */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Выберите время</CardTitle>
                  {selectedDate && (
                    <CardDescription>
                      {getDateDescription(selectedDate)}, {format(selectedDate, "d MMMM", { locale: ru })}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <Tabs defaultValue="morning" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="morning">Утро</TabsTrigger>
                        <TabsTrigger value="afternoon">День</TabsTrigger>
                        <TabsTrigger value="evening">Вечер</TabsTrigger>
                      </TabsList>

                      {Object.entries(availableSlots).map(([period, slots]) => (
                        <TabsContent key={period} value={period} className="mt-4">
                          <div className="grid grid-cols-3 gap-2">
                            {slots.map((slot) => (
                              <Button
                                key={slot}
                                variant={selectedTime === slot ? "default" : "outline"}
                                size="sm"
                                disabled={!isSlotAvailable(slot)}
                                onClick={() => setSelectedTime(slot)}
                                className={`${
                                  selectedTime === slot 
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                                    : isSlotAvailable(slot) 
                                      ? 'hover:border-blue-500' 
                                      : 'opacity-50 cursor-not-allowed'
                                }`}
                              >
                                {slot}
                              </Button>
                            ))}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  ) : (
                    <p className="text-center text-gray-500 py-8">Сначала выберите дату</p>
                  )}
                </CardContent>
              </Card>

              <div className="md:col-span-2 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад
                </Button>
                <Button 
                  onClick={() => setCurrentStep(3)} 
                  disabled={!selectedDate || !selectedTime}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Информация о студенте</CardTitle>
                <CardDescription>Расскажите о себе и целях консультации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="name">Имя и фамилия *</Label>
                      <Input 
                        id="name" 
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Иван Петров"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        placeholder="ivan@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        placeholder="+7 (900) 123-45-67"
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Session Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="topic">Тема консультации *</Label>
                      <Select value={sessionTopic} onValueChange={setSessionTopic}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math-basics">Основы математики</SelectItem>
                          <SelectItem value="physics-mechanics">Механика</SelectItem>
                          <SelectItem value="exam-prep">Подготовка к экзаменам</SelectItem>
                          <SelectItem value="homework">Помощь с ДЗ</SelectItem>
                          <SelectItem value="career">Карьерная консультация</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Уровень подготовки</Label>
                      <Select value={experience} onValueChange={setExperience}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите уровень" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Начинающий</SelectItem>
                          <SelectItem value="intermediate">Средний</SelectItem>
                          <SelectItem value="advanced">Продвинутый</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Подробное описание</Label>
                    <Textarea 
                      id="description"
                      value={sessionDescription}
                      onChange={(e) => setSessionDescription(e.target.value)}
                      placeholder="Опишите, с чем именно вам нужна помощь, какие конкретные вопросы хотите обсудить..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="goals">Цели консультации</Label>
                    <Textarea 
                      id="goals"
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="Что хотите получить в результате консультации? Какие навыки развить?"
                      rows={3}
                    />
                  </div>

                  <Separator />

                  {/* Preferences */}
                  <div>
                    <Label className="text-base font-medium">Формат проведения</Label>
                    <RadioGroup value={preferredFormat} onValueChange={setPreferredFormat} className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online">Онлайн (видеосвязь)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="offline" id="offline" />
                        <Label htmlFor="offline">Очно (при возможности)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={(checked) => setNotifications(checked as boolean)}
                    />
                    <Label htmlFor="notifications" className="text-sm">
                      Отправлять напоминания о консультации на email
                    </Label>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Назад
                    </Button>
                    <Button 
                      onClick={() => setCurrentStep(4)} 
                      disabled={!studentName || !studentEmail || !sessionTopic}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Подтверждение записи</CardTitle>
                <CardDescription>Проверьте данные перед отправкой заявки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Session Summary */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                        <p className="text-gray-600">{mentor.university}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Icon name="Calendar" size={16} className="mr-2" />
                          {selectedDate && format(selectedDate, "d MMMM, EEEE", { locale: ru })}
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Icon name="Clock" size={16} className="mr-2" />
                          {selectedTime}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Icon name="Video" size={16} className="mr-2" />
                          {preferredFormat === "online" ? "Онлайн" : "Очно"}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Icon name="User" size={16} className="mr-2" />
                          {selectedSessionType}
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Icon name="BookOpen" size={16} className="mr-2" />
                          {sessionTopic}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Icon name="Star" size={16} className="mr-2" />
                          Бесплатная консультация
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Контактная информация</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Имя:</span>
                          <span className="ml-2 font-medium">{studentName}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Email:</span>
                          <span className="ml-2 font-medium">{studentEmail}</span>
                        </div>
                        {studentPhone && (
                          <div>
                            <span className="text-gray-600">Телефон:</span>
                            <span className="ml-2 font-medium">{studentPhone}</span>
                          </div>
                        )}
                        {experience && (
                          <div>
                            <span className="text-gray-600">Уровень:</span>
                            <span className="ml-2 font-medium">{experience}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {sessionDescription && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Описание</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{sessionDescription}</p>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setCurrentStep(3)}>
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Назад
                    </Button>
                    <Button 
                      onClick={handleBooking}
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      <Icon name="Check" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;