<template>
  <section id="services" class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 class="mb-4">Наши услуги</h2>
        <p class="text-muted-foreground text-lg">
          Более 70 видов сантехнических услуг для квартир, домов и офисов
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8">
        <div
          v-for="category in serviceCategories"
          :key="category.id"
          @click="handleCategoryClick(category.id)"
          class="group bg-white border-2 border-border rounded-2xl p-3 md:p-8 hover:border-primary hover:shadow-xl transition-all cursor-pointer flex flex-col"
        >
          <!-- Image -->
          <div class="mb-2 md:mb-6 flex-shrink-0 overflow-hidden rounded-xl">
            <div class="relative w-full h-24 md:h-40 bg-gray-100">
              <img 
                :src="getCategoryImage(category.id).url" 
                :alt="getCategoryImage(category.id).alt"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                @error="handleImageError"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-grow flex flex-col">
            <h3 class="mb-2 md:mb-6 group-hover:text-primary transition-colors text-xs md:text-base leading-tight line-clamp-2">
              {{ category.name }}
            </h3>
          </div>

          <!-- Button -->
          <button class="btn btn-ghost gap-1 md:gap-2 p-0 h-auto group-hover:text-primary text-xs md:text-sm flex-shrink-0 mt-auto">
            Смотреть услуги
            <ArrowRight class="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 class="mb-4">Не знаете, какая услуга вам нужна?</h3>
          <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Опишите вашу проблему, и наши специалисты помогут подобрать оптимальное решение
          </p>
          <button 
            @click="scrollToContact"
            class="btn btn-primary btn-lg"
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { categories } from '../data/services.js'
import { getCategoryImage } from '../data/category-images.js'

const router = useRouter()

const serviceCategories = categories.filter(category => category.id !== 'all')

const handleCategoryClick = (categoryId) => {
  router.push(`/category/${categoryId}`)
}

const scrollToContact = () => {
  const element = document.querySelector("#contact")
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleImageError = (event) => {
  // Если изображение не загрузилось, показываем fallback
  event.target.style.display = 'none'
}
</script>
