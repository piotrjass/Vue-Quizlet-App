import { defineStore } from 'pinia'
import axios from 'axios'

export const useCommentsStore = defineStore('useCommentsStore', () => {
  const addComment = async function (text, articleReference) {
    const comment = {
      text,
      articleReference
    }
    const response = await axios.post('http://localhost:3000/api/v1/comment', comment)
    return response
  }

  return { addComment }
})
