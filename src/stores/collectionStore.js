import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const usecollectionStore = defineStore('usecollectionStore', () => {
  const currentCollection = ref('')
  const collectionName = ref('')
  const chosenResource = ref('')

  function setCollectionName(name) {
    collectionName.value = name
    getFlashcards()
  }
  function setCurrentCollection(name) {
    currentCollection.value = name
    getFlashcards()
  }

  async function addCollectionToFavorite(resourceName, resourceCollection) {
    const response = await axios.patch('http://localhost:3000/api/v1/addToFavoriteCollection', {
      resourceName: resourceName,
      resourceCollection: resourceCollection
    })
    return response
  }

  function clearData() {}

  return { addCollectionToFavorite }
})
