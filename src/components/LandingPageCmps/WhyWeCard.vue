<template>
  <div
    class="flex w-[30%] min-w-[20rem] flex-col gap-5 rounded-3xl border-2 border-teal-100 p-5 shadow-lg transition-all duration-300 hover:scale-105"
  >
    <div name="icon">
      <Icon :icon="icon" class="drop-shadow-xl" width="40" height="40" />
    </div>
    <p
      name="title"
      class="bg-gradient-to-r from-teal-300 to-teal-700 bg-clip-text font-semibold text-transparent"
    >
      {{ title }}
    </p>
    <p name="desc" class="text-gray-600">{{ desc }}</p>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const props = defineProps({
  icon: String,
  title: String,
  desc: String
})
</script>

<style lang="scss" scoped></style>
