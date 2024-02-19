<template>
  <div class="relative flex h-screen w-screen items-center justify-center">
    <div
      class="absolute inset-0 bg-[url('../assets/img/global/computer-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-5"
    ></div>
    <div v-if="flashcardsStore.showResults">
      <FlashcardResults class="relative z-50"></FlashcardResults>
      <!-- <p>{{ flashcardsStore.startRepeatSet }}</p> -->
    </div>
    <TheFlashcard
      v-else
      class="z-50"
      @add-to-favorites="addToFavorites"
      @repeat-the-flashcard="reapeatTheFlashcard"
    ></TheFlashcard>
  </div>
</template>

<script setup>
import TheFlashcard from '../components/FlashcardGame/TheFlashcard.vue'
import FlashcardResults from '../components/FlashcardGame/FlashcardResults.vue'
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useFlashcardStore } from '../stores/flashcardStore'
import { sendToastToUser } from '../utils/sendToasterToUser'
// toaster
const flashcardsStore = useFlashcardStore()
import { useUserStore } from '../stores/userStore'
const userStore = useUserStore()
import { useUserFavCardsStore } from '../stores/userFavCardsStore'
const userFavCardStore = useUserFavCardsStore()
// router
const route = useRoute()
const collection = route.params.collectionName
async function addToFavorites() {
  const item = {
    question: flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].question,
    answer: flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].answer,
    collection: flashcardsStore.currentCollection
  }
  const response = await userFavCardStore.addCardToUsersFavoritesCards(item)
  sendToastToUser(response.status, 'Added!')
  return response
}

function reapeatTheFlashcard() {
  const flashcard = {
    question: flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].question,
    answer: flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].answer
  }
  userStore.addToTheRepeatCollection(flashcard)
  sendToastToUser(200, 'Added!')
}

watch(() => {
  if (flashcardsStore.currentCollection === '') {
    flashcardsStore.setCurrentCollection(collection)
  }
})

onMounted(() => {
  if (collection === 'favoriteCards') {
    flashcardsStore.currentCollection = 'favoriteCards'
  }
  flashcardsStore.getFlashcards()
  userStore.clearRepeatCollection()
})
onBeforeUnmount(() => {
  userStore.clearRepeatCollection()
  flashcardsStore.clearData()
})
</script>

<style lang="scss" scoped></style>
