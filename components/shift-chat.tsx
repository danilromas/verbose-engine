"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Send } from "lucide-react"

interface Message {
  id: number
  sender: "user" | "employer"
  text: string
  time: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "employer",
    text: "Здравствуйте! Спасибо за интерес к нашей вакансии.",
    time: "10:30",
  },
  {
    id: 2,
    sender: "employer",
    text: "У вас есть опыт работы сборщиком заказов?",
    time: "10:31",
  },
  {
    id: 3,
    sender: "user",
    text: "Здравствуйте! Да, работал на складе Ozon 2 месяца.",
    time: "10:35",
  },
  {
    id: 4,
    sender: "employer",
    text: "Отлично! Приходите завтра к 14:00. Адрес: ул. Ленина, 45",
    time: "10:36",
  },
]

export function ShiftChat({ shift, onBack }: { shift: any; onBack: () => void }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?key=employer" />
              <AvatarFallback>WB</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="font-semibold">{shift.company}</h2>
              <p className="text-xs text-muted-foreground">{shift.title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 container mx-auto px-4 py-6 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-card border-t border-border p-4 sticky bottom-0">
        <div className="container mx-auto flex gap-2">
          <Input
            placeholder="Написать сообщение..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button size="icon" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleSend}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
