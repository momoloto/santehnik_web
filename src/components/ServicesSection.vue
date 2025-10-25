<template>
  <section id="services" class="py-12 md:py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 class="mb-4">Наши услуги</h2>
        <p class="text-muted-foreground text-lg">
          Более 126 видов сантехнических услуг для квартир, домов и офисов
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="category in serviceCategories"
          :key="category.id"
          @click="handleCategoryClick(category.id)"
          class="group bg-white border-2 border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all cursor-pointer"
        >
          <!-- Icon -->
          <div class="mb-6">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
              <span class="text-5xl">{{ category.icon }}</span>
            </div>
          </div>

          <!-- Content -->
          <h3 class="mb-3 group-hover:text-primary transition-colors">
            {{ category.name }}
          </h3>
          <p class="text-muted-foreground mb-6">
            {{ category.count }} {{ category.count === 1 ? 'услуга' : 'услуг' }} в этой категории
          </p>

          <!-- Button -->
          <button class="btn btn-ghost gap-2 p-0 h-auto group-hover:text-primary">
            Смотреть услуги
            <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
import { categories } from '../data/services.js'

const emit = defineEmits(['category-click'])

const serviceCategories = categories.filter(category => category.id !== 'all')

const handleCategoryClick = (categoryId) => {
  emit('category-click', categoryId)
}

const scrollToContact = () => {
  const element = document.querySelector("#contact")
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
