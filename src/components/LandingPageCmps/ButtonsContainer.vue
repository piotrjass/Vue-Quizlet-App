<template>
  <div
    name="button container"
    class="flex flex-grow flex-wrap items-center justify-center gap-5 whitespace-nowrap px-3 py-5 md:px-40"
  >
    <button
      class="w-[20rem] rounded-md border-2 border-teal-800 bg-teal-400 px-4 py-2 text-xl font-semibold text-white shadow-md transition-all duration-300 hover:bg-teal-600"
    >
      See what we got!
    </button>

    <RouterLink to="/login">
      <Transition
        enter-active-class="animate__animated animate__fadeIn "
        leave-active-class="animate__animated animate__fadeIn"
      >
        <button
          class="w-[20rem] rounded-md border-2 border-teal-400 px-4 py-2 text-xl font-semibold text-teal-400 shadow-md transition-all duration-300 hover:bg-gray-100"
        >
          Sign up now!
        </button></Transition
      >
    </RouterLink>
  </div>
</template>

<script setup>
import 'animate.css'
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
