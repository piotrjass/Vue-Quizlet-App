<template>
  <div class="flex h-full w-full flex-col items-center justify-center gap-10 bg-transparent">
    <div class="flex h-fit w-fit flex-col gap-20 rounded-3xl p-10">
      <form action="" class="flex flex-col items-center justify-center gap-10 p-5">
        <gradient-label class="text-5xl">Email</gradient-label>
        <formInput
          :inputType="text"
          v-model="email"
          :class="{ ' border-green-400': isValidEmail }"
        ></formInput>

        <gradient-label class="text-5xl"> Password</gradient-label>

        <formInput
          :inputType="text"
          v-model="password"
          :class="{ ' border-green-400': isValidPassword }"
        ></formInput>
      </form>

      <div class="flex items-center justify-center text-3xl">
        <base-button-dark @click="loginUser">Login</base-button-dark>
      </div>
    </div>
  </div>
</template>

<script setup>
// vue
import { ref, watch } from 'vue'
// router
import { useRouter } from 'vue-router'
const router = useRouter()
// components
import formInput from './formInput.vue'
import GradientLabel from '../BaseCmps/gradientLabel.vue'
// store
import { useUserStore } from '../../stores/userStore'
const userStore = useUserStore()
// form related variables
const email = ref('')
const password = ref('')
// validation related variables
const isValidEmail = ref(false)
const isValidPassword = ref(false)
// regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^[a-zA-Z0-9]{8,20}$/
const loginUser = async function () {
  // check if the credentials are lexically correct
  if (isValidEmail.value !== true || isValidPassword.value !== true) {
    return
  }
  const user = {
    email: email.value.trim(),
    password: password.value.trim()
  }
  const response = await userStore.loginUser(user)
  localStorage.setItem('token', response.data.token)
  if (response.data.status === 'successful login!') {
    if (localStorage.getItem('token') === null) return
    router.push('hellouser')
  }
}

// watchers

watch(email, (newValue) => {
  if (emailRegex.test(newValue)) {
    isValidEmail.value = true
  }
  if (!emailRegex.test(newValue)) {
    isValidEmail.value = false
  }
})

watch(password, (newValue) => {
  if (passwordRegex.test(newValue)) {
    isValidPassword.value = true
  }
  if (!passwordRegex.test(newValue)) {
    isValidPassword.value = false
  }
})
</script>

<style scoped>
.bg {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}
</style>
