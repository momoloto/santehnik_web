<template>
  <section class="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 class="mb-4">Почему выбирают нас</h2>
        <p class="text-muted-foreground text-lg">
          Мы обеспечиваем высокое качество работ и индивидуальный подход к каждому клиенту
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div 
          v-for="feature in features"
          :key="feature.title"
          class="text-center group"
        >
          <div class="mb-6">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors mx-auto">
              <component :is="feature.icon" class="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 class="mb-3 font-semibold">{{ feature.title }}</h3>
          <p class="text-muted-foreground text-sm">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.value">
            <div class="text-3xl md:text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-blue-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Clock, 
  Shield, 
  Users, 
  Award,
  Phone,
  CheckCircle,
  Wrench,
  Star
} from 'lucide-vue-next'

const features = [
  {
    icon: Clock,
    title: "Быстрый выезд",
    description: "Мастер приедет в течение часа после звонка"
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Гарантия на все виды работ до 2 лет"
  },
  {
    icon: Users,
    title: "Опытные мастера",
    description: "Работают только квалифицированные специалисты"
  },
  {
    icon: Award,
    title: "Доступные цены",
    description: "Честные цены без скрытых доплат"
  }
]

const stats = [
  { value: "10+", label: "Лет опыта" },
  { value: "5000+", label: "Довольных клиентов" },
  { value: "126", label: "Видов услуг" },
  { value: "24/7", label: "Аварийная служба" }
]
</script>
