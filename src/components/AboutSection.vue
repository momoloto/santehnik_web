<template>
  <section id="about" class="py-12 md:py-20 bg-white">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div>
            <h2 class="mb-4">О нашей компании</h2>
            <p class="text-muted-foreground text-lg mb-6">
              СантехСервис — это команда профессионалов с многолетним опытом работы в сфере сантехнических услуг в Алматы.
            </p>
            <p class="text-muted-foreground mb-6">
              Мы специализируемся на всех видах сантехнических работ: от простого ремонта смесителя до сложного монтажа систем отопления и водоснабжения.
            </p>
          </div>

          <!-- Features -->
          <div class="space-y-4">
            <div 
              v-for="feature in aboutFeatures"
              :key="feature"
              class="flex items-center gap-3"
            >
              <CheckCircle class="h-5 w-5 text-primary flex-shrink-0" />
              <span>{{ feature }}</span>
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-4">
            <button 
              @click="scrollToContact"
              class="btn btn-primary btn-lg"
            >
              Связаться с нами
            </button>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwd29ya2luZyUyMHRvb2xzfGVufDF8fHx8MTc2MTM4OTk4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Сантехник с инструментами"
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Floating cards -->
          <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 p-2 rounded-full">
                <Wrench class="h-5 w-5 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Профессиональные инструменты</p>
                <p class="font-semibold">Современное оборудование</p>
              </div>
            </div>
          </div>

          <div class="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
            <div class="flex items-center gap-3">
              <div class="bg-primary/10 p-2 rounded-full">
                <Star class="h-5 w-5 text-primary" />
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Рейтинг</p>
                <p class="font-semibold">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, Wrench, Star } from 'lucide-vue-next'

const aboutFeatures = [
  "Более 10 лет успешной работы",
  "Квалифицированные мастера с опытом",
  "Современное оборудование и инструменты",
  "Гарантия на все виды работ",
  "Прозрачное ценообразование",
  "Работаем без выходных"
]

const scrollToContact = () => {
  const element = document.querySelector("#contact")
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
