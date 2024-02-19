<template>
  <div class="flex h-fit w-screen flex-col items-center justify-center gap-5 overflow-hidden">
    <article-title class="mt-[3%]"> {{ article.title }} </article-title>
    <article-author-and-data>
      <template #author> {{ article.author }} </template>
      <template #date>{{ article.date }} </template>
    </article-author-and-data>

    <article-tags :tags="tags"></article-tags>
    <article-desc> {{ article.desc }} </article-desc>
    <article-content v-html="article.content" class="w-[70%]"> </article-content>

    <article-comment-input v-model="msg"></article-comment-input>

    <base-button-light @click="addComments()"> Submit comment </base-button-light>
    <ul v-for="comment in comments.slice().reverse()" :key="comment.index">
      <li>
        <article-comment
          :text="comment.text"
          :date="comment.date"
          :author="comment.author[0].name"
          :email="comment.author[0].email"
        ></article-comment>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const id = route.query.id
const msg = ref('')
const tags = ref('')
const article = ref({
  title: '',
  date: '',
  author: '',
  tags: [],
  desc: '',
  content: ''
})
const comments = ref([])

import ArticleTitle from '../components/ArticleCmps/ArticleTitle.vue'
import ArticleDesc from '../components/ArticleCmps/ArticleDesc.vue'
import ArticleComment from '../components/ArticleCmps/ArticleComment.vue'
import ArticleContent from '../components/ArticleCmps/ArticleContent.vue'
import ArticleCommentInput from '../components/ArticleCmps/ArticleCommentInput.vue'
import ArticleAuthorAndData from '../components/ArticleCmps/ArticleAuthorAndData.vue'
import ArticleTags from '../components/ArticleCmps/ArticleTags.vue'
//
import { useArticleStore } from '../stores/articleStore'
import { useCommentsStore } from '../stores/commentsStore'
const articleStore = useArticleStore()
const commentsStore = useCommentsStore()
//
import { makeAToast } from '../utils/toaster'
//

async function addComments() {
  const response = await commentsStore.addComment(msg.value, id)
  msg.value = ''
  if (response.status !== 200) {
    makeAToast('Something went wrong', 'warning')
  }
  if (response.status === 200) {
    makeAToast('Something went wrong', 'warning')
  }
}

async function getArticle() {
  const response = await articleStore.getArticleByID(id)
  const articleRes = response.article
  article.value.title = articleRes.title
  article.value.date = articleRes.date
  article.value.author = articleRes.author[0].name
  article.value.tags = articleRes.tags
  tags.value = articleRes.tags
  article.value.desc = articleRes.desc
  article.value.content = articleRes.content
  comments.value = articleRes.commentsReference
}

onMounted(() => getArticle())
</script>
