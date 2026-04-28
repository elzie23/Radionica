import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from './views/HomePage.vue'
import ContactPage from './views/ContactPage.vue'
import ProductsPage from './views/ProductsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/products', component: ProductsPage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})