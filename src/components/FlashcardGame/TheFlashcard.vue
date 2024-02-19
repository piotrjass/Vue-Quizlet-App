<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex gap-4">
      <div
        class="flex h-fit min-h-[30rem] w-[30rem] flex-col items-center rounded-3xl border-2 border-gray-200 bg-[#f3f3f3] shadow-lg transition-all duration-300 hover:shadow-xl lg:h-[45rem] lg:w-[60rem]"
      >
        <div
          name="collection name"
          class="m-3 flex flex-wrap rounded-full bg-black px-3 text-xl text-white transition-all duration-300"
        >
          {{ flashcardsStore.currentCollection }}
        </div>

        <div class="m-3 flex w-[100%] justify-between px-5 font-semibold text-gray-500">
          <div name="current flashcard" class="text-3xl">
            {{ flashcardsStore.currentFlashCard + 1 }}
          </div>
          <div name="flashcard left">
            {{ flashcardsStore.flashcardsLeft }}
            left
          </div>
        </div>

        <div
          name="the answer and question container"
          class="flex h-fit min-h-[80%] w-[100%] items-center justify-center text-center text-gray-600"
          v-if="flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard]"
          :key="flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard]"
        >
          <div>
            <p
              v-if="flashcardsStore.switchCard"
              class="animate__animated animate__fadeIn p-5 text-3xl font-semibold"
            >
              {{ flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].question }}
            </p>
            <div v-else class="animate__animated animate__fadeIn">
              <p
                class="h-fit p-5 text-2xl"
                v-html="
                  flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].answer
                "
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <Icon
          class="transisition-all mt-5 text-gray-400 duration-300 hover:text-yellow-500"
          icon="iconamoon:star-bold"
          width="40"
          height="40"
          @click="$emit('add-to-favorites')"
        />
        <Icon
          class="transisition-all mt-5 text-gray-400 duration-300 hover:text-yellow-500"
          icon="mingcute:repeat-one-fill"
          width="40"
          height="40"
          @click="$emit('repeat-the-flashcard')"
        />
      </div>
    </div>
    <FlashcardController class="mt-5 bg-[#f3f3f3]"> </FlashcardController>
  </div>
</template>

<script setup>
// vue
import { watch, ref, watchEffect, computed } from 'vue'
// router
import { useRoute } from 'vue-router'

const route = useRoute()
// packages
import { Icon } from '@iconify/vue'
import 'animate.css'
// components
import FlashcardController from './FlashcardController.vue'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardsStore = useFlashcardStore()
//
const updatedText = computed(() => {
  const text = flashcardsStore.flashcardsCollection[flashcardsStore.currentFlashCard].answer || ''
  return text.replace(/<br>/g, '\n')
})
const strippedText = computed(() => {
  return updatedText.value.replace(/<\/?[^>]+(>|$)|&nbsp;/g, '')
})

//
watch(
  () => route.params.collectionName,
  (collectionName, previousCollectionName) => {}
)

watch(
  () => flashcardsStore.currentFlashCard,
  () => {
    updatedText.value
  }
)
</script>

<style lang="scss" scoped></style>
