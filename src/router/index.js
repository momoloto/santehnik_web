import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CategoryServices from '../views/CategoryServices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:categoryId',
    name: 'CategoryServices',
    component: CategoryServices,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
