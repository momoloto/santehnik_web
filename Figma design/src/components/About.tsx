import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const advantages = [
    "Работаем официально с договором и чеками",
    "Бесплатная диагностика при заказе ремонта",
    "Используем профессиональное оборудование",
    "Убираем за собой после выполнения работ",
    "Консультируем по эксплуатации сантехники",
    "Помогаем с выбором материалов и оборудования",
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687951276836-06efbfda608b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MTI5NDI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Современная ванная комната"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661045327753-3f2a047d00a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwc2luayUyMGZhdWNldHxlbnwxfHx8fDE3NjEzMjY1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Кухонная раковина"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1729986694893-facaf4bce2e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0aW5nJTIwc3lzdGVtJTIwYm9pbGVyfGVufDF8fHx8MTc2MTM4OTk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Отопительная система"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-4">О компании СантехСервис</h2>
              <p className="text-muted-foreground text-lg mb-4">
                Мы профессиональная команда сантехников с более чем 10-летним опытом работы в Алматы. 
                Специализируемся на всех видах сантехнических работ для жилых и коммерческих объектов.
              </p>
              <p className="text-muted-foreground">
                Наша цель — предоставить качественные услуги по доступным ценам. Мы ценим время наших 
                клиентов и гарантируем быстрое решение любых сантехнических проблем.
              </p>
            </div>

            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{advantage}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Мы постоянно повышаем квалификацию наших мастеров и следим за новыми технологиями 
                в сантехнической отрасли, чтобы предоставлять вам лучший сервис.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
