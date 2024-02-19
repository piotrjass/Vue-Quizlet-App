<template>
  <section class="flex w-fit flex-col items-center justify-center py-5 shadow-md">
    <div class="justify-centerrounded-3xl justify-center0 flex w-[80%] flex-wrap items-center p-5">
      <SmallResourceCard
        v-for="res in resources"
        :key="res.resourceName"
        :title="res.resourceName"
        :icon="res.icon"
        class="flex-grow"
        @click="setResource(res.collection)"
        @toggle-favorites="toggleFavs(res.resourceName, res.collection)"
      ></SmallResourceCard>
    </div>
    <div class="z-50 flex flex-col items-center justify-center">
      <div class="mt-5 flex flex-col items-center justify-center text-lg font-semibold">
        <p class="text-gray-400">Chosen resource:</p>
        <p class="min-h-[2rem] rounded-3xl p-3 text-2xl backdrop-blur-lg">
          {{ chosenCollection }}
        </p>
      </div>

      <RouterLink :to="`/gameview/${chosenCollection}`">
        <button
          @click="flashcardStore.setRes(chosenCollection)"
          class="z-50 mt-10 rounded-full border-2 border-black bg-[#f3f3f3] px-10 py-2 text-2xl font-bold transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
        >
          Start
        </button></RouterLink
      >
    </div>
  </section>
</template>

<script setup>
// vue
import { reactive, ref } from 'vue'
// packages
import 'animate.css'
// components
import SmallResourceCard from './SmallResourceCard.vue'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardStore = useFlashcardStore()
import { usecollectionStore } from '../../stores/collectionStore'
const collectionStore = usecollectionStore()
//
import { sendToastToUser } from '../../utils/sendToasterToUser'
// variables
const chosenCollection = ref('')
// functions

function setResource(res) {
  chosenCollection.value = res
  flashcardStore.currentCollection = res
}

async function toggleFavs(resourceName, resourceCollection) {
  const response = await collectionStore.addCollectionToFavorite(resourceName, resourceCollection)
  sendToastToUser(response.status, 'Added!')
}
// Resources that user can choose
const resources = reactive([
  {
    resourceName: 'AsyncJS',
    icon: 'carbon:ibm-cloud-internet-services',
    collection: 'AsyncJS'
  },
  {
    resourceName: 'Fundamentals',
    icon: 'fluent:javascript-20-filled',
    collection: 'Fundamentals'
  },
  {
    resourceName: 'Modern JS Tooling',
    icon: 'entypo:tools',
    collection: 'ModernJSTooling'
  },
  {
    resourceName: 'Behind the scenes',
    icon: 'tabler:engine',
    collection: 'BehindTheScenes'
  },
  {
    resourceName: 'Functions',
    icon: 'carbon:function',
    collection: 'Functions'
  },
  {
    resourceName: 'Introduction to API',
    icon: 'mdi:code-json',
    collection: 'IntroductionToAPI'
  },
  {
    resourceName: 'Protocols',
    icon: 'material-symbols:http-rounded',
    collection: 'Protocols'
  },
  {
    resourceName: 'Security',
    icon: 'mdi:security-lock-outline',
    collection: 'Security'
  },
  {
    resourceName: 'JS Array methods',
    icon: 'mdi:code-array',
    collection: 'ArrayMethods'
  },
  {
    resourceName: 'JS Methods',
    icon: 'material-symbols:function',
    collection: 'JSMethods'
  },
  {
    resourceName: 'Regex',
    icon: 'material-symbols:regular-expression',
    collection: 'Regex'
  },
  {
    resourceName: 'Functional programming',
    icon: 'fluent-mdl2:functional-manager-dashboard',
    collection: 'FunctionalProgramming'
  },
  {
    resourceName: 'OOP',
    icon: 'uim:object-ungroup',
    collection: 'OOP'
  },
  {
    resourceName: 'Algorithms ',
    icon: 'mingcute:numbers-09-sort-ascending-fill',
    collection: 'Algorithms'
  },
  {
    resourceName: 'Data structures ',
    icon: 'carbon:data-structured',
    collection: 'DataStructures'
  },
  {
    resourceName: 'Design patterns ',
    icon: 'ic:baseline-design-services',
    collection: 'DesingPatterns'
  },
  {
    resourceName: 'Node',
    icon: 'nonicons:node-16',
    collection: 'Node'
  },
  {
    resourceName: 'MongoDB',
    icon: 'devicon-plain:mongodb-wordmark',
    collection: 'MongoDB'
  }
])
</script>

<style scoped></style>
