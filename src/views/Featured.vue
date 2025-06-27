<script setup>
import { useCartStore } from '../stores/cartStore'
import { products } from '../data/products'

const cartStore = useCartStore()

// 取得圖片路徑
function getImageUrl(fileName) {
  return new URL(`../assets/products/${fileName}`, import.meta.url).href
}

// 加入購物車並觸發動畫
function addToCartWithFly(product, event) {
  // 手機不做動畫，直接加入購物車
  if (window.innerWidth < 768) {
    cartStore.addToCart(product)
    return
  }

  // 桌機動畫流程
  cartStore.addToCart(product)

  const button = event.currentTarget
  const card = button.closest('.card')
  const img = card.querySelector('img')
  const imgRect = img.getBoundingClientRect()

  const flyImg = document.createElement('img')
  flyImg.src = getImageUrl(product.image)
  flyImg.className = 'w-20 h-20 object-cover fixed z-[1000] transition-all duration-700 ease-in-out'
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
  <!-- 動畫圖片容器：飛進購物車用 -->
  <div id="fly-image-container" class="pointer-events-none fixed top-0 left-0 z-50"></div>

  <!-- 商品區塊 -->
  <div class="w-full bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <h2 class="text-2xl md:text-4xl font-bold text-center mt-24">精選商品推薦</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
        <div 
          v-for="item in products"
          :key="item.id"
          class="card bg-base-100 w-full shadow-md"
        >
          <figure class="aspect-square w-full overflow-hidden rounded">
            <img
              :src="getImageUrl(item.image)"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </figure>

          <div class="card-body">
            <h2 class="card-title">{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p class="font-bold text-lg">${{ item.price }} 元</p>

            <div class="card-actions justify-end mt-4">
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