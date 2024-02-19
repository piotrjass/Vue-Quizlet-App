<template>
  <div
    class="mb-5 h-fit w-[30rem] rounded-lg border-2 border-teal-200 p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:border-teal-400 hover:shadow-xl md:w-[40rem] lg:w-[50rem] xl:w-[60rem]"
  >
    <div class="flex p-5">
      <div class="flex">
        <gradient-label
          ><p>{{ author }}</p></gradient-label
        >
      </div>
    </div>
    <p class="p-5 font-semibold" v-html="text"></p>
    <p class="p-5 text-gray-400">{{ date }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  author: String,
  email: String,
  date: String
})
</script>

<style lang="scss" scoped></style>
