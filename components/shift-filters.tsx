"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ShiftFiltersProps {
  filters: {
    district: string
    date: string
    minPayment: string
    type: string
    hasTraining: boolean
  }
  setFilters: (filters: any) => void
}

export function ShiftFilters({ filters, setFilters }: ShiftFiltersProps) {
  const handleReset = () => {
    setFilters({
      district: "all",
      date: "any",
      minPayment: "",
      type: "all",
      hasTraining: false,
    })
  }

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Район</Label>
            <Select value={filters.district} onValueChange={(value) => setFilters({ ...filters, district: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Все районы" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все районы</SelectItem>
                <SelectItem value="Центральный">Центральный</SelectItem>
                <SelectItem value="Набережная">Набережная</SelectItem>
                <SelectItem value="Ливадия">Ливадия</SelectItem>
                <SelectItem value="Алупка">Алупка</SelectItem>
                <SelectItem value="Гурзуф">Гурзуф</SelectItem>
                <SelectItem value="Массандра">Массандра</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Дата</Label>
            <Select value={filters.date} onValueChange={(value) => setFilters({ ...filters, date: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Любая дата" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Любая дата</SelectItem>
                <SelectItem value="Сегодня">Сегодня</SelectItem>
                <SelectItem value="Завтра">Завтра</SelectItem>
                <SelectItem value="Через 2 дня">Через 2 дня</SelectItem>
                <SelectItem value="Через 3 дня">Через 3 дня</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Тип работы</Label>
            <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Все типы" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="Ресепшн">Ресепшн</SelectItem>
                <SelectItem value="Хозяйственная служба">Хозяйственная служба</SelectItem>
                <SelectItem value="Ресторан">Ресторан</SelectItem>
                <SelectItem value="Служба консьержа">Служба консьержа</SelectItem>
                <SelectItem value="Бар">Бар</SelectItem>
                <SelectItem value="Анимация">Анимация</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Мин. оплата</Label>
            <Input
              type="number"
              placeholder="0 ₽"
              value={filters.minPayment}
              onChange={(e) => setFilters({ ...filters, minPayment: e.target.value })}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="training"
            checked={filters.hasTraining}
            onCheckedChange={(checked) => setFilters({ ...filters, hasTraining: checked as boolean })}
          />
          <Label htmlFor="training" className="font-normal cursor-pointer">
            Только с обучением
          </Label>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset} className="flex-1 bg-transparent">
            Сбросить
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Применить</Button>
        </div>
      </div>
    </div>
  )
}
