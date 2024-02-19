<template>
  <div
    class="bg1 flex h-[13rem] w-[13rem] max-w-[25rem] flex-col items-center justify-center rounded-3xl border-2 border-teal-100 p-5 shadow-lg transition-all duration-300 hover:scale-105"
  >
    <div
      name="circle"
      class="flex items-center justify-center p-10 text-black drop-shadow-lg transition-all duration-300"
    >
      <Icon :icon="icon" width="70" height="70" />
    </div>
    <gradient-label>{{ title }}</gradient-label>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const props = defineProps({
  title: String,
  icon: String
})
</script>

<style lang="scss" scoped>
.bg1 {
  background: rgb(204, 251, 241);
  background: linear-gradient(
    180deg,
    rgba(204, 251, 241, 0.15) 0%,
    rgba(255, 255, 255, 1) 56%,
    rgba(204, 251, 241, 0.15) 100%
  );
}
</style>
