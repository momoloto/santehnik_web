<template>
  <section id="contact" class="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 class="mb-4">Свяжитесь с нами</h2>
        <p class="text-muted-foreground text-lg">
          Оставьте заявку и наш специалист свяжется с вами для уточнения деталей
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 md:gap-12">
        <!-- Contact Form -->
        <div>
          <div class="card">
            <div class="p-6 md:p-8">
              <h3 class="mb-6 font-semibold">Заказать звонок</h3>
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Ваше имя"
                    class="input w-full"
                    required
                  />
                </div>
                <div>
                  <input
                    v-model="formData.phone"
                    type="tel"
                    placeholder="Телефон"
                    class="input w-full"
                    required
                  />
                </div>
                <div>
                  <textarea
                    v-model="formData.message"
                    placeholder="Опишите вашу проблему..."
                    rows="4"
                    class="textarea w-full"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-full btn-lg">
                  Отправить заявку
                </button>
                <p class="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <div 
            v-for="item in contactInfo"
            :key="item.title"
            class="card hover:shadow-md transition-shadow"
          >
            <div class="p-6">
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <component :is="item.icon" class="h-6 w-6 text-primary" />
                </div>
                <div class="flex-1">
                  <h4 class="mb-2 font-semibold">{{ item.title }}</h4>
                  <div v-for="(detail, idx) in item.details" :key="idx">
                    <p class="text-muted-foreground">
                      <a 
                        v-if="item.link && idx === 0" 
                        :href="item.link" 
                        class="hover:text-primary transition-colors"
                      >
                        {{ detail }}
                      </a>
                      <span v-else>{{ detail }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Emergency Banner -->
      <div class="mt-12 md:mt-16 bg-primary text-primary-foreground rounded-lg p-6 md:p-8 text-center">
        <h3 class="mb-2 text-white">Срочная помощь? Звоните прямо сейчас!</h3>
        <p class="mb-6 text-blue-100">
          Наша аварийная служба работает круглосуточно без выходных
        </p>
        <a href="tel:+87477252026">
          <button class="btn btn-secondary btn-lg gap-2">
            <Phone class="h-5 w-5" />
            +7 (747) 725-20-26
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'

const formData = ref({
  name: '',
  phone: '',
  message: ''
})

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    details: ["+7 (747) 725-20-26"],
    link: "tel:+87477252026",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@santehservice.kz", "support@santehservice.kz"],
    link: "mailto:info@santehservice.kz",
  },
  {
    icon: MapPin,
    title: "Адрес",
    details: ["г. Алматы", "ул. Абая, 150"],
    link: null,
  },
  {
    icon: Clock,
    title: "Время работы",
    details: ["Пн-Вс: 8:00 - 22:00", "Аварийная служба 24/7"],
    link: null,
  },
]

const handleSubmit = () => {
  // В реальном приложении здесь была бы отправка данных на сервер
  alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
  formData.value = { name: '', phone: '', message: '' }
}
</script>
