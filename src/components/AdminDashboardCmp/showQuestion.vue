<template>
  <section class="mx-auto my-auto flex w-screen flex-col items-center justify-center rounded-2xl">
    <chooseResource v-model="selectedColletcion" @change="loadQuestion()"> </chooseResource>
    <div
      v-if="flashcardStore.flashcardsCollection.length === 0"
      class="flex h-[40rem] w-[80%] items-center justify-center gap-5 rounded-3xl border-2 border-gray-200"
    >
      <span class="text-3xl font-semibold text-gray-400">No choosen collection</span>
      <Icon
        class="text-gray-600"
        icon="healthicons:i-exam-multiple-choice"
        width="56"
        height="56"
      />
    </div>
    <div v-if="flashcardStore.flashcardsCollection.length !== 0" class="h-fit w-[80%] gap-5 p-5">
      <div v-for="item in flashcardStore.flashcardsCollection" :key="item.question">
        <showQuestionCard :question="item.question" :answer="item.answer"></showQuestionCard>
      </div>
    </div>
  </section>
</template>

<script setup>
// vue
import { ref, onMounted } from 'vue'
// packages
import { Icon } from '@iconify/vue'
// components
import showQuestionCard from '../AdminDashboardCmp/Cards/showQuestionCard.vue'
import chooseResource from './chooseResource.vue'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardStore = useFlashcardStore()
import { useAdminDashboardStore } from '../../stores/UIStores/adminDashboardStore'
const adminStore = useAdminDashboardStore()
//
const selectedColletcion = ref('')
function loadQuestion() {
  flashcardStore.setCurrentCollection(selectedColletcion.value)
  flashcardStore.getFlashcards()
}

// onMounted(() => adminStore.getFlashcardsCollectionsNames())
</script>

<style lang="scss" scoped></style>
