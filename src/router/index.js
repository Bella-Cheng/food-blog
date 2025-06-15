import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import HomePage from '../views/HomePage.vue'
import Featured from '../views/Featured.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/featured',
    name: 'featured',
    component: Featured
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router