<template>
  <div class="mx-auto flex h-screen items-center justify-center">
    <div
      name="container"
      class="animate__animated animate__fadeIn mx-10 flex h-[fit] flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-200 p-5 shadow-md lg:w-[40rem]"
    >
      <p class="text-xl font-bold">Question</p>

      <textarea
        class="w-[100%] text-center"
        name=""
        id=""
        cols="5"
        rows="5"
        placeholder="add question"
        v-model="question"
      ></textarea>
      <p class="text-xl font-bold">Answer</p>
      <TinyMCE v-model="answer"></TinyMCE>

      <chooseResource v-model="selectedColletcion"></chooseResource>
      <base-button-light @click="submitFlashcard">Submit flashcard</base-button-light>
    </div>
  </div>
</template>

<script setup>
// vue
import { ref } from 'vue'
// utils
import { sendToastToUser } from '../../utils/sendToasterToUser'
// packages
import 'animate.css'
import TinyMCE from '../AdminDashboardCmp/TinyMCE.vue'
import { getTinymce } from '@tinymce/tinymce-vue/lib/cjs/main/ts/TinyMCE'

// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardStore = useFlashcardStore()
// components
import chooseResource from './chooseResource.vue'
//

const question = ref('')
const answer = ref('')
const selectedColletcion = ref('')

async function submitFlashcard() {
  const flashcard = {
    question: question.value,
    answer: answer.value,
    type: 'flashcard',
    collectionName: selectedColletcion.value
  }
  const response = await flashcardStore.addFlashcard(flashcard)
  sendToastToUser(response.status, 'Added!')
}

function clearEditor() {
  getTinymce().activeEditor.setContent('')
}
</script>

<style lang="scss" scoped></style>
