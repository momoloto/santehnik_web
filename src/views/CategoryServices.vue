<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="border-b">
      <div class="container mx-auto px-3 md:px-6 py-3 md:py-6">
        <div class="flex items-center gap-2 md:gap-4">
          <button 
            @click="goBack"
            class="p-1 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft class="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
          </button>
          <div>
            <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{{ categoryData.name }}</h1>
            <p class="text-xs md:text-sm text-gray-500 mt-1">
              {{ services.length }} {{ getServiceCountText() }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Services List -->
    <div class="container mx-auto px-3 md:px-6 py-4 md:py-8">
      <div class="space-y-0">
        <div
          v-for="service in services"
          :key="service.id"
          class="flex items-center gap-2 md:gap-4 p-2 md:p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group"
        >
          <!-- Icon -->
          <div class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
            <span class="text-xl md:text-2xl">{{ service.icon }}</span>
          </div>
          
          <!-- Service Name -->
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-gray-900 text-sm md:text-base">{{ service.title }}</h3>
          </div>
          
          <!-- Price -->
          <div class="flex-shrink-0 mr-2 md:mr-4">
            <span class="text-base md:text-lg font-bold text-gray-900">{{ service.price }}</span>
          </div>
          
          <!-- Order Button -->
          <button 
            @click="contactService(service)"
            class="flex-shrink-0 px-3 py-2 md:px-6 text-sm md:text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Заказать
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="services.length === 0" class="text-center py-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <span class="text-2xl">🔍</span>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Услуги не найдены</h3>
        <p class="text-gray-500 mb-6">В данной категории пока нет доступных услуг</p>
        <button @click="goBack" class="btn btn-primary">
          Вернуться к категориям
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { servicesData, categories } from '../data/services.js'

const route = useRoute()
const router = useRouter()

const categoryId = computed(() => route.params.categoryId)

const categoryData = computed(() => {
  return categories.find(cat => cat.id === categoryId.value) || {
    id: '',
    name: 'Неизвестная категория',
    icon: '❓',
    count: 0
  }
})

const services = computed(() => {
  return servicesData.filter(service => service.category === categoryId.value)
})

const getServiceCountText = () => {
  const count = services.value.length
  if (count === 1) return 'услуга'
  if (count >= 2 && count <= 4) return 'услуги'
  return 'услуг'
}

const goBack = () => {
  router.push('/')
}

const contactService = (service) => {
  console.log('Contact service:', service.title)
  scrollToContact()
}

const scrollToContact = () => {
  router.push('/#contact')
}

onMounted(() => {
  if (!categories.find(cat => cat.id === categoryId.value)) {
    router.push('/')
  }
})
</script>
