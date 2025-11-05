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

// Mock shift data
const shiftData = {
  id: 1,
  title: "Сборщик заказов",
  company: "Wildberries ПВЗ",
  image: "/placeholder.svg?key=shift1",
  description:
    "Требуется сборщик заказов для работы в пункте выдачи заказов. Основные обязанности: прием товара, размещение на стеллажах, сборка заказов для клиентов, выдача заказов.",
  address: "ул. Ленина, 45",
  district: "Центральный",
  date: "Сегодня",
  time: "14:00 - 20:00",
  payment: 1200,
  difficulty: "Легко",
  hasTraining: true,
  spotsAvailable: 3,
  totalSpots: 5,
  requirements: ["Возраст 18+", "Самозанятость", "Медицинская книжка", "Физическая выносливость"],
  responsibilities: [
    "Прием и размещение товара",
    "Сборка заказов по накладным",
    "Выдача заказов клиентам",
    "Поддержание порядка на складе",
  ],
  training: {
    duration: "30 минут",
    format: "Видео-инструкция + практика",
    topics: ["Работа с системой учета", "Правила приема товара", "Сборка заказов", "Общение с клиентами"],
  },
  coordinates: { lat: 55.7558, lng: 37.6173 },
}

export default function ShiftDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showChat, setShowChat] = useState(false)
  const [showTracker, setShowTracker] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

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

      <div className="container mx-auto px-4 py-6 space-y-4">
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
