<template>
  <div
    class="m-4 flex flex-row items-end justify-between rounded-sm border-2 border-transparent p-5 drop-shadow-lg transition-all duration-300 hover:shadow-sm"
    :class="{ hidden: collapsed }"
  >
    <div v-if="showNavbarMenu" class="flex gap-5 transition-all duration-300">
      <Icon icon="streamline:logout-1-solid" width="32" height="32" />
      <Icon icon="lets-icons:setting-line" width="32" height="32" />
    </div>
    <button @click="showNavbarMenu = !showNavbarMenu">
      <Icon icon="ph:dots-three-outline-vertical" width="32" height="32" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
const showNavbarMenu = ref(false)
const props = defineProps()
</script>

<style lang="scss" scoped></style>
