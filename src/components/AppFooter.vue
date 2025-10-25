<template>
  <footer class="bg-foreground text-background">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- Company Info -->
        <div class="space-y-4">
          <h3 class="text-white font-bold text-xl">AskhatSanTekhnik</h3>
          <p class="text-sm text-gray-300">
            Профессиональные сантехнические услуги в Алматы. Быстро, качественно, с гарантией.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-4 text-white font-semibold">Навигация</h4>
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.name">
              <button
                @click="scrollToSection(item.href)"
                class="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="mb-4 text-white font-semibold">Услуги</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li v-for="service in services" :key="service.name">
              <button
                @click="scrollToService(service.category)"
                class="hover:text-white transition-colors text-left"
              >
                {{ service.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div>
          <h4 class="mb-4 text-white font-semibold">Контакты</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-300">
              <Phone class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <a href="tel:+87477252026" class="hover:text-white transition-colors">
                  +7 (747) 725-20-26
                </a>
              </div>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-300">
              <Mail class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <a href="mailto:info@santehservice.kz" class="hover:text-white transition-colors">
                info@santehservice.kz
              </a>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-300">
              <MapPin class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>г. Алматы, ул. Абая, 150</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-300">
              <Clock class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Пн-Вс: 8:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const navigation = [
  { name: "Главная", href: "#home" },
  { name: "Услуги", href: "#services" },
  { name: "О компании", href: "#about" },
  { name: "Контакты", href: "#contact" },
]

const services = [
  { name: "Установка сантехники", category: "installation" },
  { name: "Монтаж системы отопления, водоснабжения и канализации", category: "systems" },
  { name: "Монтаж полотенцесушителей и радиаторов", category: "radiators" },
  { name: "Монтаж насосного оборудования", category: "pumps" },
  { name: "Монтаж котельного оборудования", category: "boilers" },
  { name: "Общие сантехнические работы", category: "general" },
]

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToService = (category) => {
  // Сначала прокручиваем к секции услуг
  const servicesSection = document.querySelector('#services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
    
    // Затем через небольшую задержку прокручиваем к конкретной категории
    setTimeout(() => {
      const categoryElement = document.querySelector(`[data-category="${category}"]`)
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 500)
  }
}
</script>
