import { createRouter, createWebHistory } from 'vue-router/auto'
// import HomeView from '../views/HomeView.vue'
// import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => setupLayouts(routes)
})

export default router
