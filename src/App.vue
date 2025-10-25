<template>
  <div class="min-h-screen bg-background">
    <AppHeader @navigate="handleNavigate" />
    <main>
      <HeroSection />
      <ServicesSection @category-click="handleCategoryClick" />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const selectedCategory = ref(null)

const handleCategoryClick = (categoryId) => {
  selectedCategory.value = categoryId
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleNavigate = (section) => {
  // If we're on a category page, first return to main page
  if (selectedCategory.value) {
    selectedCategory.value = null
  }
}
</script>
