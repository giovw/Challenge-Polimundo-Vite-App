import Default from '../layouts/default/Default.vue'
import Home from '../views/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.component('LayoutDefault', Default)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/tickets',
    name: 'Tickets',
    // route level code-splitting
    component: () => import('../views/Tickets.vue'),
    meta: {
      layout: 'default'
    }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
