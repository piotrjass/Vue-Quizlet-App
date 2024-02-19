<template>
  <button
    class="w-[20rem] rounded-md border-2 border-teal-800 bg-teal-400 px-4 py-2 text-xl font-semibold text-white shadow-md transition-all duration-300 hover:bg-teal-600"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineOptions } from 'vue'
defineOptions({
  inheritAttrs: false
})
</script>

<style lang="scss" scoped></style>
