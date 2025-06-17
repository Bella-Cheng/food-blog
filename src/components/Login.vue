<script setup>

</script>

<template>
  <body class="max-w-screen">
    <div class="max-w-6xl mx-auto">

      <div class="fixed inset-0 bg-black opacity-[.67] -z-10"></div>   
      <div class="min-h-screen flex justify-center items-center ">
        <div class="bg-stone-50 w-[500px] p-10 rounded-xl shadow-lg">
          <h2 class="mb-8 font-semibold text-2xl text-center">會員登入</h2>
          <div class="mb-6">
            <p class="text-left mb-2 font-semibold">帳號 YOUR USERNAME OR E-MAIL</p>
            <input type="text" name="" id="" class="input input-bordered w-full">
          </div>
          <div class="mb-6">
            <div class="flex justify-between text-center">
              <p class="text-left mb-2 font-semibold">密碼 PASSWORD</p>
              <p class="text-button mt-2 text-xs hover:text-sky-600">顯示密碼</p>
            </div>


           <input type="text" name="" id="" class="input input-bordered w-full">
          </div>
          <div class="flex justify-between items-center pt-4">
            <button type="button" class="btn btn-neutral px-18 hover:bg-slate-500">
              登入
            </button>
          </div>
          <div class="flex justify-between">
            <button type="button" class="cursor-pointer my-6 px-14 hover:text-sky-600">忘記帳號</button>
            <button type="button" class="cursor-pointer my-6 px-20 hover:text-sky-600">忘記密碼</button>
          </div>

          <hr class="border-gray-400" />
          <button type="button" class="mt-6">還沒有帳號 ？ 註冊一個吧</button><br/>
          <button type="button" class="cursor-pointer mt-6 btn btn-neutral w-full hover:bg-slate-500">前往註冊</button>
        </div>
      </div>


    </div>


  </body>
</template>

<style scoped>
:root{
    --gold: #E6BC91;
    --black:#222222;
}

</style>