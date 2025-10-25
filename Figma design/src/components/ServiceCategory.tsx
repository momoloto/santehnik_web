import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { servicesData } from "../data/services-data";

interface ServiceCategoryProps {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  onBack: () => void;
}

export function ServiceCategory({ categoryId, categoryName, categoryIcon, onBack }: ServiceCategoryProps) {
  const categoryServices = servicesData.filter((service) => service.category === categoryId);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Вернуться к категориям
        </Button>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">{categoryIcon}</span>
          </div>
          <h2 className="mb-4">{categoryName}</h2>
          <p className="text-muted-foreground text-lg">
            {categoryServices.length} {categoryServices.length === 1 ? 'услуга' : 'услуг'} в этой категории
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {categoryServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-3 md:p-4">
                <h4 className="mb-1 md:mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] text-sm md:text-base">
                  {service.title}
                </h4>
                <p className="text-primary mb-3 md:mb-4 text-sm md:text-base">{service.price}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary text-xs md:text-sm"
                  onClick={scrollToContact}
                >
                  Заявка
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 md:p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="mb-4">Нужна консультация?</h3>
              <p className="text-muted-foreground mb-6">
                Наши специалисты помогут подобрать нужную услугу и ответят на все вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={scrollToContact}>
                  Получить консультацию
                </Button>
                <a href="tel:+77001234567">
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone className="h-5 w-5" />
                    +7 (700) 123-45-67
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
