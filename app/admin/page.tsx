"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Briefcase, Building2, TrendingUp, CheckCircle2, XCircle, Eye, Ban } from "lucide-react"

const adminStats = {
  totalUsers: 1248,
  activeShifts: 156,
  totalPartners: 42,
  revenue: 2450000,
}

const pendingUsers = [
  {
    id: 1,
    name: "Алексей Петров",
    email: "alexey@example.com",
    phone: "+7 900 123 45 67",
    registeredAt: "2 часа назад",
    status: "pending",
  },
  {
    id: 2,
    name: "Мария Сидорова",
    email: "maria@example.com",
    phone: "+7 900 234 56 78",
    registeredAt: "5 часов назад",
    status: "pending",
  },
]

const pendingShifts = [
  {
    id: 1,
    title: "Сборщик заказов",
    company: "Wildberries ПВЗ",
    payment: 1200,
    createdAt: "1 час назад",
    status: "pending",
  },
  {
    id: 2,
    title: "Кассир",
    company: "Пятёрочка",
    payment: 900,
    createdAt: "3 часа назад",
    status: "pending",
  },
]

const reportedIssues = [
  {
    id: 1,
    type: "Жалоба на пользователя",
    reporter: "Wildberries ПВЗ",
    reported: "Иван Иванов",
    reason: "Не явился на смену",
    date: "1 день назад",
  },
  {
    id: 2,
    type: "Жалоба на партнера",
    reporter: "Алексей Петров",
    reported: "Магнит",
    reason: "Неоплаченная смена",
    date: "2 дня назад",
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Панель администратора</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Пользователей</p>
                  <p className="text-2xl font-bold">{adminStats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Активных смен</p>
                  <p className="text-2xl font-bold">{adminStats.activeShifts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Партнеров</p>
                  <p className="text-2xl font-bold">{adminStats.totalPartners}</p>
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
                  <p className="text-sm text-muted-foreground">Оборот</p>
                  <p className="text-2xl font-bold">{(adminStats.revenue / 1000000).toFixed(1)}M ₽</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Moderation Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Модерация</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="users" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="users">Пользователи</TabsTrigger>
                <TabsTrigger value="shifts">Смены</TabsTrigger>
                <TabsTrigger value="reports">Жалобы</TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="space-y-3 mt-4">
                {pendingUsers.map((user) => (
                  <div key={user.id} className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?key=user" />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-sm text-muted-foreground">{user.phone}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">На проверке</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">Зарегистрирован {user.registeredAt}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <CheckCircle2 className="w-4 h-4 mr-1" />
                          Одобрить
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="w-4 h-4 mr-1" />
                          Отклонить
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="shifts" className="space-y-3 mt-4">
                {pendingShifts.map((shift) => (
                  <div key={shift.id} className="p-4 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold">{shift.title}</h3>
                        <p className="text-sm text-muted-foreground">{shift.company}</p>
                        <p className="text-sm text-muted-foreground">Создано {shift.createdAt}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{shift.payment} ₽</p>
                        <Badge variant="secondary" className="mt-1">
                          На проверке
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        Просмотр
                      </Button>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Одобрить
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <XCircle className="w-4 h-4 mr-1" />
                        Отклонить
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="reports" className="space-y-3 mt-4">
                {reportedIssues.map((issue) => (
                  <div key={issue.id} className="p-4 rounded-lg border border-border">
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="destructive">{issue.type}</Badge>
                        <p className="text-xs text-muted-foreground">{issue.date}</p>
                      </div>
                      <p className="text-sm">
                        <span className="font-semibold">{issue.reporter}</span> пожаловался на{" "}
                        <span className="font-semibold">{issue.reported}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Причина: {issue.reason}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        Подробнее
                      </Button>
                      <Button size="sm" variant="destructive" className="flex-1">
                        <Ban className="w-4 h-4 mr-1" />
                        Заблокировать
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <XCircle className="w-4 h-4 mr-1" />
                        Отклонить
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
