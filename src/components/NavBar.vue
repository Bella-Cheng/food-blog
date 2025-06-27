<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useCartStore } from '../stores/cartStore'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const authStore = useAuthStore()
const cartStore = useCartStore()
const router = useRouter()

const isMobile = ref(false)
const showMobileMenu = ref(false)

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile)
})

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const logout = () => {
  Swal.fire({
    title: '確定要登出嗎？',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '登出',
    cancelButtonText: '取消',
    confirmButtonColor: '#000000',
    cancelButtonColor: '#999999',
  }).then((result) => {
    if (result.isConfirmed) {
      authStore.logout()

      Swal.fire({
        title: '已登出',
        icon: 'success',
        timer: 1200,
        showConfirmButton: false,
      }).then(() => {
        router.push('/login')
      })
    }
  })
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-[#222222]/90 backdrop-blur-sm shadow-md">
    <!-- Desktop Navigation -->
    <nav v-if="!isMobile" class="flex justify-between max-w-6xl mx-auto py-4">
      <ul>
        <li>
          <router-link to="/" class="text-[#E6BC91] text-2xl font-bold">
            貝拉❤️美食
          </router-link>
        </li>
      </ul>

      <ul class="flex relative">
        <li>
          <router-link to="/about" class="text-[#E6BC91] text-lg px-4">關於貝拉</router-link>
        </li>
        <li>
          <router-link
            to="/featured"
            class="text-[#E6BC91] text-lg px-4 after:content-['｜'] after:pl-[20px]"
          >
            精選推薦
          </router-link>
        </li>
        
        <li class="pr-4">
          <template v-if="authStore.token">
            <button @click="logout" class="text-[#E6BC91] text-lg cursor-pointer">
              <i class="fa-solid fa-arrow-right-from-bracket px-3"></i>
              登出
            </button>
          </template>
          <template v-else>
            <router-link to="/login" class="text-[#E6BC91] text-lg">
              <i class="fa-solid fa-user px-3"></i>
              會員
            </router-link>
          </template>
        </li>

        <li class="relative">
          <router-link to="/shopcart" class="text-[#E6BC91] text-lg">
            <i id="cart-icon" class="fa-solid fa-bag-shopping px-3 mr-2"></i>
            購物車
          </router-link>
          <div
            v-if="cartStore.totalCount > 0"
            class="absolute -top-1 -right-4 bg-red-800 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
          >
            {{ cartStore.totalCount }}
          </div>
        </li>
      </ul>
    </nav>

    <!-- Mobile Navigation -->
    <nav v-else class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="text-[#E6BC91] text-xl">
          <i class="fa-solid fa-bars"></i>
        </button>
        
        <!-- Mobile Right Icons -->
        <div class="flex items-center space-x-4">
          <!-- Member Icon -->
          <template v-if="authStore.token">
            <button @click="logout" class="text-[#E6BC91] text-xl">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </template>
          <template v-else>
            <router-link to="/login" class="text-[#E6BC91] text-xl">
              <i class="fa-solid fa-user"></i>
            </router-link>
          </template>
          
          <!-- Cart Icon -->
          <router-link to="/shopcart" class="text-[#E6BC91] text-xl relative">
            <i class="fa-solid fa-bag-shopping"></i>
            <div
              v-if="cartStore.totalCount > 0"
              class="absolute -top-2 -right-2 bg-red-800 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ cartStore.totalCount }}
            </div>
          </router-link>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div v-if="showMobileMenu" class="bg-[#222222]/0 border-t border-gray-600">
        <div class="py-2">
          <router-link 
            to="/" 
            @click="showMobileMenu = false"
            class="block px-4 py-3 text-[#E6BC91] hover:bg-gray-700 transition duration-300"
          >
            回首頁
          </router-link>
          <router-link 
            to="/featured" 
            @click="showMobileMenu = false"
            class="block px-4 py-3 text-[#E6BC91] hover:bg-gray-700 transition duration-300"
          >
            精選推薦
          </router-link>
          <router-link 
            to="/about" 
            @click="showMobileMenu = false"
            class="block px-4 py-3 text-[#E6BC91] hover:bg-gray-700 transition duration-300"
          >
            關於貝拉
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>