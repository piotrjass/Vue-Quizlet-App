<template>
  <section class="animate__animated animate__fadeIn m-auto flex w-screen flex-col items-center">
    <choose-resource v-model="selectedColletcion" @change="loadQuestion"></choose-resource>
    <p class="m-2 text-sm font-semibold text-gray-400">Choose a question from collection</p>
    <div v-if="globalStore.databaseOptions.length > 0">
      <select
        name=""
        id=""
        class="tex-center mb-2 w-[15rem] rounded-3xl p-2 font-semibold"
        v-model="selectedQuestion"
        @change="findQuestion()"
      >
        <option
          v-for="question in flashcardStore.flashcardsCollection"
          :key="question.question"
          :value="question.question"
          v-html="question.question"
        ></option>
      </select>
    </div>
    <div class="mt-4 w-[70%] rounded-md border-2 border-gray-200">
      <p class="mx-auto p-3 text-center italic text-gray-400">original flashcard</p>
      <div v-html="originalQuestion" class="mt-4 p-2 text-center font-semibold text-black"></div>
      <div class="p-3 text-center text-gray-700" v-html="originalAnswer"></div>
    </div>
    <div class="mt-2 flex w-[70%] flex-col gap-2">
      <p class="mx-auto p-3 text-center italic text-gray-400">updated question</p>
      <textarea
        class="border-2 border-gray-200 p-3 text-center"
        v-model="updatedQuestion"
        name=""
        id=""
        cols="10"
        rows="3"
        :disabled="isReadyToUpdate"
      ></textarea>
      <p class="mx-auto p-3 text-center italic text-gray-400">updated answer</p>
      <textarea
        class="border-2 border-gray-200 p-3 text-center"
        v-model="updatedAnswer"
        name=""
        id=""
        cols="10"
        rows="5"
        :disabled="isReadyToUpdate"
      ></textarea>
    </div>
    <button
      class="mt-5 rounded-3xl border-2 border-gray-300 p-3 font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
    >
      <p v-if="!isReadyToUpdate" @click="isReadyToUpdate = !isReadyToUpdate" class="px-5">Submit</p>
      <p v-if="isReadyToUpdate" class="px-5" @click="updateFlashcard()">Update flashcard</p>
    </button>
  </section>
</template>

<script setup>
// vue
import { ref } from 'vue'
// packages
import 'animate.css'
// componens
import ChooseResource from './chooseResource.vue'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardStore = useFlashcardStore()
import { useAdminDashboardStore } from '../../stores/UIStores/adminDashboardStore'
const adminStore = useAdminDashboardStore()
import { useGlobalStore } from '../../stores/globalStore'
const globalStore = useGlobalStore()
//
import { sendToastToUser } from '../../utils/sendToasterToUser'
//
const selectedColletcion = ref('')
const selectedQuestion = ref('')
const originalQuestion = ref('')
const originalAnswer = ref('')
const updatedQuestion = ref('')
const updatedAnswer = ref('')
const questionID = ref('')
const isReadyToUpdate = ref(false)

function loadQuestion() {
  flashcardStore.setCurrentCollection(selectedColletcion.value)
  flashcardStore.getFlashcards()
}
async function findQuestion() {
  const question = {
    collectionName: selectedColletcion.value,
    question: selectedQuestion.value
  }
  try {
    const response = await flashcardStore.findFlashcardByQuestion(question)
    originalQuestion.value = response.data.foundQuestion.question
    originalAnswer.value = response.data.foundQuestion.answer
    questionID.value = response.data.foundQuestion._id
  } catch (error) {
    console.error(error)
  }
}

async function updateFlashcard() {
  const updatedFlashcard = {
    question: selectedQuestion.value,
    newQuestion: updatedQuestion.value,
    newAnswer: updatedAnswer.value,
    collectionName: selectedColletcion.value
  }
  try {
    const response = await flashcardStore.updateFlashcard(updatedFlashcard)
    sendToastToUser(response.status, 'Updated!')
  } catch (error) {
    console.error(error)
  }
  updatedQuestion.value = ''
  updatedAnswer.value = ''
}
</script>

<style lang="scss" scoped></style>
