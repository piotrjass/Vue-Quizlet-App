<template>
  <div
    class="font-semibold text-[#5C5589] transition-all duration-300 hover:cursor-pointer hover:text-black"
  >
    {{ listItem }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps(['listItem'])
</script>

<style scoped></style>
