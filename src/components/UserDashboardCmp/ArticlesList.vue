<template>
  <div
    class="relative m-5 flex h-[70vh] w-[90%] flex-col items-center justify-center rounded-xl text-xl font-bold text-gray-400"
  >
    <!-- <img
      class="absolute inset-0 h-full w-full object-cover object-center"
      src="../../assets/img/global/computer-bg-opacity-01.png"
      alt=""
    /> -->
    <ul class="flex flex-col gap-5">
      <li v-for="(article, index) in articles" :key="article.title">
        <router-link :to="`/articles?id=${article.id}`">
          <article-card
            :title="article.title"
            :num="index + 1"
            :date="article.date"
            :tags="article.tags"
            :desc="article.desc"
          ></article-card
        ></router-link>
      </li>
    </ul>
  </div>
  <p class="">{{ comments }}</p>
</template>
<script setup>
import ArticleCard from '../UserDashboardCmp/Cards/ArticleCard.vue'
import { reactive, onMounted, ref } from 'vue'
// stores
import { useArticleStore } from '../../stores/articleStore'
const articleStore = useArticleStore()
// variables
const articles = ref([
  {
    title: '',
    desc: '',
    date: '',
    tags: [],
    id: ''
  }
])
//

async function getArticlesTitleAndDate() {
  const response = await articleStore.getArticlesTitleAndDesc()
  articles.value = response.map((article) => ({
    title: article.title,
    desc: article.desc,
    date: article.date,
    tags: article.tags,
    id: article.id
  }))
}

onMounted(() => {
  getArticlesTitleAndDate()
})
</script>
