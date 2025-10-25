<template>
  <section id="home" class="relative bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 lg:py-28">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6 md:space-y-8">
          <div class="space-y-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Профессиональные сантехнические услуги в Алматы
            </h1>
            <p class="text-muted-foreground text-lg">
              Быстрый выезд мастера, качественная работа и гарантия на все виды услуг. 
              Работаем без выходных с 8:00 до 22:00
            </p>
          </div>

          <!-- Features -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div 
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-2"
            >
              <CheckCircle class="h-5 w-5 text-primary flex-shrink-0" />
              <span class="text-sm sm:text-base">{{ feature }}</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              @click="scrollToContact"
              class="btn btn-primary btn-lg w-full sm:w-auto"
            >
              <Phone class="h-5 w-5 mr-2" />
              Вызвать мастера
            </button>
          </div>
        </div>

        <!-- Image -->
        <div class="relative order-first md:order-last">
          <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwd29ya2luZyUyMHBpcGVzfGVufDF8fHx8MTc2MTM4OTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Профессиональный сантехник за работой"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Floating card -->
          <div class="absolute -bottom-6 -left-4 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 p-3 rounded-full">
                <CheckCircle class="h-6 w-6 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Опыт работы</p>
                <p class="font-semibold">Более 10 лет</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, CheckCircle } from 'lucide-vue-next'

const features = [
  "Выезд в течение часа",
  "Гарантия на работы",
  "Опытные мастера",
  "Доступные цены",
]

const scrollToContact = () => {
  const element = document.querySelector("#contact")
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
