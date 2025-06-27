<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

// ✅ 正確引入圖片，不用 @
const bgCookie = new URL('../assets/picture/bgc-cookie.jpg', import.meta.url).href

const formAction = import.meta.env.VITE_FORMSPREE_URL

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = async () => {
  try {
    const res = await fetch(formAction, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })

    if (res.ok) {
      Swal.fire('寄送成功', '我已收到你的留言 ❤️', 'success')
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      Swal.fire('錯誤', '寄送失敗，請稍後再試', 'error')
    }
  } catch (err) {
    Swal.fire('錯誤', '發生意外，請稍後再試', 'error')
  }
}
</script>

<template>
  <main>
    <!-- Section #1 - Hero -->
    <section
      class="bg-cover bg-center py-16 px-4"
      :style="{ backgroundImage: `url(${bgCookie})` }"
    >
      <div class="text-center max-w-6xl mx-auto">
        <h1 class="text-3xl md:text-8xl text-white text-center py-8 font-bold">
          關於貝拉
        </h1>
      </div>
    </section>

    <!-- Section #2 - Introduction -->
    <section class="text-center max-w-6xl mx-auto py-20 px-4">
      <h2 class="text-2xl md:text-5xl py-4 md:py-8 font-semibold">簡介</h2>
      <p class="text-sm md:text-2xl leading-relaxed text-gray-700">
        嗨，我是貝拉，一個熱愛美食、也喜歡記錄生活的小小創作者。<br />
        平常喜歡到處吃吃喝喝，發掘那些藏在街角的小店與感動味蕾的美味料理。<br />
        在這個網站，我會分享我的美食筆記或是其他不錯的美食文章、推薦的伴手禮和預購好物，<br />
        希望讓你也能在忙碌的生活中，找到一些療癒與溫暖的味道。
      </p>
    </section>

    <!-- Section #3 - Contact Form -->
    <section class="bg-[#f5f5f5]">
      <div class="max-w-4xl mx-auto py-20 px-4">
        <h2 class="text-2xl md:text-4xl py-6 text-center font-bold">聯絡貝拉</h2>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <!-- 姓名 -->
          <label for="name" class="text-left md:text-right md:col-span-1">您的姓名</label>
          <input
            id="name"
            name="name"
            v-model="name"
            type="text"
            required
            class="input input-bordered w-full md:col-span-2 col-span-full"
          />
          <div class="hidden md:block md:col-span-1"></div>

          <!-- 信箱 -->
          <label for="email" class="text-left md:text-right md:col-span-1">信箱</label>
          <div class="input input-bordered flex items-center gap-2 w-full md:col-span-2 col-span-full">
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </g>
            </svg>
            <input
              id="email"
              name="email"
              v-model="email"
              type="email"
              placeholder="mail@site.com"
              required
              class="grow"
            />
          </div>
          <div class="hidden md:block md:col-span-1"></div>

          <!-- 訊息 -->
          <label for="message" class="text-left md:text-right pt-2 md:col-span-1">訊息</label>
          <textarea
            id="message"
            name="message"
            v-model="message"
            class="textarea textarea-bordered w-full md:col-span-2 col-span-full"
            rows="5"
            required
            placeholder="請輸入您的訊息..."
          ></textarea>
          <div class="hidden md:block md:col-span-1"></div>

          <!-- 按鈕 -->
          <div class="col-span-full text-center pt-6">
            <button type="submit" class="btn bg-black text-white hover:bg-gray-600 mr-4">送出</button>
            <button type="reset" class="btn">清除</button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>