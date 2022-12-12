import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../components/HomePage.vue')
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import(/* webpackChunkName: "home" */ '../components/Quotes.vue')
  },
  {
    path: '/contactUs',
    name: 'Contact Us',
    component: () => import(/* webpackChunkName: "home" */ '../components/ContactUs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
