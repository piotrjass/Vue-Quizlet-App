<template>
  <input
    @input="emit('update:modelValue', $event.target.value)"
    required
    type="inputType"
    class="rounded-3xl border-2 bg-red-100 bg-transparent px-1 py-2 text-xl shadow-lg transition-all duration-300 hover:border-blue-400 active:border-blue-400"
  />
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['inputType'])
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped></style>
