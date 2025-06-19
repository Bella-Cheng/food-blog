import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import HomePage from '../views/HomePage.vue'
import Featured from '../views/Featured.vue'
import ShopCart from '../views/ShopCart.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'



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
    name: 'Featured',
    component: Featured
  },
  { 
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },
  { 
    path: '/login',
    name: 'Login',
    component: Login
  },
  { 
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router