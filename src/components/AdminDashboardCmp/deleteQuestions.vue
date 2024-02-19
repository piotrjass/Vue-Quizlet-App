<template>
  <section class="flex h-screen w-screen flex-col items-center">
    <div>
      <chooseResource @change="loadQuestion()" v-model="selectedCollection"></chooseResource>
    </div>

    <div
      class="flex w-[80%] flex-col items-center justify-center gap-5"
      :key="flashcardStore.currentCollection"
    >
      <div
        v-for="item in flashcardStore.flashcardsCollection"
        :key="item.question"
        class="w-full border-2 border-gray-300 text-center"
      >
        <div class="flex items-center px-5 py-2">
          <button
            class="transition-all duration-300 hover:scale-110"
            @click="findIQuestionsIDAndDelete(item)"
          >
            <Icon icon="typcn:delete" width="36" height="36" />
          </button>

          <div name="question" class="mx-auto font-semibold text-black">
            {{ item.question }}
          </div>
        </div>

        <div name="answer" class="p-3" v-html="item.answer"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// vue
import { ref } from 'vue'
// packages
import { Icon } from '@iconify/vue'
// components
import chooseResource from './chooseResource.vue'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardStore = useFlashcardStore()
import { useGlobalStore } from '../../stores/globalStore'
const globalStore = useGlobalStore()
//
const selectedCollection = ref('')
const deletedQuestionsID = ref('')

function loadQuestion() {
  flashcardStore.setCurrentCollection(selectedCollection.value)
  flashcardStore.getFlashcards()
}

async function findIQuestionsIDAndDelete(item) {
  const question = {
    collectionName: selectedCollection.value,
    question: item.question
  }
  try {
    const response = await flashcardStore.findFlashcardByQuestion(question)
    deletedQuestionsID.value = response.data.foundQuestion._id
    const delete_response = await flashcardStore.deleteFlashcard(
      deletedQuestionsID.value,
      selectedCollection.value
    )
  } catch (error) {
    console.error(error)
  }
}

globalStore.getFlashcardCollectionsNames()
</script>

<style lang="scss" scoped></style>
