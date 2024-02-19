<template>
  <ul class="flex gap-5 p-5">
    <li v-for="tag in tags" :key="tag.title" class="flex">
      <div
        class="w-fit rounded-3xl px-4 py-1 text-sm font-semibold text-white shadow-lg drop-shadow-lg transition-all duration-300 hover:scale-105"
        :class="tag.color"
      >
        {{ tag.title }}
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  tags: Array
})
</script>

<style lang="scss" scoped></style>
