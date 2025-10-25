import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь была бы отправка данных на сервер
    toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      details: ["+7 (700) 123-45-67", "+7 (701) 987-65-43"],
      link: "tel:+77001234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@santehservice.kz", "support@santehservice.kz"],
      link: "mailto:info@santehservice.kz",
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: ["г. Алматы", "ул. Абая, 150"],
      link: null,
    },
    {
      icon: Clock,
      title: "Время работы",
      details: ["Пн-Вс: 8:00 - 22:00", "Аварийная служба 24/7"],
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground text-lg">
            Оставьте заявку и наш специалист свяжется с вами для уточнения деталей
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="mb-6">Заказать звонок</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Опишите вашу проблему..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {item.link && idx === 0 ? (
                              <a href={item.link} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-12 md:mt-16 bg-primary text-primary-foreground rounded-lg p-6 md:p-8 text-center">
          <h3 className="mb-2 text-white">Срочная помощь? Звоните прямо сейчас!</h3>
          <p className="mb-6 text-blue-100">
            Наша аварийная служба работает круглосуточно без выходных
          </p>
          <a href="tel:+77001234567">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-5 w-5" />
              +7 (700) 123-45-67
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
