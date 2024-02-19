import { defineStore } from 'pinia'
import axios from 'axios'

export const useQuestionStore = defineStore('useQuestionStore', () => {
  async function addQuestion(question) {
    try {
      const response = await axios.post('/addQuestion', question)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  return { addQuestion }
})
