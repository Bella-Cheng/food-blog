<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  const savedUser = JSON.parse(localStorage.getItem('mockUser'))

  if (!savedUser) {
    Swal.fire({
      title: '查無帳號，請先註冊',
      confirmButtonText: '前往註冊',
      confirmButtonColor: '#000000',
      showClass: {
        popup: `animate__animated animate__fadeInDown animate__faster`,
      },
      hideClass: {
        popup: `animate__animated animate__fadeOutUp animate__faster`,
      },
    }).then(() => {
      router.push('/register')
    })
    return
  }

  if (
    username.value === savedUser.username &&
    password.value === savedUser.password
    
  ) {
    authStore.login('FAKE_LOGIN_TOKEN_123', savedUser)

    Swal.fire({
      title: '登入成功',
      icon: 'success',
      confirmButtonColor: '#000000',
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      router.push('/')
    })
  } else {
    Swal.fire({
      title: '帳號或密碼錯誤',
      icon: 'error',
      confirmButtonText: '重新輸入',
      confirmButtonColor: '#000000',
    })
  }
}
</script>

<template>
  <div class="max-w-screen">
    <div class="max-w-6xl mx-auto">
      <div class="fixed inset-0 bg-black opacity-[.67] -z-10"></div>

      <div class="min-h-screen flex justify-center items-center">
        <div class="bg-stone-50 w-[500px] p-10 rounded-xl shadow-lg">
          <h2 class="mb-8 font-semibold text-2xl text-center">會員登入</h2>

          <div class="mb-6">
            <p class="text-left mb-2 font-semibold">帳號 YOUR USERNAME</p>
            <input v-model="username" type="text" class="input input-bordered w-full" />
          </div>

          <div class="mb-6">
            <div class="flex justify-between text-center">
              <p class="text-left mb-2 font-semibold">密碼 PASSWORD</p>
              <button @click="showPassword = !showPassword" class="cursor-pointer text-button mt-2 text-xs hover:text-sky-600">
                顯示密碼
              </button>
            </div>
            <input v-model="password" :type="showPassword ? 'text' : 'password'" class="input input-bordered w-full" />
          </div>

          <button
            @click="handleLogin"
            type="button"
            class="btn btn-neutral px-18 hover:bg-slate-500 w-full"
          >
            登入
          </button>

          <div class="flex justify-between">
            <button type="button" class="cursor-pointer my-6 px-14 hover:text-sky-600">
              忘記帳號
            </button>
            <button type="button" class="cursor-pointer my-6 px-20 hover:text-sky-600">
              忘記密碼
            </button>
          </div>

          <hr class="border-gray-400" />

          <p class="mt-6">還沒有帳號？註冊一個吧</p>
          <router-link
            to="/signup"
            class="cursor-pointer mt-2 btn btn-neutral w-full hover:bg-slate-500"
          >
            前往註冊
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>