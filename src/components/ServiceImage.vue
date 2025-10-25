<template>
  <div class="relative w-full h-full bg-gray-100">
    <img 
      v-if="!imageError"
      :src="imageUrl" 
      :alt="alt"
      :class="imageClass"
      @error="handleError"
      @load="handleLoad"
      loading="lazy"
    />
    <div 
      v-if="imageError || loading" 
      class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <span class="text-4xl md:text-6xl">{{ fallbackIcon }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Изображение услуги'
  },
  fallbackIcon: {
    type: String,
    default: '🔧'
  },
  imageClass: {
    type: String,
    default: 'w-full h-full object-cover'
  }
})

const imageError = ref(false)
const loading = ref(true)

const handleError = () => {
  imageError.value = true
  loading.value = false
}

const handleLoad = () => {
  loading.value = false
}
</script>

