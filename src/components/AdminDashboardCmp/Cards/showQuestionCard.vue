<template>
  <div
    name="card-container"
    class="mb-5 flex flex-grow flex-col items-center justify-center rounded-md border-2 border-gray-100 p-5"
  >
    <data class="p-5 text-center text-xl font-semibold">
      {{ question }}
    </data>
    <data class="p-3 text-center text-lg font-semibold text-gray-500" v-html="answer"></data>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  question: {
    type: String,
    default: 'question'
  },
  answer: {
    type: String,
    default: 'answer'
  }
})
</script>

<style></style>
