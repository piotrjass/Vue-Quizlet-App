<template>
  <section class="flex h-full w-full flex-col items-center justify-center gap-10 bg-transparent">
    <div class="flex h-fit w-fit flex-col gap-20 rounded-3xl">
      <form action="" class="flex flex-col items-center justify-center gap-7">
        <gradient-label class="text-5xl">Email</gradient-label>
        <formInput
          :inputType="text"
          v-model="email"
          :class="{ ' border-green-400': isValidEmail }"
        ></formInput>
        <gradient-label class="text-5xl"> Password</gradient-label>
        <formInput
          :inputType="password"
          v-model="password"
          :class="{ ' border-green-400': isValidPassword }"
        ></formInput>
        <gradient-label class="text-5xl">Confirm</gradient-label>
        <formInput
          :inputType="password"
          v-model="password"
          :class="{ ' border-green-400': isValidConfirmPassword }"
        ></formInput>
      </form>

      <div class="flex items-center justify-center text-3xl">
        <base-button-dark @click="createUser()">Login</base-button-dark>
      </div>
    </div>
  </section>
</template>

<script setup>
// vue
import { reactive, ref, watch } from 'vue'
// packages
import 'animate.css'
// store
import { useUserStore } from '../../stores/userStore'
const userStore = useUserStore()
//
import formInput from './formInput.vue'
// form realted variables
const newUser = reactive({ email: '', password: '', confirmPassword: '' })
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
// validation
const isValidEmail = ref(false)
const isValidPassword = ref(false)
const isValidConfirmPassword = ref(false)
// regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^[a-zA-Z0-9]{8,20}$/
const usernameRegex = /^([^@]+)@/
// functions
async function createUser() {
  const newUser = {
    name: email.value.match(usernameRegex)[1],
    email: email.value,
    password: password.value,
    passwordConfirm: confirmPassword.value
  }

  const response = await userStore.createUser(newUser)
  if (response === 'success') {
    clearData()
  }
}

function clearData() {
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
  isValidEmail.value = false
  isValidPassword.value = false
  isValidConfirmPassword.value = false
}

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

watch(confirmPassword, (newValue) => {
  if (passwordRegex.test(newValue)) {
    isValidConfirmPassword.value = true
  }
  if (!passwordRegex.test(newValue)) {
    isValidConfirmPassword.value = false
  }
})
</script>
