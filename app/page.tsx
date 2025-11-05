import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Найди подработку рядом с домом</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Гибкий график, быстрые выплаты и работа в магазинах, складах и ПВЗ по всему городу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/register">Начать работать</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/login">Войти</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Гибкий график</h3>
            <p className="text-sm text-muted-foreground">Выбирайте смены когда удобно</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Рядом с домом</h3>
            <p className="text-sm text-muted-foreground">Работа в вашем районе</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Быстрые выплаты</h3>
            <p className="text-sm text-muted-foreground">Деньги сразу после смены</p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Рост дохода</h3>
            <p className="text-sm text-muted-foreground">Бонусы за активность</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Зарегистрируйтесь за 2 минуты и начните зарабатывать уже сегодня
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
