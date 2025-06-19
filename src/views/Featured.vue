<script setup>
import { useCartStore } from '../stores/cartStore'
import { products } from '../data/products'

const cartStore = useCartStore()

function getImageUrl(fileName) {
  return new URL(`../assets/products/${fileName}`, import.meta.url).href
}

function addToCartWithFly(product, event) {
  cartStore.addToCart(product)

  const button = event.currentTarget
  const card = button.closest('.card')
  const img = card.querySelector('img')
  const imgRect = img.getBoundingClientRect()

  const flyImg = document.createElement('img')
  flyImg.src = getImageUrl(product.image)
  flyImg.className = 'w-20 h-20 object-cover fixed z-[1000] transition-all duration-900 ease-in-out'
  flyImg.style.position = 'fixed'
  flyImg.style.top = `${imgRect.top}px`
  flyImg.style.left = `${imgRect.right}px`
  flyImg.style.opacity = '1'

  const container = document.getElementById('fly-image-container')
  container.appendChild(flyImg)

  const cartIcon = document.getElementById('cart-icon')
  const cartRect = cartIcon.getBoundingClientRect()

  const targetX = cartRect.left + cartRect.width / 2
  const targetY = cartRect.top + cartRect.height / 2

  requestAnimationFrame(() => {
    flyImg.style.transform = 'scale(0.1)'
    flyImg.style.top = `${targetY}px`
    flyImg.style.left = `${targetX}px`
    flyImg.style.opacity = '0'
  })

  setTimeout(() => {
    flyImg.remove()
  }, 700)
}
</script>

<template>
  <!-- 動畫圖片容器 -->
  <div id="fly-image-container" class="pointer-events-none fixed top-0 left-0 z-50"></div>

  <!-- 商品列表 -->
  <div class="max-w-screen">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        <div 
          v-for="item in products"
          :key="item.id"
          class="card bg-base-100 w-96 shadow-sm"
        >
          <figure class="aspect-[1/1] w-full overflow-hidden rounded">
            <img
              :src="getImageUrl(item.image)"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p>${{ item.price }}元</p>
            <div class="card-actions justify-end">
              <button
                @click="addToCartWithFly(item, $event)"
                class="btn bg-black text-white border-none hover:bg-amber-600"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>