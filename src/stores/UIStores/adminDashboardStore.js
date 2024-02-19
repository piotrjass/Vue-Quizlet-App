import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdminDashboardStore = defineStore('useAdminDashboardStore', () => {
  const databaseOptions = []

  // async function getFlashcardsCollectionsNames() {
  //   console.log('getting names...')
  //   try {
  //     const response = await axios.get('/questions')
  //     databaseOptions.push(...response.data.data)
  //     console.log(databaseOptions)
  //   } catch (error) {
  //     console.log('getting names not successful')
  //   }
  // }

  return {
    // getFlashcardsCollectionsNames,
    databaseOptions
  }
})
