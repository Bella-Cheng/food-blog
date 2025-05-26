<script setup>

</script>

<template>
  <body class="max-w-screen">
    <header class="bg-[#222222] w-full">
      <nav class="flex justify-between max-w-6xl mx-auto py-4">
        <ul>
          <li><a class="text-[#E6BC91] text-2xl font-bold" href="#" >貝拉❤️美食</a></li>
        </ul>
        <ul class="flex">
          <li><a class="text-[#E6BC91] text-lg px-4" href="#">首頁</a></li>
          <li><a class="text-[#E6BC91] text-lg px-4" href="#">關於我們</a></li>
          <li><a class="text-[#E6BC91] text-lg px-4 after:content-['｜'] after:pl-[20px]" href="#">精選推薦</a></li>
          <li class="pr-4"><a class="text-[#E6BC91] text-lg " href="#"><i class="fa-solid fa-user px-3"></i>會員</a></li>
          <li><a class="text-[#E6BC91] text-lg " href="#"><i class="fa-solid fa-bag-shopping px-3 "></i>購物車</a></li>

        </ul>
      </nav>
    </header>
    <main>
      <!-- Section #1 -->
      <section  class="bg-[url(./picture/bgc-cookie.jpg)] bg-cover p-46 bg-[20%_30%] font-bold">
        <div class="text-center max-w-6xl mx-auto">
          <h1 class=" text-stone-50 pb-12 text-8xl">關於我們</h1>
        </div>
      </section>

      <!-- Section #2 -->
      <section class="text-center max-w-6xl mx-auto py-35 my-4">
        <h2 class="text-5xl py-8">簡介</h2>
        <p class="text-2xl/12">嗨，我是貝拉，一個熱愛美食、也喜歡記錄生活的小小創作者。<br />平常喜歡到處吃吃喝喝，發掘那些藏在街角的小店與感動味蕾的美味料理。<br />在這個網站，我會分享我的美食筆記或是其他不錯的美食文章、推薦的伴手禮和預購好物，<br />希望讓你也能在忙碌的生活中，找到一些療癒與溫暖的味道。
      </p>
      </section>

      <!-- Section #3 -->
      <section class="bg-[#d6d1d163]">
        <div class="max-w-4xl mx-auto py-24  ">
          <h2 class="text-5xl py-8 my-6 text-center">聯絡我們</h2>
          <form class="grid grid-cols-4 gap-6 items-center">

            <!-- 姓名 -->
            <label for="name" class="text-right col-span-1">您的姓名</label>
            <input id="name" type="text" class="input input-bordered w-full col-span-2" />
            <div class="col-span-1"></div>
          
            <!-- 信箱 -->
            <label for="email" class="text-right col-span-1">信箱</label>
            <div  class="input input-bordered flex items-center gap-2 w-full col-span-2">
              <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input id="email" type="email" placeholder="mail@site.com" required class="grow" />
            </div >
            <div class="col-span-1"></div>
          
            <!-- 訊息 -->
            <label for="message" class="text-right self-start pt-2 col-span-1">訊息</label>
            <textarea id="message" class="textarea textarea-bordered w-full col-span-2" rows="5" placeholder="請輸入您的訊息..."></textarea>
            <div class="col-span-1"></div>
          
            <!-- 按鈕（跨兩欄） -->
            <div class="col-span-4 text-center pt-4">
              <button type="submit" class="btn btn-primary mr-4 col-span-2" >送出</button>
              <button type="reset" class="btn">清除</button>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer class="bg-[#222222] py-16">
      <div class="text-center max-w-6xl mx-auto">
        <p class="text-lg font-bold text-stone-50 py-4"> 貝拉❤️美食  版權所有 © 2025 </p>
        <span class="font-bold text-stone-50">聯絡信箱：</span><a  class="text-stone-50" href="mailto:dhp951320@gmail.com">dhp951320@gmail.com</a>
        <p class="py-4 text-stone-400">Copyright © BellaCheng All Rights Reserved.</p>
      </div>
    </footer>
  </body>
</template>

<style scoped>
:root{
    --gold: #E6BC91;
    --black:#222222;
}

</style>
