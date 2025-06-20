<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

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
    <!-- Section #1 -->
    <section class="bg-[url(./assets/picture/bgc-cookie.jpg)] bg-cover p-46 bg-[20%_30%] font-bold">
      <div class="text-center max-w-6xl mx-auto">
        <h1 class="text-stone-50 pb-12 text-8xl">關於我們</h1>
      </div>
    </section>

    <!-- Section #2 -->
    <section class="text-center max-w-6xl mx-auto py-35 my-4">
      <h2 class="text-5xl py-8">簡介</h2>
      <p class="text-2xl/12">
        嗨，我是貝拉，一個熱愛美食、也喜歡記錄生活的小小創作者。<br />
        平常喜歡到處吃吃喝喝，發掘那些藏在街角的小店與感動味蕾的美味料理。<br />
        在這個網站，我會分享我的美食筆記或是其他不錯的美食文章、推薦的伴手禮和預購好物，<br />
        希望讓你也能在忙碌的生活中，找到一些療癒與溫暖的味道。
      </p>
    </section>

    <!-- Section #3 -->
    <section class="bg-[#d6d1d163]">
      <div class="max-w-4xl mx-auto py-24">
        <h2 class="text-5xl py-8 my-6 text-center">聯絡貝拉</h2>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-4 gap-6 items-center">

          <label for="name" class="text-right col-span-1">您的姓名</label>
          <input
            id="name"
            name="name"
            v-model="name"
            type="text"
            required
            class="input input-bordered w-full col-span-2"
          />
          <div class="col-span-1"></div>

          <label for="email" class="text-right col-span-1">信箱</label>
          <div class="input input-bordered flex items-center gap-2 w-full col-span-2">
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
          <div class="col-span-1"></div>

          <label for="message" class="text-right self-start pt-2 col-span-1">訊息</label>
          <textarea
            id="message"
            name="message"
            v-model="message"
            class="textarea textarea-bordered w-full col-span-2"
            rows="5"
            required
            placeholder="請輸入您的訊息..."
          ></textarea>
          <div class="col-span-1"></div>

          <div class="col-span-4 text-center pt-4">
            <button type="submit" class="btn btn-primary mr-4 col-span-2">送出</button>
            <button type="reset" class="btn">清除</button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
:root {
  --gold: #e6bc91;
  --black: #222222;
}
</style>