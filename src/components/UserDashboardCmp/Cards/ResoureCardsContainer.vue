<template>
  <div
    class="mx-auto flex h-fit w-fit flex-grow flex-wrap items-center justify-center gap-3 rounded-3xl p-5 shadow-lg"
  >
    <resource-card
      class="md:w-[30%]"
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :description="card.description"
      :icon="card.icon"
      :class="card.class"
    ></resource-card>
  </div>
</template>

<script setup>
import ResourceCard from './ResourceCard.vue'
import { ref } from 'vue'
const cards = ref([
  {
    class: '@apply bg-gradient-to-r from-blue-300 to-purple-600;',
    title: 'Fundamentals',
    description: 'Fundamentals of the language',
    icon: 'fluent:javascript-20-filled'
  },
  {
    class: ' @apply bg-gradient-to-r from-green-200 to-white-200',
    title: 'Async JS',
    description: 'Welcome to callback hell',
    icon: 'carbon:ibm-cloud-internet-services'
  },
  {
    class: '@apply bg-gradient-to-r from-orange-300 to-yellow-300;',
    title: 'Modern JS Tooling',
    description: 'The developer toolbox',
    icon: 'entypo:tools'
  },
  {
    class: '@apply bg-gradient-to-r from-cyan-300 to-green-300;',
    title: 'Behind the scenes',
    description: 'Learn more about the magic behind ',
    icon: 'tabler:engine'
  },
  {
    class: '@apply bg-gradient-to-r from-yellow-300 to-pink-300;',
    title: 'Introduction to API',
    description: 'Basic rules and security',
    icon: 'mdi:code-json'
  },
  {
    class: '@apply bg-gradient-to-r from-blue-200 to-pink-200;',
    title: 'Http and communication',
    description: 'How internet works',
    icon: 'material-symbols:http-rounded'
  },
  {
    class: ' @apply bg-gradient-to-r from-red-300 to-purple-300;',
    title: 'JS Array methods',
    description: 'Deliver one-liners',
    icon: 'mdi:code-array'
  }
])
</script>

<style scoped>
/* .background1 {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
} */

/* .background2 {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
}

.background3 {
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
}

.background4 {
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
}

.background5 {
  background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);
}

.background6 {
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
}
.background7 {
  background-color: #faaca8;
  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
} */
</style>
