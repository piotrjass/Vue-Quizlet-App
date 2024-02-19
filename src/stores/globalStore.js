import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useGlobalStore = defineStore('useGlobalStore', () => {
  const databaseOptions = ref([])
  async function getFlashcardCollectionsNames() {
    try {
      const response = await axios.get('/questions')
      if (databaseOptions.value.length !== 0) return
      databaseOptions.value.push(...response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function addFlashcard(flashcard) {
    try {
      const response = await axios.post('/addFlashcard', flashcard)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    getFlashcardCollectionsNames,
    databaseOptions,
    addFlashcard
  }
})
