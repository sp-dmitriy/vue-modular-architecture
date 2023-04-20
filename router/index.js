import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PageHome.vue'

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: Home,
  },
  {
    path: '/about',
    name: 'PageAbout',
    component: () => import('../views/PageAbout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router