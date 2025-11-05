"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  MapPin,
  Clock,
  Calendar,
  Users,
  BookOpen,
  MessageCircle,
  CheckCircle2,
  Navigation,
} from "lucide-react"
import { ShiftChat } from "@/components/shift-chat"
import { ShiftTracker } from "@/components/shift-tracker"

const hotelShifts = {
  "1": {
    id: 1,
    title: "Администратор ресепшн",
    company: "Гранд Отель Крым",
    image: "/hotel-reception.jpg",
    description:
      "Требуется администратор на ресепшн для работы в отеле. Основные обязанности: регистрация гостей, работа с бронированиями, консультирование по услугам отеля, решение вопросов гостей.",
    address: "ул. Ленина, 45",
    district: "Центральный",
    date: "Сегодня",
    time: "14:00 - 22:00",
    payment: 1500,
    difficulty: "Средне",
    hasTraining: true,
    spotsAvailable: 2,
    totalSpots: 3,
    requirements: [
      "Возраст 18+",
      "Опрятный внешний вид",
      "Знание английского языка приветствуется",
      "Коммуникабельность",
    ],
    responsibilities: [
      "Регистрация и выписка гостей",
      "Работа с системой бронирования",
      "Консультирование гостей по услугам отеля",
      "Прием и обработка платежей",
    ],
    training: {
      duration: "1 час",
      format: "Видео-инструкция + практика с наставником",
      topics: ["Работа с системой бронирования", "Стандарты обслуживания", "Работа с жалобами", "Кассовые операции"],
    },
    coordinates: { lat: 44.4952, lng: 34.1636 },
  },
  "2": {
    id: 2,
    title: "Горничная",
    company: "Отель Ялта-Интурист",
    image: "/hotel-housekeeping.jpg",
    description:
      "Требуется горничная для уборки номеров в отеле. Основные обязанности: уборка номеров, смена белья, пополнение мини-бара, поддержание чистоты в общественных зонах.",
    address: "Набережная им. Ленина, 50",
    district: "Набережная",
    date: "Завтра",
    time: "08:00 - 16:00",
    payment: 1200,
    difficulty: "Легко",
    hasTraining: false,
    spotsAvailable: 5,
    totalSpots: 8,
    requirements: ["Возраст 18+", "Аккуратность", "Физическая выносливость", "Внимание к деталям"],
    responsibilities: [
      "Уборка номеров согласно стандартам",
      "Смена постельного белья и полотенец",
      "Пополнение косметических принадлежностей",
      "Уборка общественных зон",
    ],
    training: {
      duration: "30 минут",
      format: "Практическое обучение",
      topics: ["Стандарты уборки", "Работа с инвентарем", "Техника безопасности"],
    },
    coordinates: { lat: 44.4952, lng: 34.1636 },
  },
  "3": {
    id: 3,
    title: "Официант",
    company: "Ливадия Палас",
    image: "/hotel-restaurant.jpg",
    description:
      "Требуется официант для работы в ресторане отеля. Основные обязанности: обслуживание гостей, прием заказов, подача блюд и напитков, работа с кассой.",
    address: "Ливадийский дворец, 1",
    district: "Ливадия",
    date: "Сегодня",
    time: "18:00 - 02:00",
    payment: 1800,
    difficulty: "Средне",
    hasTraining: true,
    spotsAvailable: 3,
    totalSpots: 5,
    requirements: ["Возраст 18+", "Опыт работы приветствуется", "Презентабельный внешний вид", "Стрессоустойчивость"],
    responsibilities: [
      "Обслуживание гостей ресторана",
      "Прием и оформление заказов",
      "Подача блюд и напитков",
      "Работа с кассовым аппаратом",
    ],
    training: {
      duration: "1.5 часа",
      format: "Теория + практика",
      topics: ["Меню и винная карта", "Техника сервировки", "Стандарты обслуживания", "Работа с POS-системой"],
    },
    coordinates: { lat: 44.4677, lng: 34.1436 },
  },
  "4": {
    id: 4,
    title: "Портье",
    company: "Mriya Resort & SPA",
    image: "/hotel-concierge.jpg",
    description:
      "Требуется портье для работы на входе в отель. Основные обязанности: встреча гостей, помощь с багажом, вызов такси, информирование о достопримечательностях.",
    address: "Алупкинское шоссе, 60",
    district: "Алупка",
    date: "Завтра",
    time: "06:00 - 14:00",
    payment: 1400,
    difficulty: "Легко",
    hasTraining: false,
    spotsAvailable: 2,
    totalSpots: 2,
    requirements: ["Возраст 18+", "Физическая выносливость", "Вежливость", "Знание местности"],
    responsibilities: [
      "Встреча и проводы гостей",
      "Помощь с багажом",
      "Вызов такси и трансфер",
      "Консультирование по достопримечательностям",
    ],
    training: {
      duration: "30 минут",
      format: "Инструктаж",
      topics: ["Стандарты встречи гостей", "Работа с багажом", "Местные достопримечательности"],
    },
    coordinates: { lat: 44.4197, lng: 34.0486 },
  },
  "5": {
    id: 5,
    title: "Бармен",
    company: "Вилла Елена",
    image: "/hotel-bar.jpg",
    description:
      "Требуется бармен для работы в баре отеля. Основные обязанности: приготовление коктейлей и напитков, обслуживание гостей, поддержание чистоты бара.",
    address: "ул. Гагарина, 23",
    district: "Гурзуф",
    date: "Через 2 дня",
    time: "16:00 - 00:00",
    payment: 1600,
    difficulty: "Средне",
    hasTraining: true,
    spotsAvailable: 1,
    totalSpots: 2,
    requirements: ["Возраст 18+", "Опыт работы барменом", "Знание коктейлей", "Коммуникабельность"],
    responsibilities: [
      "Приготовление коктейлей и напитков",
      "Обслуживание гостей бара",
      "Поддержание чистоты рабочего места",
      "Контроль запасов",
    ],
    training: {
      duration: "2 часа",
      format: "Практическое обучение",
      topics: ["Барная карта", "Техника приготовления коктейлей", "Работа с оборудованием", "Кассовые операции"],
    },
    coordinates: { lat: 44.5447, lng: 34.2808 },
  },
  "6": {
    id: 6,
    title: "Аниматор",
    company: "Пальмира Палас",
    image: "/hotel-animation.jpg",
    description:
      "Требуется аниматор для работы с гостями отеля. Основные обязанности: проведение развлекательных программ, организация игр и конкурсов, работа с детьми.",
    address: "Алуштинское шоссе, 12",
    district: "Массандра",
    date: "Через 3 дня",
    time: "10:00 - 18:00",
    payment: 2000,
    difficulty: "Сложно",
    hasTraining: false,
    spotsAvailable: 2,
    totalSpots: 3,
    requirements: ["Возраст 18+", "Артистизм", "Опыт работы с людьми", "Энергичность"],
    responsibilities: [
      "Проведение развлекательных программ",
      "Организация игр и конкурсов",
      "Работа с детской аудиторией",
      "Создание позитивной атмосферы",
    ],
    training: {
      duration: "1 час",
      format: "Инструктаж + репетиция",
      topics: ["Программа мероприятий", "Работа с аудиторией", "Техника безопасности"],
    },
    coordinates: { lat: 44.5136, lng: 34.1808 },
  },
}

export default function ShiftDetailPageClient({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showChat, setShowChat] = useState(false)
  const [showTracker, setShowTracker] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

  const shiftData = hotelShifts[params.id as keyof typeof hotelShifts] || hotelShifts["1"]

  const handleApply = () => {
    setIsApplied(true)
    setTimeout(() => {
      router.push("/shifts/my")
    }, 1500)
  }

  if (showTracker) {
    return <ShiftTracker shift={shiftData} onBack={() => setShowTracker(false)} />
  }

  if (showChat) {
    return <ShiftChat shift={shiftData} onBack={() => setShowChat(false)} />
  }

  return (
    <div className="min-h-screen bg-muted pb-24">
      {/* Header Image */}
      <div className="relative">
        <div className="aspect-[16/9] bg-muted overflow-hidden">
          <img
            src={shiftData.image || "/placeholder.svg"}
            alt={shiftData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 rounded-full shadow-lg"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        {shiftData.hasTraining && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg">
            <BookOpen className="w-3 h-3 mr-1" />
            Обучение
          </Badge>
        )}
      </div>

      <div className="container mx-auto px-4 py-6 space-4">
        {/* Main Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{shiftData.title}</h1>
                <p className="text-lg text-muted-foreground">{shiftData.company}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{shiftData.payment} ₽</p>
                <Badge variant="secondary" className="mt-2">
                  {shiftData.difficulty}
                </Badge>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">{shiftData.description}</p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>
                Осталось мест: {shiftData.spotsAvailable} из {shiftData.totalSpots}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Schedule & Location */}
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Дата</p>
                <p className="font-semibold">{shiftData.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Время</p>
                <p className="font-semibold">{shiftData.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="font-semibold">{shiftData.address}</p>
              </div>
              <Button variant="outline" size="sm">
                <Navigation className="w-4 h-4" />
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-lg bg-muted overflow-hidden mt-4">
              <img src="/world-map-vintage.png" alt="Map" className="w-full h-full object-cover" />
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Требования</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {shiftData.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Responsibilities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Обязанности</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {shiftData.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-sm">{resp}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Training Info */}
        {shiftData.hasTraining && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Обучение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Длительность</p>
                <p className="font-semibold">{shiftData.training.duration}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Формат</p>
                <p className="font-semibold">{shiftData.training.format}</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-2">Темы обучения:</p>
                <ul className="space-y-1">
                  {shiftData.training.topics.map((topic, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
        <div className="container mx-auto flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setShowChat(true)}>
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleApply}
            disabled={isApplied}
          >
            {isApplied ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Отклик отправлен
              </>
            ) : (
              "Взять смену"
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
