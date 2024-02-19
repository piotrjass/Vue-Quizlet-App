<template>
  <div class="w-fit rounded-3xl px-4 py-1 text-sm text-white" :class="color">
    {{ tag }}
  </div>
</template>

<script setup>
const props = defineProps({
  tag: String,
  color: String
})
</script>

<style lang="scss" scoped></style>
