<template>
  <div
    name="container"
    class="relative mx-auto my-auto flex h-[20vh] min-w-[10vw] flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-200 p-5 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <!-- <img
      class="absolute inset-0 h-full w-full object-cover object-center"
      src="../../../assets/img/global/computer-bg-opacity-01.png"
      alt=""
    /> -->
    <div
      name="user-img"
      class="mt-4 flex items-center justify-center rounded-full border-2 border-gray-300 shadow-lg"
    >
      <Icon icon="zondicons:user-solid-circle" width="50" height="50" />
    </div>
    <div name="user-name and email" class="mx-5 mb-5 flex flex-col items-center justify-center">
      <GradientLabel>
        <div name="user-name" class="font-semibold">Hello, {{ name }}</div></GradientLabel
      >

      <div name="user email" class="text-xs font-semibold text-gray-400">{{ email }}</div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import GradientLabel from '../../BaseCmps/gradientLabel.vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  name: String,
  email: String
})
</script>

<style scoped></style>
