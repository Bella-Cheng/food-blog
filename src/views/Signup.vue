<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()
const username = ref('')
const password = ref('')

const handleRegister = () => {
  // 驗證帳號與密碼需為 6 碼以上的英文與數字組合
  const isValid = /^[A-Za-z0-9]{6,}$/.test(username.value) && /^[A-Za-z0-9]{6,}$/.test(password.value)

  if (!isValid) {
    Swal.fire({
      title: '帳號需含英文字母與數字',
      confirmButtonText: '確認',
      showClass: {
        popup: `animate__animated animate__fadeInUp animate__faster`,
      },
      hideClass: {
        popup: `animate__animated animate__fadeOutDown animate__faster`,
      },
      confirmButtonColor: '#000000',
    })
    return
  }

  const user = {
    username: username.value,
    password: password.value
  }

  localStorage.setItem('mockUser', JSON.stringify(user))

  Swal.fire({
    title: '註冊成功',
    icon: 'success',
    confirmButtonColor: '#000000',
    timer: 1500,
    showConfirmButton: false,
  }).then(() => {
    router.push('/login')
  })
}

</script>

<template>
  <div class="max-w-screen">
    <div class="max-w-6xl mx-auto">

      <div class="fixed inset-0 bg-black opacity-[.67] -z-10"></div>   
      <div class="min-h-screen flex justify-center items-center ">
        <div class="bg-stone-50 w-[500px] p-10 rounded-xl shadow-lg">
          <h2 class="mb-8 font-semibold text-2xl text-center">會員註冊</h2>
          <div class="mb-6">
            <p class="text-left mb-2 font-semibold">帳號 YOUR USERNAME OR E-MAIL</p>
            <p class="text-left mb-6 text-xs text-gray-800">*自訂帳號 ( 需要英文跟數字的6碼組合 )</p>
            <input v-model="username" type="text" name="" id="" class="input input-bordered w-full">
          </div>
          <div class="mb-6">
            <p class="text-left mb-2 font-semibold">密碼 PASSWORD</p>
            <p class="text-left mb-6 text-xs text-gray-800">*需要英文跟數字的6碼組合</p>
           <input v-model="password" type="text" name="" id="" class="input input-bordered w-full">
          </div>
          <button @click="handleRegister()" type="button" class="block w-full btn btn-neutral px-18 hover:bg-slate-500">
            註冊
          </button>
          <router-link to="/login" class="cursor-pointer underline mt-6 hover:text-sky-600">已有帳號，點我進行登入</router-link>
        </div>
      </div>
    </div>
  </div>
</template>