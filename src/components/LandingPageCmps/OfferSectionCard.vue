<template>
  <div
    name="card container"
    class="border-grey-900 flex min-w-[18rem] max-w-[20vw] flex-grow flex-col flex-wrap gap-3 rounded-3xl border-2 shadow-xl transition-all duration-500 hover:scale-105 hover:border-gray-300 hover:shadow-2xl"
  >
    <div name="image" class="flex h-[20vh] justify-center p-2 py-2 align-middle">
      <img :src="getImageUrl()" :alt="imageDesc" class="object-contain" />
    </div>
    <div
      name="web architecture"
      class="ml-3 w-fit rounded-3xl border-2 px-5 py-1 font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:text-white"
      :class="templateColor"
    >
      {{ webArchitecture }}
    </div>
    <div name="card title" class="flex-grow-1 text-center text-xl font-bold">
      {{ title }}
    </div>
    <div name="border" class="mx-auto h-1 w-[70%] rounded-3xl bg-gray-300"></div>
    <div
      name="card description"
      class="flex h-fit justify-center overflow-y-auto p-4 text-center align-middle font-semibold text-gray-500 transition-all duration-300 hover:text-black"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  imageURL: String,
  imageDesc: String,
  webArchitecture: String,
  templateColor: String
})

function getImageUrl() {
  // This path must be correct for your file
  return `src/assets/img/landing_page/${props.imageURL}`
}
</script>
