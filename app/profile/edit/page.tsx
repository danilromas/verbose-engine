"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Camera } from "lucide-react"

export default function EditProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "Иван Иванов",
    email: "ivan@example.com",
    phone: "+7 900 000 00 00",
    city: "Москва",
    bankCard: "•••• 1234",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">Редактировать профиль</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardContent className="pt-6">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/diverse-user-avatars.png" alt="Profile" />
                  <AvatarFallback>ИИ</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-primary hover:bg-primary/90"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Изменить фото</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Город</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold mb-4">Банковские данные</h3>
                <div className="space-y-2">
                  <Label htmlFor="bankCard">Номер карты</Label>
                  <Input
                    id="bankCard"
                    value={formData.bankCard}
                    onChange={(e) => setFormData({ ...formData, bankCard: e.target.value })}
                    placeholder="0000 0000 0000 0000"
                  />
                  <p className="text-xs text-muted-foreground">Выплаты будут приходить на эту карту</p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Сохранить изменения
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
