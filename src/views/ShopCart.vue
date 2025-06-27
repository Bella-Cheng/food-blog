<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'
import Swal from 'sweetalert2'

const cartStore = useCartStore()

const totalItem = computed(() => cartStore.cart.reduce((acc, item) => acc + item.quantity, 0))
const totalPrice = computed(() => cartStore.cart.reduce((acc, item) => acc + item.price * item.quantity, 0))

function getImageUrl(fileName) {
  return new URL(`../assets/products/${fileName}`, import.meta.url).href
}

function addItem(item) {
  item.quantity++
}

function reduceItem(item) {
  if (item.quantity > 1) item.quantity--
}

function checkout() {
  if (cartStore.cart.length === 0) {
    return Swal.fire({
      title: '購物車目前是空的',
      confirmButtonText: '確認',
      confirmButtonColor: '#000000',
      icon: 'warning',
    })
  }

  Swal.fire({
    title: '感謝購買！我們會儘快處理訂單',
    confirmButtonText: '確認',
    icon: 'success',
  })

  cartStore.clearCart()
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-12 bg-white rounded shadow mt-10">

    <!-- 📱 手機版 -->
    <div
      v-for="item in cartStore.cart"
      :key="item.id"
      class="md:hidden border-b border-gray-200 pb-6 mb-6"
    >
      <div class="flex gap-4">
        <img :src="getImageUrl(item.image)" class="w-20 h-20 object-cover rounded border" />
        <div class="flex-1">
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-sm text-gray-500 mt-1">{{ item.description }}</p>
        </div>
      </div>
      <div class="flex justify-between items-center mt-4 text-sm">
        <span class="text-gray-700">NT${{ item.price }}</span>
        <div class="flex items-center border rounded">
          <button @click="reduceItem(item)" class="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
          <span class="px-4">{{ item.quantity }}</span>
          <button @click="addItem(item)" class="px-3 py-1 text-gray-600 hover:bg-gray-100">＋</button>
        </div>
        <button @click="cartStore.removeShopCart(item.id)" class="text-red-500 hover:underline">刪除</button>
      </div>
    </div>

    <!-- 💻 桌機版表頭 -->
    <div class="hidden md:grid grid-cols-12 py-2 text-gray-500 text-sm border-b font-medium">
      <div class="col-span-5">商品</div>
      <div class="col-span-2 text-center">單價</div>
      <div class="col-span-2 text-center">數量</div>
      <div class="col-span-2 text-center">總計</div>
      <div class="col-span-1 text-center">操作</div>
    </div>

    <!-- 💻 桌機版購物車 -->
    <div
      v-for="item in cartStore.cart"
      :key="item.id"
      class="hidden md:grid md:grid-cols-12 md:items-center gap-4 py-6 border-b"
    >
      <div class="col-span-5 flex items-center gap-4">
        <img :src="getImageUrl(item.image)" class="w-20 h-20 object-cover rounded border" />
        <div>
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-gray-500 text-sm">{{ item.description }}</p>
        </div>
      </div>
      <div class="col-span-2 text-center text-sm">NT${{ item.price }}</div>
      <div class="col-span-2 flex justify-center">
        <div class="flex items-center border rounded">
          <button @click="reduceItem(item)" class="px-3 py-1 text-gray-600 hover:bg-gray-100">−</button>
          <span class="px-4">{{ item.quantity }}</span>
          <button @click="addItem(item)" class="px-3 py-1 text-gray-600 hover:bg-gray-100">＋</button>
        </div>
      </div>
      <div class="col-span-2 text-center text-red-600 font-semibold">
        NT${{ item.price * item.quantity }}
      </div>
      <div class="col-span-1 text-center">
        <button @click="cartStore.removeShopCart(item.id)" class="text-red-500 hover:underline text-sm">刪除</button>
      </div>
    </div>

    <!-- 🧾 總計區 -->
    <div class="flex flex-col md:flex-row justify-between items-center mt-6 px-4 py-4 bg-gray-50 rounded gap-4">
      <div class="text-sm text-gray-600">
        共 <span class="font-semibold text-black">{{ totalItem }}</span> 件商品
      </div>
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <div class="text-base text-gray-700">
          總金額：<span class="text-red-600 text-xl font-bold">NT${{ totalPrice }}</span>
        </div>
        <button
          @click="checkout"
          class="btn bg-black text-white hover:bg-amber-600 border-none px-6 py-2 rounded w-full sm:w-auto"
        >
          去買單
        </button>
      </div>
    </div>
  </div>
</template>