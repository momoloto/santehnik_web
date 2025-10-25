import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white">СантехСервис</h3>
            <p className="text-sm text-gray-300">
              Профессиональные сантехнические услуги в Алматы. Быстро, качественно, с гарантией.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Навигация</h4>
            <ul className="space-y-2">
              {[
                { name: "Главная", href: "#home" },
                { name: "Услуги", href: "#services" },
                { name: "О компании", href: "#about" },
                { name: "Контакты", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Устранение протечек</li>
              <li>Ремонт сантехники</li>
              <li>Установка котлов</li>
              <li>Монтаж водопровода</li>
              <li>Монтаж канализации</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-4 text-white">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+77001234567" className="hover:text-white transition-colors">
                    +7 (700) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@santehservice.kz" className="hover:text-white transition-colors">
                  info@santehservice.kz
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>г. Алматы, ул. Абая, 150</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Пн-Вс: 8:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} СантехСервис. Все права защищены.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
              <button className="hover:text-white transition-colors">
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
