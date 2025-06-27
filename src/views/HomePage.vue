<template>
  <div class="max-w-screen overflow-x-hidden">
    <!-- Main Content -->
    <div class="pt-16">
      <!-- Section #1 -->
      <div class="bg-[url('./assets/picture/bgc-bakery.jpg')] bg-cover bg-center px-4 py-16 md:py-32">
        <div class="text-center max-w-6xl mx-auto">
          <h1 class="text-[#E6BC91] text-lg md:text-2xl font-bold py-3 md:py-8">熱愛美食</h1>
          <p class="text-3xl md:text-8xl text-stone-50 pb-4 md:pb-12 font-bold">貝拉美食坊</p>
          <router-link to="/about" class="inline-block text-sm md:text-lg font-bold text-stone-50 py-2 md:py-4 px-6 md:px-16 border border-[#E6BC91] hover:bg-[#E6BC91] hover:text-gray-800 transition duration-300">關於貝拉</router-link>
        </div>
      </div>

      <!-- Section #2 - Introduction -->
      <div class="text-center max-w-6xl mx-auto px-4 py-10 md:py-20 my-4">
        <h2 class="text-base md:text-5xl py-3 md:py-8 font-semibold">探索每一口的驚喜，收藏每一次的感動！</h2>
        <p class="text-sm md:text-2xl leading-relaxed text-gray-600">歡迎來到我們的美食天地，這裡精選全台美味小吃、在地伴手禮與人氣美食文章，讓你吃得有靈魂、送得有溫度。</p>
      </div>

      <!-- Section #3 - Featured -->
      <div class="bg-[#222222] px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-stone-50 text-2xl md:text-5xl py-10 md:py-20 font-bold">精選推薦</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24">
            <div v-for="item in featuredItems" :key="item.id" class="group cursor-pointer">
              <div class="overflow-hidden rounded-lg aspect-square">
                <img class="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" :src="item.image" :alt="item.title">
              </div>
              <p class="text-lg md:text-3xl text-stone-50 py-4">{{ item.title }}</p>
            </div>
          </div>
          <div class="text-sm md:text-lg text-[#E6BC91] py-10 md:py-20">
            <router-link to="/featured" class="hover:text-white transition duration-300 after:content-['→'] after:pl-[12px] md:after:pl-[20px]">
              查看推薦
            </router-link>
          </div>
        </div>
      </div>

      <!-- Section #4 - Souvenirs -->
      <div class="px-4">
        <div class="max-w-6xl mx-auto py-16 md:py-32">
          <h2 class="text-xl md:text-4xl font-bold text-[#E6BC91] py-6 md:py-[40px]">伴手禮推薦</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div class="order-2 md:order-1">
              <p class="text-base md:text-xl font-bold mb-3">焦糖甜心【簡單李】焦糖奶油夾心餅：</p>
              <p class="text-sm md:text-lg text-gray-600 mb-4">精選優質材料製作，層次豐富的焦糖奶油夾心，每一口都是甜蜜的享受，是送禮自用的最佳選擇。</p>
              <div class="space-y-2">
                <address class="text-sm md:text-lg not-italic"><span class="font-bold">店名：</span>簡單李</address>
                <address class="text-sm md:text-lg not-italic"><span class="font-bold">地址：</span>台北市松山區南京東路三段337號</address>
                <address class="text-sm md:text-lg not-italic"><span class="font-bold">電話：</span>0917-978-317</address>
              </div>
            </div>
            <div class="order-1 md:order-2 md:row-span-2 flex justify-center">
              <div class="aspect-square w-full md:w-[85%]">
                <img class="rounded-3xl w-full h-full object-cover shadow-[5px_5px_10px_rgba(0,0,0,0.4)]" src="https://lcp-prod-obs.line-scdn.net/0ha5R1_SpePhpvSC47nuxBTT8VMmtcOToSBjAjJ0oWNXEUeQUqJ2UiGjENMFMqJCsHU24jCSIUNV9CIgITNyYNGikVNVwlMQYXNHUNNx8XHFgpORgpIw/f640w" alt="伴手禮推薦">
              </div>
            </div>
            <div class="order-3">
              <p class="text-base md:text-xl font-bold mb-3">純手工【長壽本舖】長崎蜂蜜蛋糕：</p>
              <p class="text-sm md:text-lg text-gray-600 mb-4">傳承日式工藝，純手工製作的長崎蜂蜜蛋糕，口感綿密香甜，是台灣在地的經典美味。</p>
              <div class="space-y-2">
                <address class="text-sm md:text-lg not-italic"><span class="font-bold">店名：</span>長壽本舖長崎蜂蜜蛋糕</address>
                <address class="text-sm md:text-lg not-italic"><span class="font-bold">地址：</span>高雄市新興區六合路120號</address>
                <address class="text-sm md:text-lg not-italic"><span class="font-bold">電話：</span>07-223-5189</address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const featuredItems = ref([
  {
    id: 1,
    title: '台北美食',
    image: new URL('../assets/picture/img-buffet.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: '台北甜點',
    image: new URL('../assets/picture/img-dessert.jpg', import.meta.url).href
  },
  {
    id: 3,
    title: '平價美食',
    image: new URL('../assets/picture/img-food.jpg', import.meta.url).href
  }
])
</script>