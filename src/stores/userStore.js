import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
import shuffle from 'lodash/shuffle'
import _ from 'lodash'
export const useUserStore = defineStore(
  'useUserStore',
  () => {
    // variables
    const currentUserName = ref('')
    const currentUserEmail = ref('')
    const currentUserRole = ref('')
    const currentUserFavCollections = ref([])
    const repeatCollection = ref([])
    const currentUserFavCards = ref([])
    const currentUserIsActive = ref('')
    /// functions
    const createUser = async function (newUser) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/createuser', newUser)
        return response.data.status
      } catch (error) {
        console.error(error)
      }
    }

    const loginUser = async function (user) {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/login', user)
        setToken(response.data.token)
        return response
      } catch (error) {
        console.error(error)
        return 'sth went wrong!'
      }
    }
    //
    function addToTheRepeatCollection(flashcard) {
      // flashcard will be repeated 3 times so i <=3
      for (let i = 0; i < 3; i++) {
        repeatCollection.value.push(flashcard)
      }
      shuffleRepeatCollection()
    }

    function clearRepeatCollection() {
      _.remove(repeatCollection.value)
    }

    function shuffleRepeatCollection() {
      repeatCollection.value = shuffle(repeatCollection.value)
    }

    // clear data
    function clearData() {
      currentUserName.value = ''
      currentUserEmail.value = ''
      repeatCollection.value = []
    }

    // setters

    const setToken = async function (token) {
      localStorage.removeItem('token')
      localStorage.setItem('token', token)
      if (token !== null) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const response = await getFullCredentials()
        const { name, email, role } = response.data
        setCurrentUserData(name, email, role)
      } else {
        alert('theres no token!')
      }
    }

    const setCurrentUserData = async function () {
      const response = await axios.post('http://localhost:3000/api/v1/getFullCredentials')
      const { name, email, role } = response.data
      currentUserName.value = name
      currentUserEmail.value = email
      currentUserRole.value = role
      // currentUserIsActive.value = ''
    }

    const setUsersFavorites = async function () {
      try {
        // it works
        const response = await axios.get('http://localhost:3000/api/v1/getUsersFavCollections')
        const { favourites } = response.data
        //
        currentUserFavCollections.value = Array.from(favourites)
      } catch (error) {
        console.error(error)
      }
    }

    const deleteFavCollection = async function (col) {
      const itemToDelete = { collectionName: col }
      const response = await axios.delete('http://localhost:3000/api/v1/deleteFavCollection', {
        data: itemToDelete
      })
      return response
    }

    const deleteFavCard = async function (question, answer) {
      const response = await axios.delete('http://localhost:3000/api/v1/userFavCards', {
        data: {
          question,
          answer
        }
      })

      return response
    }

    // getters

    function getCurrentUserFavCollections() {
      return currentUserFavCollections.value
    }

    const getFullCredentials = async function () {
      const response = await axios.post('http://localhost:3000/api/v1/getFullCredentials')
      return response
    }

    const getUsersFavoriteCards = async function () {
      const response = await axios.get('http://localhost:3000/api/v1/userFavCards')
      const favoriteCards = response.data.favoriteCards
      currentUserFavCards.value = favoriteCards
    }

    return {
      // variables
      currentUserName,
      currentUserEmail,
      currentUserFavCollections,
      currentUserFavCards,
      repeatCollection,
      // functions
      createUser,
      loginUser,
      addToTheRepeatCollection,
      // clear data
      clearRepeatCollection,
      clearData,
      // setters
      setUsersFavorites,
      setCurrentUserData,
      deleteFavCollection,
      deleteFavCard,
      // getters
      getFullCredentials,
      getCurrentUserFavCollections,
      getUsersFavoriteCards
      // setUserCredentials
    }
  },
  {
    persist: true
  }
)
