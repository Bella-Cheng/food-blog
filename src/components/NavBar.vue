<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useCartStore } from '../stores/cartStore'

const router = useRouter()
const cartStore = useCartStore()
const isLoggedIn = computed(() => !!localStorage.getItem('token'))

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
      localStorage.removeItem('token')
      localStorage.removeItem('user')
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
  <header class="bg-[#222222] w-full">
    <nav class="flex justify-between max-w-6xl mx-auto py-4">
      <ul>
        <li>
          <router-link to="/" class="text-[#E6BC91] text-2xl font-bold">
            貝拉❤️美食
          </router-link>
        </li>
      </ul>

      <ul class="flex relative">
        <li>
          <router-link to="/" class="text-[#E6BC91] text-lg px-4">首頁</router-link>
        </li>
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
          <template v-if="isLoggedIn">
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
            <i id="cart-icon" class="fa-solid fa-bag-shopping px-3"></i>
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
  </header>
</template>