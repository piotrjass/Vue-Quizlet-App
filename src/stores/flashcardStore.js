import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

export const useFlashcardStore = defineStore(
  'useFlashcardStore',
  () => {
    const currentFlashCard = ref(0)
    const currentCollection = ref('')
    const counter = ref(1)
    const flashcardsCollection = ref([])
    const switchCard = ref(true)
    const showResults = ref(false)
    // test functions
    function switchFlashcard() {
      switchCard.value = !switchCard.value
    }
    function switchFlashcardToTitle() {
      switchCard.value = true
    }
    //
    const flashcardsLeft = computed(
      () => flashcardsCollection.value.length - currentFlashCard.value - 1
    )

    // mutations
    function increaseCurrentFlashCard() {
      if (currentFlashCard.value >= flashcardsCollection.value.length - 1) return
      currentFlashCard.value = currentFlashCard.value + 1
      switchCard.value = true
    }
    function decreaseCurrentFlashCard() {
      if (!currentFlashCard.value > 0) return
      currentFlashCard.value = currentFlashCard.value - 1
      switchCard.value = true
    }

    function setCurrentCollection(colllection) {
      currentCollection.value = colllection
    }

    async function addFlashcard(flashcard) {
      try {
        const response = await axios.post('/addFlashcard', flashcard)
        return response
      } catch (error) {
        console.error(error)
      }
    }

    async function addUsersFavoriteCardsToCurrentFlashcardCollection() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/userFavorites')
        const { favoriteCards } = response.data
        flashcardsCollection.value.push(...favoriteCards)
      } catch (error) {
        console.error(error)
      }
    }

    function clearData() {
      currentFlashCard.value = 0
      currentCollection.value = ''
      counter.value = 1
      flashcardsCollection.value = []
      switchCard.value = true
      showResults.value = false
    }

    // getters
    async function getFlashcards() {
      try {
        if (currentCollection.value === 'favoriteCards') {
          getUserFavoriteCards()
          return
        }
        const response = await axios.get(`/quiz/${currentCollection.value}`)
        flashcardsCollection.value = []
        flashcardsCollection.value.push(...response.data.simplifiedData)
      } catch (error) {
        console.error(error)
      }
    }

    async function getUserFavoriteCards() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/userFavCards')
        const { favoriteCards } = response.data
        flashcardsCollection.value = []
        flashcardsCollection.value.push(...favoriteCards)
      } catch (error) {
        console.error(error)
      }
    }

    async function findFlashcardByQuestion(question) {
      try {
        const response = await axios.post('/questions', question)
        return response
      } catch (error) {
        console.error(error)
      }
    }

    async function updateFlashcard(updatedFlashcard) {
      try {
        const response = await axios.patch('/quiz', updatedFlashcard)
        return response
      } catch (error) {
        console.error(error)
      }
    }

    async function deleteFlashcard(id, collectionName) {
      try {
        const response = await axios.delete(`/deleteFlashcard/${id}`, {
          data: {
            collectionName: collectionName
          }
        })
        return response
      } catch (error) {
        console.error(error)
      }
    }

    return {
      currentFlashCard,
      counter,
      showResults,
      //
      addFlashcard,
      increaseCurrentFlashCard,
      currentCollection,
      decreaseCurrentFlashCard,
      addUsersFavoriteCardsToCurrentFlashcardCollection,
      setCurrentCollection,
      //
      flashcardsLeft,
      getFlashcards,
      flashcardsCollection,
      switchCard,
      switchFlashcard,
      switchFlashcardToTitle,
      findFlashcardByQuestion,
      updateFlashcard,
      deleteFlashcard,
      clearData
    }
  },
  {
    persist: true
  }
)
