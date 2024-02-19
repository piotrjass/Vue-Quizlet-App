<template>
  <div
    name="card"
    class="relative m-4 mx-auto flex h-[10rem] w-[10rem] flex-col items-center justify-center gap-3 rounded-md border-2 border-gray-200 p-3"
  >
    <div name="icon" class="mt-2 rounded-2xl text-black">
      <Icon :icon="icon" width="40" height="40" />
    </div>
    <data name="number" class="flex items-center justify-center text-xl font-bold text-gray-500">
      {{ number }}
    </data>
    <data name="desc" class="font-semibold text-gray-400">
      <gradient-label>{{ title }}</gradient-label>
    </data>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  icon: String,
  number: Number,
  title: String
})
</script>

<style scoped></style>
