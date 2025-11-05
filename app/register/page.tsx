"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    isSelfEmployed: false,
    hasMedicalBook: false,
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock registration - redirect to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Header */}
      <div className="p-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Link>
        </Button>
      </div>

      {/* Registration Form */}
      <div className="flex-1 flex items-center justify-center p-4 pb-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Регистрация</CardTitle>
            <CardDescription>Создайте аккаунт чтобы начать работать</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя и фамилия</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 900 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Минимум 8 символов"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={8}
                />
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="selfEmployed"
                    checked={formData.isSelfEmployed}
                    onCheckedChange={(checked) => setFormData({ ...formData, isSelfEmployed: checked as boolean })}
                  />
                  <Label htmlFor="selfEmployed" className="text-sm font-normal leading-relaxed cursor-pointer">
                    Я являюсь самозанятым или готов оформить самозанятость
                  </Label>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="medicalBook"
                    checked={formData.hasMedicalBook}
                    onCheckedChange={(checked) => setFormData({ ...formData, hasMedicalBook: checked as boolean })}
                  />
                  <Label htmlFor="medicalBook" className="text-sm font-normal leading-relaxed cursor-pointer">
                    У меня есть медицинская книжка
                  </Label>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm font-normal leading-relaxed cursor-pointer">
                    Я согласен с{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      условиями использования
                    </Link>{" "}
                    и{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </Link>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!formData.agreeToTerms}
              >
                Зарегистрироваться
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Уже есть аккаунт?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Войти
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
