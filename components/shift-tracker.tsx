"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Camera, CheckCircle2, Clock, MapPin } from "lucide-react"

interface ChecklistItem {
  id: string
  label: string
  completed: boolean
}

export function ShiftTracker({ shift, onBack }: { shift: any; onBack: () => void }) {
  const [arrivalChecklist, setArrivalChecklist] = useState<ChecklistItem[]>([
    { id: "1", label: "Прибыл на место", completed: false },
    { id: "2", label: "Встретился с менеджером", completed: false },
    { id: "3", label: "Получил инструктаж", completed: false },
    { id: "4", label: "Сделал фото рабочего места", completed: false },
  ])

  const [completionChecklist, setCompletionChecklist] = useState<ChecklistItem[]>([
    { id: "1", label: "Выполнил все задачи", completed: false },
    { id: "2", label: "Убрал рабочее место", completed: false },
    { id: "3", label: "Отчитался менеджеру", completed: false },
    { id: "4", label: "Сделал фото результата", completed: false },
  ])

  const [photos, setPhotos] = useState<string[]>([])
  const [shiftStarted, setShiftStarted] = useState(false)

  const toggleArrivalItem = (id: string) => {
    setArrivalChecklist((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const toggleCompletionItem = (id: string) => {
    setCompletionChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    )
  }

  const allArrivalCompleted = arrivalChecklist.every((item) => item.completed)
  const allCompletionCompleted = completionChecklist.every((item) => item.completed)

  return (
    <div className="min-h-screen bg-muted pb-24">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Трекинг смены</h1>
              <p className="text-sm text-muted-foreground">{shift.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-4">
        {/* Shift Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Время</p>
                  <p className="font-semibold">{shift.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-semibold">{shift.address}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Arrival Checklist */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className={`w-5 h-5 ${allArrivalCompleted ? "text-primary" : "text-muted-foreground"}`} />
              Чеклист прибытия
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {arrivalChecklist.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox
                  id={`arrival-${item.id}`}
                  checked={item.completed}
                  onCheckedChange={() => toggleArrivalItem(item.id)}
                />
                <Label
                  htmlFor={`arrival-${item.id}`}
                  className={`font-normal cursor-pointer ${item.completed ? "line-through text-muted-foreground" : ""}`}
                >
                  {item.label}
                </Label>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Photo Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              Фотоотчет
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              <Camera className="w-4 h-4 mr-2" />
              Добавить фото
            </Button>
            {photos.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {photos.map((photo, index) => (
                  <div key={index} className="aspect-square rounded-lg bg-muted" />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Start Shift Button */}
        {!shiftStarted && allArrivalCompleted && (
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setShiftStarted(true)}
          >
            Начать смену
          </Button>
        )}

        {/* Completion Checklist */}
        {shiftStarted && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2
                  className={`w-5 h-5 ${allCompletionCompleted ? "text-primary" : "text-muted-foreground"}`}
                />
                Чеклист завершения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {completionChecklist.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`completion-${item.id}`}
                    checked={item.completed}
                    onCheckedChange={() => toggleCompletionItem(item.id)}
                  />
                  <Label
                    htmlFor={`completion-${item.id}`}
                    className={`font-normal cursor-pointer ${item.completed ? "line-through text-muted-foreground" : ""}`}
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Complete Shift Button */}
        {shiftStarted && allCompletionCompleted && (
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Завершить смену
          </Button>
        )}
      </div>
    </div>
  )
}
