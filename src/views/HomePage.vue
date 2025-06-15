<script setup>

</script>

<template>
  <body class="max-w-screen">
    <main>
      <!-- Section #1 -->
      <section  class="bg-[url(./picture/bgc-bakery.jpg)] bg-cover p-46">
        <div class="text-center max-w-6xl mx-auto">
          <h1 class="text-[#E6BC91] text-2xl font-bold py-8">熱愛美食</h1>
          <p class="text-8xl text-stone-50 pb-12">貝拉美食坊</p>
          <a  class="text-lg font-bold text-stone-50 py-4 px-16 border-1 border-[#E6BC91]" href="#">關於貝拉</a>
        </div>
      </section>

      <!-- Section #2 -->
      <section class="text-center max-w-6xl mx-auto py-20 my-4">
        <h2 class="text-5xl py-8">探索每一口的驚喜，收藏每一次的感動！</h2>
        <p class="text-2xl/12">歡迎來到我們的美食天地，這裡精選全台美味小吃、在地伴手禮與人氣美食文章，讓你吃得有靈魂、送得有溫度。無論是尋找下一站的美食靈感，還是提前預購貼心伴手禮，這裡，就是你的美味地圖起點。</p>
      </section>

      <section class="bg-[#222222] ">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-stone-50 text-5xl py-20 ">精選推薦</h2>
          <div class="grid grid-cols-3 gap-24">
            <div>
              <img class="w-full" src="./picture/img-buffet.jpg" alt="台北美食">
              <p class="text-3xl text-stone-50 py-4">台北美食</p>
            </div>
            <div>
              <img class="w-full" src="./picture/img-dessert.jpg" alt="台北甜點">
              <p class="text-3xl text-stone-50 py-4">台北甜點</p>
            </div>
            <div>
              <img class="w-full" src="./picture/img-food.jpg" alt="平價美食">
              <p class="text-3xl text-stone-50 py-4">平價美食</p>
            </div>
          </div>
          <div class="text-lg text-[#E6BC91] py-20 pb-20">
            <a class="after:content-['→'] after:pl-[20px]" href="#">查看文章</a>
          </div>
        </div>
      </section>

      <!-- Section #4 -->
      <section>
        <div class="max-w-6xl mx-auto py-32">
          <h2 class="text-4xl font-bold text-[#E6BC91] py-[40px]">伴手禮推薦</h2>
          <div class="grid grid-cols-2 grid-rows-2 gap-12 w-full">
            <div>
              <p class="text-xl font-bold">焦糖甜心【簡單李】焦糖奶油夾心餅 ：</p>
              <p class="text-lg">查找自己的廠商小子新年音樂建築長大表演魯蛇，愛情技術享受創建信用得知戰略。</p><br>
              <address class="text-lg not-italic"><span class="font-bold">店名：</span>簡單李</address>
              <address class="text-lg not-italic"><span class="font-bold">地址：</span>台北市松山區南京東路三段337號</address>
              <address class="text-lg not-italic"><span class="font-bold">電話：</span>0917-978-317</address><br>
            </div>
            <div class="row-span-2 flex justify-end">
              <img class="rounded-4xl w-[85%] shadow-[5px_5px_10px_rgba(0,0,0,0.4)]" src="https://lcp-prod-obs.line-scdn.net/0ha5R1_SpePhpvSC47nuxBTT8VMmtcOToSBjAjJ0oWNXEUeQUqJ2UiGjENMFMqJCsHU24jCSIUNV9CIgITNyYNGikVNVwlMQYXNHUNNx8XHFgpORgpIw/f640w" alt="伴手禮推薦">
            </div>
            <div>
              <p class="text-xl font-bold ">純手工【長壽本舖】長崎蜂蜜蛋糕：</p>
              <p>查找自己的廠商小子新年音樂建築長大表演魯蛇，愛情技術享受創建信用得知戰略。</p><br>
              <address class="text-lg not-italic"><span class="font-bold">店名：</span>長壽本舖長崎蜂蜜蛋糕</address>
              <address class="text-lg not-italic"><span class="font-bold">地址：</span>高雄市新興區六合路120號</address>
              <address class="text-lg not-italic"><span class="font-bold">電話：</span>07-223-5189</address>
            </div>
          </div>
        </div>
      </section>
    </main>

    
  </body>
</template>

<style scoped>
:root{
    --gold: #E6BC91;
    --black:#222222;
}

</style>
