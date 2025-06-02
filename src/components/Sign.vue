<script setup>

</script>

<template>
  <body class="max-w-screen">
    <div class="max-w-6xl mx-auto">

      <div class="fixed inset-0 bg-black opacity-[.67] -z-10"></div>   
      <div class="min-h-screen flex justify-center items-center ">
        <div class="bg-stone-50 w-[500px] p-10 rounded-xl shadow-lg">
          <h2 class="mb-8 font-semibold text-2xl text-center">會員註冊</h2>
          <div class="mb-6">
            <p class="text-left mb-2 font-semibold">帳號 YOUR USERNAME OR E-MAIL</p>
            <p class="text-left mb-6 text-xs text-gray-800">*輸入 E-MAIL 或是 自訂帳號 ( 需要英文跟數字組合 )</p>
            <input type="text" name="" id="" class="input input-bordered w-full">
          </div>
          <div class="mb-6">
            <p class="text-left mb-2 font-semibold">密碼 PASSWORD</p>
            <p class="text-left mb-6 text-xs text-gray-800">*需要英文跟數字組合</p>
           <input type="text" name="" id="" class="input input-bordered w-full">
          </div>
          <div class="flex justify-between items-center pt-4">
            <button type="button" class="btn btn-neutral px-18 hover:bg-slate-500">
              註冊
            </button>
            <button class="btn bg-white text-black border border-gray-300 flex items-center gap-2 w-1/2 hover:bg-gray-200 hover:border-gray-400">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button> 
          </div>
          <button type="button" class="cursor-pointer mt-6 hover:text-sky-600">已有帳號，點我進行登入</button>
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