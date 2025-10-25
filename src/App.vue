<template>
  <div class="min-h-screen bg-background">
    <AppHeader @navigate="handleNavigate" />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const handleNavigate = (section) => {
  // Navigation logic can be added here if needed
}
</script>
