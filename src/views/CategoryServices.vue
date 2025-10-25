<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center gap-4">
          <button 
            @click="goBack"
            class="btn btn-ghost p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft class="h-5 w-5" />
          </button>
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl overflow-hidden bg-gray-100">
              <img 
                :src="getCategoryImage(categoryId).url" 
                :alt="categoryData.name"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            <div>
              <h1 class="text-2xl font-bold">{{ categoryData.name }}</h1>
              <p class="text-muted-foreground">{{ services.length }} {{ services.length === 1 ? 'услуга' : 'услуг' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-- Services List -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group"
        >
          <!-- Service Image -->
          <div class="relative h-48 bg-gray-100 overflow-hidden">
            <img 
              :src="getServiceImage(service.title, service.category)" 
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              @error="handleImageError"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="font-semibold text-white text-sm md:text-base line-clamp-2">{{ service.title }}</h3>
            </div>
          </div>
          
          <!-- Service Info -->
          <div class="p-4">
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-primary">{{ service.price }}</span>
              <button 
                @click="contactService(service)"
                class="btn btn-primary btn-sm"
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="services.length === 0" class="text-center py-16">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
          <span class="text-2xl">🔍</span>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Услуги не найдены</h3>
        <p class="text-muted-foreground mb-6">В данной категории пока нет доступных услуг</p>
        <button @click="goBack" class="btn btn-primary">
          Вернуться к категориям
        </button>
      </div>
    </div>

    <!-- Contact CTA -->
    <div class="bg-white border-t">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
          <h3 class="text-xl font-semibold mb-2">Нужна консультация?</h3>
          <p class="text-muted-foreground mb-6">
            Наши специалисты помогут подобрать оптимальное решение для ваших задач
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { servicesData, categories } from '../data/services.js'
import { getServiceImage, getCategoryImage } from '../data/category-images.js'

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

const goBack = () => {
  router.push('/')
}

const contactService = (service) => {
  // Здесь можно добавить логику для связи с клиентом
  // Например, открыть модальное окно или перейти на страницу контактов
  console.log('Contact service:', service.title)
  scrollToContact()
}

const scrollToContact = () => {
  router.push('/#contact')
}

const handleImageError = (event) => {
  // Если изображение не загрузилось, показываем fallback
  const fallback = getCategoryImage(categoryId.value)
  event.target.src = fallback.url
}

onMounted(() => {
  // Если категория не найдена, перенаправляем на главную
  if (!categories.find(cat => cat.id === categoryId.value)) {
    router.push('/')
  }
})
</script>
