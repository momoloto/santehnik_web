import { Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight">
                Профессиональные сантехнические услуги в Алматы
              </h1>
              <p className="text-muted-foreground text-lg">
                Быстрый выезд мастера, качественная работа и гарантия на все виды услуг. 
                Работаем без выходных с 8:00 до 22:00
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Выезд в течение часа",
                "Гарантия на работы",
                "Опытные мастера",
                "Доступные цены",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto" onClick={scrollToContact}>
                <Phone className="h-5 w-5 mr-2" />
                Вызвать мастера
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwd29ya2luZyUyMHBpcGVzfGVufDF8fHx8MTc2MTM4OTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Профессиональный сантехник за работой"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Опыт работы</p>
                  <p>Более 10 лет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
