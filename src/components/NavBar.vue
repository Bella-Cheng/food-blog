<script setup>

import { useCartStore } from '../stores/cartStore'
const cartStore = useCartStore()

</script>

<template>
  <body class="max-w-screen">
    <header class="bg-[#222222] w-full">
      <nav class="flex justify-between max-w-6xl mx-auto py-4">
        <ul>
          <li><a class="text-[#E6BC91] text-2xl font-bold" href="#" >貝拉❤️美食</a></li>
        </ul>
        <ul class="flex relative">
          <li><router-link class="text-[#E6BC91] text-lg px-4" to="/">首頁</router-link></li>
          <li><router-link class="text-[#E6BC91] text-lg px-4" to="/about">關於貝拉</router-link></li>
          <li>
            <router-link class="text-[#E6BC91] text-lg px-4 after:content-['｜'] after:pl-[20px]" to="/featured">
              精選推薦
            </router-link>
          </li>
          <li class="pr-4">
            <a class="text-[#E6BC91] text-lg" href="#"><i class="fa-solid fa-user px-3"></i>會員</a>
          </li>

          <li class="relative">
            <router-link class="text-[#E6BC91] text-lg" to="/shopcart">
              <i id="cart-icon" class="fa-solid fa-bag-shopping px-3"></i>購物車
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
  </body> 
</template>