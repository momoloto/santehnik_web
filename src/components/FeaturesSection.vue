<template>
  <section class="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 class="mb-4">Почему выбирают нас</h2>
        <p class="text-muted-foreground text-lg">
          Мы заботимся о каждом клиенте и гарантируем высокое качество услуг
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-10">
        <div 
          v-for="feature in features"
          :key="feature.title"
          class="text-center"
        >
          <div class="inline-flex p-2 md:p-4 bg-white rounded-full shadow-md mb-2 md:mb-4">
            <component :is="feature.icon" class="h-4 w-4 md:h-8 md:w-8 text-primary" />
          </div>
          <h3 class="mb-1 md:mb-2 text-sm md:text-base">{{ feature.title }}</h3>
          <p class="text-muted-foreground text-xs md:text-sm">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.value" class="text-center">
          <div class="text-primary mb-2">{{ stat.value }}</div>
          <p class="text-sm text-muted-foreground">{{ stat.label }}</p>
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
  Star,
  Wallet,
  ThumbsUp
} from 'lucide-vue-next'

const features = [
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Даем гарантию на все виды работ и используемые материалы."
  },
  {
    icon: Wallet,
    title: "Доступные цены",
    description: "Честные цены без скрытых платежей. Оплата после выполнения работ."
  },
  {
    icon: Users,
    title: "Опытные мастера",
    description: "Сертифицированные специалисты с опытом работы более 10 лет."
  },
  {
    icon: ThumbsUp,
    title: "Качественные материалы",
    description: "Используем только проверенные материалы от надежных производителей."
  },
  {
    icon: Wrench,
    title: "Полный комплекс услуг",
    description: "От мелкого ремонта до капитальной замены всей системы."
  },
  {
    icon: Clock,
    title: "Быстрый выезд",
    description: "Выезжаем в течение часа после звонка. Работаем без выходных."
  }
]

const stats = [
  { value: "10+", label: "Лет на рынке" },
  { value: "5000+", label: "Довольных клиентов" },
  { value: "24/7", label: "Работаем без выходных" },
  { value: "100%", label: "Гарантия качества" }
]
</script>
