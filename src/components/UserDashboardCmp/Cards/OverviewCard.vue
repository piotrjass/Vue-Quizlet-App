<template>
  <div
    class="relative m-4 flex h-fit w-[15rem] flex-col items-center justify-center gap-3 rounded-lg border-2 border-gray-100 p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl md:min-w-[10vw]"
  >
    <!-- <img
      class="absolute inset-0 h-full w-full object-cover object-center"
      src="../../../assets/img/global/computer-bg-opacity-01.png"
      alt=""
    /> -->
    <div name="icon" class="mt-2 rounded-2xl">
      <Icon :icon="icon" width="30" height="30" />
    </div>
    <div name="number" class="flex items-center justify-center text-xl font-bold">
      {{ number }}
    </div>
    <div name="desc" class="">
      <gradient-label> {{ title }}</gradient-label>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  icon: String,
  number: Number,
  title: String
})
</script>

<style scoped></style>
