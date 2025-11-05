"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Calendar, CheckCircle2 } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

const myShifts = {
  upcoming: [
    {
      id: 1,
      title: "Администратор ресепшн",
      company: "Гранд Отель Крым",
      date: "Сегодня",
      time: "14:00 - 22:00",
      payment: 1500,
      address: "ул. Ленина, 45",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Официант",
      company: "Ливадия Палас",
      date: "Завтра",
      time: "18:00 - 02:00",
      payment: 1800,
      address: "Ливадийский дворец, 1",
      status: "confirmed",
    },
  ],
  completed: [
    {
      id: 3,
      title: "Горничная",
      company: "Отель Ялта-Интурист",
      date: "2 дня назад",
      time: "08:00 - 16:00",
      payment: 1200,
      address: "Набережная им. Ленина, 50",
      status: "completed",
      rating: 5,
    },
    {
      id: 4,
      title: "Портье",
      company: "Mriya Resort & SPA",
      date: "4 дня назад",
      time: "06:00 - 14:00",
      payment: 1400,
      address: "Алупкинское шоссе, 60",
      status: "completed",
      rating: 4,
    },
  ],
  pending: [
    {
      id: 5,
      title: "Бармен",
      company: "Вилла Елена",
      date: "Через 3 дня",
      time: "16:00 - 00:00",
      payment: 1600,
      address: "ул. Гагарина, 23",
      status: "pending",
    },
  ],
}

export default function MyShiftsPage() {
  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Мои смены</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
            <TabsTrigger value="pending">Отклики</TabsTrigger>
            <TabsTrigger value="completed">Завершенные</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4 mt-4">
            {myShifts.upcoming.map((shift) => (
              <Link key={shift.id} href={`/shifts/${shift.id}`}>
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{shift.title}</h3>
                        <p className="text-sm text-muted-foreground">{shift.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">{shift.payment} ₽</p>
                        <Badge className="mt-1 bg-green-100 text-green-800 border-0">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Подтверждено
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{shift.address}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {shift.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {shift.time}
                        </div>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                      Начать смену
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4 mt-4">
            {myShifts.pending.map((shift) => (
              <Card key={shift.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{shift.title}</h3>
                      <p className="text-sm text-muted-foreground">{shift.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">{shift.payment} ₽</p>
                      <Badge variant="secondary" className="mt-1">
                        На рассмотрении
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{shift.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {shift.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {shift.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4 mt-4">
            {myShifts.completed.map((shift) => (
              <Card key={shift.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{shift.title}</h3>
                      <p className="text-sm text-muted-foreground">{shift.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">+{shift.payment} ₽</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < shift.rating ? "text-secondary" : "text-muted"}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{shift.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {shift.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {shift.time}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  )
}
