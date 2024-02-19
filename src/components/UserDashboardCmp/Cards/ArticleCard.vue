<template>
  <div
    class="duration-400 mx-auto w-[80%] rounded-xl border-4 border-transparent shadow-lg backdrop-blur-md transition-all hover:border-4 hover:border-black hover:text-black"
  >
    <div name="index and title" class="flex items-center justify-between gap-5 p-5">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full border-4 border-gray-400 p-5"
      >
        {{ num }}
      </div>
      <div class="text-2xl text-black">{{ title }}</div>
      <div class="p-5 font-normal">{{ date }}</div>
    </div>
    <div name="tags" class="flex gap-3 p-3">
      <ArticleCardTagsVue
        v-for="tag in tags"
        :key="tag.title"
        :tag="tag.title"
        :color="tag.color"
      ></ArticleCardTagsVue>
    </div>
    <div name="description" class="p-5">{{ desc }}</div>
  </div>
</template>

<script setup>
import ArticleCardTagsVue from './ArticleCardTags.vue'
const props = defineProps({
  num: Number,
  title: String,
  date: String,
  tags: Array,
  desc: String
})
</script>

<style lang="scss" scoped></style>
