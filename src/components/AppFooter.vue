<template>
  <footer class="bg-foreground text-background">
    <div class="container py-12 md:py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <!-- Company Info -->
        <div class="space-y-4">
          <h3 class="text-white font-bold text-xl">СантехСервис</h3>
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
            <li>Устранение протечек</li>
            <li>Ремонт сантехники</li>
            <li>Установка котлов</li>
            <li>Монтаж водопровода</li>
            <li>Монтаж канализации</li>
          </ul>
        </div>

        <!-- Contacts -->
        <div>
          <h4 class="mb-4 text-white font-semibold">Контакты</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-gray-300">
              <Phone class="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div>
                <a href="tel:+77001234567" class="hover:text-white transition-colors">
                  +7 (700) 123-45-67
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

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {{ currentYear }} СантехСервис. Все права защищены.</p>
          <div class="flex gap-6">
            <button class="hover:text-white transition-colors">
              Политика конфиденциальности
            </button>
            <button class="hover:text-white transition-colors">
              Условия использования
            </button>
          </div>
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

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
