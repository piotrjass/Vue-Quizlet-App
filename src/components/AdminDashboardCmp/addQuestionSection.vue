<template>
  <section class="flex h-screen w-screen items-center justify-center">
    <div
      name="form container"
      class="animate__animated animate__fadeIn mx-auto flex h-fit w-[70%] flex-col items-center justify-center rounded-3xl border-2 border-gray-300 shadow-xl"
    >
      <div name="question" class="flex w-[80%] flex-col items-center justify-center gap-3 p-3">
        <p class="text-2xl font-semibold">Question</p>
        <textarea
          autofocus
          class="w-[80%]"
          placeholder="Add a question"
          v-model="question"
        ></textarea>
      </div>
      <div name="border" class="mx-auto w-[50%] rounded-3xl border-2 border-gray-400"></div>
      <div name="answers" class="flex w-[80%] flex-col gap-2 p-3">
        <FormAnswer
          ansPlaceholder="Answer A"
          v-model:modelValue="answers[0]"
          :class="{
            'font-bold text-green-500': correctAnswer === 'Answer A'
          }"
        ></FormAnswer>
        <FormAnswer
          ansPlaceholder="Answer B"
          v-model:modelValue="answers[1]"
          :class="{
            'font-bold text-green-500': correctAnswer === 'Answer B'
          }"
        ></FormAnswer>
        <FormAnswer
          ansPlaceholder="Answer C"
          v-model:modelValue="answers[2]"
          :class="{
            'font-bold text-green-500': correctAnswer === 'Answer C'
          }"
        ></FormAnswer>
        <FormAnswer
          ansPlaceholder="Answer D"
          v-model:modelValue="answers[3]"
          :class="{
            'font-bold text-green-500': correctAnswer === 'Answer D'
          }"
        ></FormAnswer>
        <FormAnswer
          ansPlaceholder="Answer E"
          v-model:modelValue="answers[4]"
          :class="{
            'font-bold text-green-500': correctAnswer === 'Answer E'
          }"
        ></FormAnswer>

        <p>Select correct answer</p>
        <select v-model="correctAnswer" @change="handleSelectChange">
          <option value="Answer A">Answer A</option>
          <option value="Answer B">Answer B</option>
          <option value="Answer C">Answer C</option>
          <option value="Answer D">Answer D</option>
          <option value="Answer E">Answer E</option>
        </select>
        <p>Select a dataset</p>
        <select v-model="selectedColletcion">
          <option v-for="db in databaseOptions" :key="db.name" :value="db">
            {{ db }}
          </option>
        </select>

        <button
          class="mx-auto mt-2 w-fit rounded-3xl border-2 border-black p-3 text-xl font-semibold transition-all duration-500 hover:scale-105 hover:bg-black hover:text-white"
          @click="getFormData()"
        >
          Submit question
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// vue
import { ref, onMounted } from 'vue'
// packages
import 'animate.css'
//components
import FormAnswer from '../AdminDashboardCmp/FormAnswer.vue'
// stores
import { useAdminDashboardStore } from '../../stores/UIStores/adminDashboardStore'
const adminDashboardStore = useAdminDashboardStore()
import { useQuestionStore } from '../../stores/questionStore'
const questionStore = useQuestionStore()
//
const question = ref('')
const answers = []
const correctAnswer = ref('')
const correctAnswerText = ref('')
const selectedColletcion = ref('')

// onMounted(() => {
//
//   adminDashboardStore.getFlashcardsCollectionsNames()
// })

function getFormData() {
  updateCorrectAnswerText()
  const questionFull = {
    title: question.value,
    answers: answers,
    correctAnswer: correctAnswerText.value,
    type: 'question',
    collection: selectedColletcion.value
  }
  questionStore.addQuestion(questionFull)
}

function updateCorrectAnswerText() {
  switch (correctAnswer.value) {
    case 'Answer A':
      correctAnswerText.value = answers[0]
      break
    case 'Answer B':
      correctAnswerText.value = answers[1]
      break
    case 'Answer C':
      correctAnswerText.value = answers[2]
      break
    case 'Answer D':
      correctAnswerText.value = answers[3]
      break
    case 'Answer E':
      correctAnswerText.value = answers[4]
      break
    default:
      correctAnswerText.value = ''
      break
  }
}
</script>
