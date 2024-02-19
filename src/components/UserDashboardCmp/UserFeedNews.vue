<template>
  <div
    class="tranisition-all hpver:m-7 mb-5 flex w-[95%] gap-5 rounded-xl border-2 border-gray-200 px-10 py-10 shadow-md backdrop-blur-lg duration-300 hover:scale-105"
  >
    <div class="lex-grow rounded-xl border-4 border-black"></div>
    <div class="">
      <div name="title" class="text-3xl font-semibold">{{ title }}</div>
      <div name="author and date" class="my-5 flex w-[100%] justify-between gap-5 px-5">
        <div name="author" class="flex items-center justify-center gap-5">
          <div class="h-10 w-10 overflow-hidden rounded-full">
            <!-- <img
              class="h-full w-full border-2 border-black object-cover"
              src="../../assets/img/userFeed/dev.PNG"
              alt=""
            /> -->
            <!-- <img class="h-full w-full border-2 border-black object-cover" :src="dev" alt="" /> -->
            <!-- <img
              class="h-full w-full border-2 border-black object-cover"
              src="../assets/img/landing_page/LearningPlatform.jpg"
              alt=""
            /> -->
          </div>
          <span class="font-serif italic text-gray-400">{{ author }}</span>
        </div>
        <div name="date" class="itali font-serif text-sm text-gray-400">{{ date }}</div>
      </div>
      <div name="text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  author: String,
  date: Date,
  text: String
})
</script>

<style lang="scss" scoped></style>
