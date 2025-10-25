import { Menu, Phone, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "О компании", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    // Сначала вызываем onNavigate для возврата на главную страницу
    if (onNavigate) {
      onNavigate(href);
    }
    
    // Затем скроллим к секции
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="flex-shrink-0"
          >
            <h2 className="text-primary">СантехСервис</h2>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+77001234567" className="flex items-center gap-2 text-primary">
              <Phone className="h-5 w-5" />
              <span>+7 (700) 123-45-67</span>
            </a>
            <Button onClick={() => scrollToSection("#contact")}>
              Заказать звонок
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left py-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
                <div className="pt-4 border-t border-border">
                  <a href="tel:+77001234567" className="flex items-center gap-2 text-primary mb-4">
                    <Phone className="h-5 w-5" />
                    <span>+7 (700) 123-45-67</span>
                  </a>
                  <Button className="w-full" onClick={() => scrollToSection("#contact")}>
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
