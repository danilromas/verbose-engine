"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, CreditCard, Bell, Shield, HelpCircle, LogOut, Settings } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

const menuItems = [
  { icon: Settings, label: "Редактировать профиль", href: "/profile/edit" },
  { icon: CreditCard, label: "Банковские данные", href: "/profile/payment" },
  { icon: Bell, label: "Уведомления", href: "/profile/notifications" },
  { icon: Shield, label: "Безопасность", href: "/profile/security" },
  { icon: HelpCircle, label: "Помощь", href: "/profile/help" },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Профиль</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/diverse-user-avatars.png" alt="Profile" />
                <AvatarFallback>ИИ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Иван Иванов</h2>
                <p className="text-sm text-muted-foreground">ivan@example.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center justify-between p-4 hover:bg-muted/50 transition-colors",
                      index !== menuItems.length - 1 && "border-b border-border",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Link>
              )
            })}
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/login">
            <LogOut className="w-4 h-4 mr-2" />
            Выйти
          </Link>
        </Button>
      </div>

      <BottomNav />
    </div>
  )
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ")
}
