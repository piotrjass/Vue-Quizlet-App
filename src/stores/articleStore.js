import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('useArticleStore', () => {
  // getters
  const getArticleByID = async function (articleId) {
    const response = await axios.get(`http://localhost:3000/api/v1/article/${articleId}`)
    return response.data
  }
  const getArticlesTitleAndDesc = async function () {
    const response = await axios.get(`http://localhost:3000/api/v1/articles`)
    return response.data.simplifiedArticles
  }

  return { getArticleByID, getArticlesTitleAndDesc }
})
