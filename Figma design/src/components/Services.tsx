import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { categories } from "../data/services-data";

interface ServicesProps {
  onCategoryClick: (categoryId: string) => void;
}

export function Services({ onCategoryClick }: ServicesProps) {
  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="mb-4">Наши услуги</h2>
          <p className="text-muted-foreground text-lg">
            Более 126 видов сантехнических услуг для квартир, домов и офисов
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories
            .filter((category) => category.id !== "all")
            .map((category) => (
              <div
                key={category.id}
                className="group bg-white border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all cursor-pointer"
                onClick={() => onCategoryClick(category.id)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <span className="text-5xl">{category.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.count} {category.count === 1 ? 'услуга' : 'услуг'} в этой категории
                </p>

                {/* Button */}
                <Button
                  variant="ghost"
                  className="gap-2 p-0 h-auto group-hover:text-primary"
                >
                  Смотреть услуги
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="mb-4">Не знаете, какая услуга вам нужна?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Опишите вашу проблему, и наши специалисты помогут подобрать оптимальное решение
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
