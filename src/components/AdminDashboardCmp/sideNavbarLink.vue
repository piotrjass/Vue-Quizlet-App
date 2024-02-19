<template>
  <div
    name="list item container"
    class="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-5 font-semibold transition-all duration-300 hover:scale-105"
  >
    <div class="h-[20px] w-[5px] rounded-lg bg-black" name="box"></div>
    <Icon :icon="icon" width="30" height="30" />
    <div name="name of section">{{ name }}</div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  name: String,
  icon: String,
  routerlink: String
})
</script>

<style scoped></style>
