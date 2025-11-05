"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, MapPin, Clock, Calendar } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { ShiftFilters } from "@/components/shift-filters"

// Mock data
const shifts = [
  {
    id: 1,
    title: "Администратор ресепшн",
    company: "Гранд Отель Крым",
    image: "/hotel-reception.jpg",
    address: "ул. Ленина, 45",
    district: "Центральный",
    date: "Сегодня",
    time: "14:00 - 22:00",
    payment: 1500,
    difficulty: "Средне",
    hasTraining: true,
    type: "Ресепшн",
  },
  {
    id: 2,
    title: "Горничная",
    company: "Отель Ялта-Интурист",
    image: "/hotel-housekeeping.jpg",
    address: "Набережная им. Ленина, 50",
    district: "Набережная",
    date: "Завтра",
    time: "08:00 - 16:00",
    payment: 1200,
    difficulty: "Легко",
    hasTraining: false,
    type: "Хозяйственная служба",
  },
  {
    id: 3,
    title: "Официант",
    company: "Ливадия Палас",
    image: "/hotel-restaurant.jpg",
    address: "Ливадийский дворец, 1",
    district: "Ливадия",
    date: "Сегодня",
    time: "18:00 - 02:00",
    payment: 1800,
    difficulty: "Средне",
    hasTraining: true,
    type: "Ресторан",
  },
  {
    id: 4,
    title: "Портье",
    company: "Mriya Resort & SPA",
    image: "/hotel-concierge.jpg",
    address: "Алупкинское шоссе, 60",
    district: "Алупка",
    date: "Завтра",
    time: "06:00 - 14:00",
    payment: 1400,
    difficulty: "Легко",
    hasTraining: false,
    type: "Служба консьержа",
  },
  {
    id: 5,
    title: "Бармен",
    company: "Вилла Елена",
    image: "/hotel-bar.jpg",
    address: "ул. Гагарина, 23",
    district: "Гурзуф",
    date: "Через 2 дня",
    time: "16:00 - 00:00",
    payment: 1600,
    difficulty: "Средне",
    hasTraining: true,
    type: "Бар",
  },
  {
    id: 6,
    title: "Аниматор",
    company: "Пальмира Палас",
    image: "/hotel-animation.jpg",
    address: "Алуштинское шоссе, 12",
    district: "Массандра",
    date: "Через 3 дня",
    time: "10:00 - 18:00",
    payment: 2000,
    difficulty: "Сложно",
    hasTraining: false,
    type: "Анимация",
  },
]

const difficultyColors = {
  Легко: "bg-green-100 text-green-800",
  Средне: "bg-secondary/20 text-secondary",
  Сложно: "bg-red-100 text-red-800",
}

export default function ShiftsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    district: "",
    date: "",
    minPayment: "",
    type: "",
    hasTraining: false,
  })

  const filteredShifts = shifts.filter((shift) => {
    const matchesSearch =
      shift.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDistrict = !filters.district || shift.district === filters.district
    const matchesDate = !filters.date || shift.date === filters.date
    const matchesPayment = !filters.minPayment || shift.payment >= Number.parseInt(filters.minPayment)
    const matchesType = !filters.type || shift.type === filters.type
    const matchesTraining = !filters.hasTraining || shift.hasTraining

    return matchesSearch && matchesDistrict && matchesDate && matchesPayment && matchesType && matchesTraining
  })

  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 space-y-3">
          <h1 className="text-xl font-bold">Найти смену</h1>

          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по названию или отелю"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className={showFilters ? "bg-primary text-primary-foreground" : ""}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && <ShiftFilters filters={filters} setFilters={setFilters} />}

      {/* Shifts List */}
      <div className="container mx-auto px-4 py-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Найдено смен: {filteredShifts.length}</p>
        </div>

        {filteredShifts.map((shift) => (
          <Link key={shift.id} href={`/shifts/${shift.id}`}>
            <Card className="overflow-hidden hover:border-primary transition-colors">
              <div className="aspect-[2/1] relative overflow-hidden bg-muted">
                <img src={shift.image || "/placeholder.svg"} alt={shift.title} className="w-full h-full object-cover" />
                {shift.hasTraining && (
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Обучение</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{shift.title}</h3>
                    <p className="text-sm text-muted-foreground">{shift.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">{shift.payment} ₽</p>
                    <Badge
                      variant="secondary"
                      className={`text-xs mt-1 ${difficultyColors[shift.difficulty as keyof typeof difficultyColors]}`}
                    >
                      {shift.difficulty}
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
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
