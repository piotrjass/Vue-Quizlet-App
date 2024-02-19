import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUserFavCardsStore = defineStore('useUserFavCardsStore', () => {
  async function addCardToUsersFavoritesCards(item) {
    const { question, answer, collection } = item
    const response = await axios.patch('http://localhost:3000/api/v1/userFavCards', {
      question,
      answer,
      collection
    })
    return response
  }
  return { addCardToUsersFavoritesCards }
})
