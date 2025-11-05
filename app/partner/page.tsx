"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Users, Briefcase, TrendingUp, Eye, Edit, Trash2 } from "lucide-react"

const partnerStats = {
  activeShifts: 12,
  totalApplications: 48,
  filledPositions: 8,
  avgRating: 4.7,
}

const partnerShifts = [
  {
    id: 1,
    title: "Сборщик заказов",
    location: "ул. Ленина, 45",
    date: "Сегодня",
    time: "14:00 - 20:00",
    payment: 1200,
    applications: 8,
    filled: 3,
    total: 5,
    status: "active",
  },
  {
    id: 2,
    title: "Кассир",
    location: "пр. Мира, 12",
    date: "Завтра",
    time: "09:00 - 15:00",
    payment: 900,
    applications: 12,
    filled: 2,
    total: 3,
    status: "active",
  },
  {
    id: 3,
    title: "Грузчик",
    location: "Промзона, 3",
    date: "Через 2 дня",
    time: "18:00 - 00:00",
    payment: 1500,
    applications: 15,
    filled: 5,
    total: 5,
    status: "filled",
  },
]

export default function PartnerDashboard() {
  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Панель партнера</h1>
              <p className="text-sm text-muted-foreground">Wildberries ПВЗ</p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/partner/shifts/new">
                <Plus className="w-4 h-4 mr-2" />
                Добавить смену
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Активных смен</p>
                  <p className="text-2xl font-bold">{partnerStats.activeShifts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Откликов</p>
                  <p className="text-2xl font-bold">{partnerStats.totalApplications}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Заполнено</p>
                  <p className="text-2xl font-bold">{partnerStats.filledPositions}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-lg">⭐</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Рейтинг</p>
                  <p className="text-2xl font-bold">{partnerStats.avgRating}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shifts List */}
        <Card>
          <CardHeader>
            <CardTitle>Мои смены</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {partnerShifts.map((shift) => (
              <div key={shift.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{shift.title}</h3>
                      <Badge variant={shift.status === "filled" ? "secondary" : "default"}>
                        {shift.status === "filled" ? "Заполнено" : "Активно"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{shift.location}</p>
                    <p className="text-sm text-muted-foreground">
                      {shift.date} • {shift.time}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-primary">{shift.payment} ₽</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Откликов: <span className="font-semibold text-foreground">{shift.applications}</span>
                    </span>
                    <span className="text-muted-foreground">
                      Заполнено:{" "}
                      <span className="font-semibold text-foreground">
                        {shift.filled}/{shift.total}
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/partner/shifts/${shift.id}`}>
                        <Eye className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/partner/shifts/${shift.id}/edit`}>
                        <Edit className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
