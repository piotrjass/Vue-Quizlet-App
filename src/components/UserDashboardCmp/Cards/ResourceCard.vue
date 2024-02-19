<template>
  <div
    name="container"
    class="m-2 flex h-fit w-fit max-w-[20vw] flex-grow flex-col gap-3 overflow-hidden rounded-xl border-2 border-gray-200 p-7 shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer"
  >
    <div name="icons" class="flex justify-between">
      <div name="icon" class="flex w-fit rounded-xl backdrop-blur-lg">
        <Icon :icon="icon" width="80" height="80" />
      </div>
      <div>
        <Icon
          icon="ph:star-bold"
          width="30"
          height="30"
          class="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-yellow-500"
        />
      </div>
    </div>
    <div name="title" class="mt-3 font-bold">{{ title }}</div>
    <div name="description" class="mt-2 flex flex-wrap text-center">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: String,
  description: String,
  icon: String
})
</script>

<style scoped>
.background {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
</style>
