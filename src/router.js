import { createWebHistory, createRouter } from 'vue-router'
import { supabase } from '/utils/supabase'
import HomePage from './views/HomePage.vue'
import ContactPage from './views/ContactPage.vue'
import ProductsPage from './views/ProductsPage.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const routes = [
  { path: '/', component: HomePage , meta: { requiresAuth: true } },
  { path: '/contact', component: ContactPage, meta: { requiresAuth: true } },
  { path: '/products', component: ProductsPage, meta: { requiresAuth: true } },
  { path: '/login', component: Login , meta: { requiresGuest: true } },
  { path: '/register', component: Register , meta: { requiresGuest: true } }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
async function getCurrentUser() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

router.beforeEach(async (to, from) => {
  const session = await getCurrentUser()
  const isLoggedIn = !!session

  if (to.meta.requiresGuest && isLoggedIn) {
    return '/'
  }

  if (to.meta.requiresAuth && !isLoggedIn) {
    return '/login'
  }

  return true
})
