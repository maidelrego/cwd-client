import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../components/Quotes.vue')
  },
  {
    path: '/contactUs',
    name: 'Contact Us',
    component: () => import('../components/ContactUs.vue')
  },
  {
    path: '/thank-you',
    name: 'Thank You',
    component: () => import('../components/ThankYou.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
