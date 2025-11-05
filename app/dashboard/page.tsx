"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Wallet, TrendingUp, MapPin, Clock, Star, ChevronRight, Menu } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

// Mock data
const userData = {
  name: "Иван Иванов",
  avatar: "/diverse-user-avatars.png",
  city: "Москва",
  balance: 15420,
  rating: 4.8,
  completedShifts: 24,
  badges: [
    { id: 1, name: "Новичок", icon: "🌟" },
    { id: 2, name: "Пунктуальный", icon: "⏰" },
    { id: 3, name: "Топ-10", icon: "🏆" },
  ],
}

const upcomingShifts = [
  {
    id: 1,
    title: "Сборщик заказов",
    company: "Wildberries ПВЗ",
    date: "Сегодня",
    time: "14:00 - 20:00",
    payment: 1200,
    address: "ул. Ленина, 45",
  },
  {
    id: 2,
    title: "Кассир",
    company: "Пятёрочка",
    date: "Завтра",
    time: "09:00 - 15:00",
    payment: 900,
    address: "пр. Мира, 12",
  },
]

const recentActivity = [
  { id: 1, title: "Смена завершена", company: "Ozon склад", date: "2 дня назад", amount: 1500, status: "completed" },
  { id: 2, title: "Смена завершена", company: "Магнит", date: "4 дня назад", amount: 800, status: "completed" },
  { id: 3, title: "Отклик отправлен", company: "Лента", date: "5 дней назад", amount: 0, status: "pending" },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Личный кабинет</h1>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                <AvatarFallback>ИИ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{userData.name}</h2>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  {userData.city}
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-medium">{userData.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">({userData.completedShifts} смен)</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/profile/edit">
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Badges */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {userData.badges.map((badge) => (
                <Badge key={badge.id} variant="secondary" className="text-xs">
                  {badge.icon} {badge.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Баланс</p>
                  <p className="text-xl font-bold">{userData.balance.toLocaleString()} ₽</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Смен</p>
                  <p className="text-xl font-bold">{userData.completedShifts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Shifts */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Предстоящие смены</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/shifts/my">
                  Все
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingShifts.map((shift) => (
              <Link key={shift.id} href={`/shifts/${shift.id}`}>
                <div className="p-4 rounded-lg border border-border hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{shift.title}</h3>
                      <p className="text-sm text-muted-foreground">{shift.company}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">{shift.payment} ₽</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {shift.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {shift.time}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4" />
                    {shift.address}
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">История</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${activity.status === "completed" ? "bg-primary" : "bg-muted-foreground"}`}
                  />
                  <div>
                    <p className="font-medium text-sm">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.company} • {activity.date}
                    </p>
                  </div>
                </div>
                {activity.amount > 0 && <span className="font-semibold text-sm">+{activity.amount} ₽</span>}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
