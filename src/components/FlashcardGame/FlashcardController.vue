<template>
  <div
    class="flex max-w-[15rem] items-center justify-center gap-10 rounded-full border-2 border-gray-400 px-5 py-2 shadow-md"
  >
    <button @click="goLeft()">
      <Icon icon="mingcute:arrow-left-fill" width="30" height="30" />
    </button>
    <button
      @click="switchFlashcard()"
      class="text-lg font-bold text-gray-500 transition-all duration-300 hover:text-black"
    >
      <p v-if="flashcardsStore.flashcardsLeft !== 0">Turn</p>
      <p
        v-else-if="
          flashcardsStore.flashcardsLeft === 0 && flashcardsStore.currentCollection !== 'Review'
        "
        @click="goToReview()"
      >
        Finish
      </p>
      <p
        @click="goToHelloUser()"
        v-if="
          flashcardsStore.flashcardsLeft === 0 && flashcardsStore.currentCollection === 'Review'
        "
      >
        Go back
      </p>
    </button>
    <button @click="goRight()">
      <Icon icon="mingcute:arrow-right-fill" width="30" height="30" />
    </button>
  </div>
</template>

<script setup>
// vue
import { onMounted, onUnmounted } from 'vue'
// router
import router from '../../router'
// packages
import { Icon } from '@iconify/vue'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardsStore = useFlashcardStore()
//
function goToHelloUser() {
  router.push('/hellouser')
}
function goToReview() {
  flashcardsStore.showResults = true
  flashcardsStore.currentFlashCard = 0
}
function goLeft() {
  flashcardsStore.decreaseCurrentFlashCard()
  flashcardsStore.switchFlashcardToTitle()
}
function goRight() {
  flashcardsStore.increaseCurrentFlashCard()
  flashcardsStore.switchFlashcardToTitle()
}
function switchFlashcard() {
  flashcardsStore.switchFlashcard()
}
function handleKeydown(e) {
  switch (e.keyCode) {
    case 32:
      switchFlashcard()
      break
    case 37:
      goLeft()
      break
    case 39:
      goRight()
      break
  }
}
onMounted(() => window.addEventListener('keydown', handleKeydown, null))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style lang="scss" scoped></style>
