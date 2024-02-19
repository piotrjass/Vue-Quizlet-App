<template>
  <button class="rounded-full border-2 border-black p-5 font-semibold" :class="mainColor">
    {{ resourceName }}
  </button>
</template>

<script setup>
const props = defineProps({
  resourceName: {
    type: String,
    default: 'resource'
  },
  mainColor: {
    type: String
  }
})
</script>

<style scoped></style>
