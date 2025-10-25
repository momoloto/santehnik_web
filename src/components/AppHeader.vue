<template>
  <header class="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
    <div class="container">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <button 
          @click="scrollToSection('#home')"
          class="flex-shrink-0"
        >
          <h2 class="text-primary font-bold text-xl md:text-2xl">СантехСервис</h2>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <button
            v-for="item in navigation"
            :key="item.name"
            @click="scrollToSection(item.href)"
            class="text-foreground hover:text-primary transition-colors font-medium"
          >
            {{ item.name }}
          </button>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-4">
          <a href="tel:+77001234567" class="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Phone class="h-5 w-5" />
            <span class="font-medium">+7 (700) 123-45-67</span>
          </a>
          <button 
            @click="scrollToSection('#contact')"
            class="btn btn-primary btn-md"
          >
            Заказать звонок
          </button>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden btn btn-ghost btn-sm"
        >
          <Menu v-if="!isMobileMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
          <span class="sr-only">Открыть меню</span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg"
      >
        <div class="container py-4">
          <nav class="flex flex-col space-y-4">
            <button
              v-for="item in navigation"
              :key="item.name"
              @click="scrollToSection(item.href)"
              class="text-left py-2 hover:text-primary transition-colors font-medium"
            >
              {{ item.name }}
            </button>
          </nav>
          <div class="pt-4 border-t border-border mt-4">
            <a href="tel:+77001234567" class="flex items-center gap-2 text-primary mb-4 font-medium">
              <Phone class="h-5 w-5" />
              <span>+7 (700) 123-45-67</span>
            </a>
            <button 
              @click="scrollToSection('#contact')"
              class="btn btn-primary w-full"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X, Phone } from 'lucide-vue-next'

defineEmits(['navigate'])

const isMobileMenuOpen = ref(false)

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
    isMobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
