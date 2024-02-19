<template>
  <div>
    <button
      v-bind="$attrs"
      class="w-[20rem] rounded-md border-2 border-teal-400 px-4 py-2 text-xl font-semibold text-teal-400 shadow-md transition-all duration-300 hover:bg-gray-100"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'
defineOptions({
  inheritAttrs: false
})
</script>

<style lang="scss" scoped></style>
