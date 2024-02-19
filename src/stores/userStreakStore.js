import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUserStreakStore = defineStore('useUserStreakStore', () => {
  // variables
  const numOfDaysOfUserStreak = ref('')
  const resourcesStartedNumber = ref('')
  const questionAnswered = ref('')
  // setters
  const setDaysStreak = async function () {
    const response = await axios.get('http://localhost:3000/api/v1/userStreak')
    const { daysStreak } = response.data
    numOfDaysOfUserStreak.value = daysStreak
  }
  const setUserResourcesStartedNumber = async function () {
    const response = await axios.get('http://localhost:3000/api/v1/resources')
    const { resourcesStartedLength } = response.data
    resourcesStartedNumber.value = resourcesStartedLength
  }
  const setUserQuestionAnswered = async function () {
    const response = await axios.get('http://localhost:3000/api/v1/collectionsCount')
    const { countOfDocumentsFromFinishedCollections } = response.data
    questionAnswered.value = countOfDocumentsFromFinishedCollections
  }

  const getUserStatisticsAndPersonalData = async function () {
    await setDaysStreak()
    await setUserResourcesStartedNumber()
    await setUserQuestionAnswered()
  }
  return {
    // variables
    numOfDaysOfUserStreak,
    resourcesStartedNumber,
    questionAnswered,

    // functions
    getUserStatisticsAndPersonalData
  }
})
