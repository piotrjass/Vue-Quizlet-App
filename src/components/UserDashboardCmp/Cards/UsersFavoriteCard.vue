<template>
  <div
    class="z-50 flex w-[25%] flex-col gap-5 rounded-md border-2 border-gray-400 bg-[#f3f3f3] p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:font-bold hover:shadow-2xl"
  >
    <div class="flex w-[100%] justify-between">
      <div
        :class="color"
        class="flex w-fit items-center justify-center rounded-3xl px-2 text-sm text-white"
      >
        {{ collection }}
      </div>
      <Icon
        icon="solar:heart-broken-bold"
        width="30"
        height="30"
        class="tranistion-all duration-300 hover:text-red-400"
        @click="$emit('delete-from-favorites')"
      />
    </div>
    <div class="flex grow flex-col gap-5 text-2xl font-thin text-black">
      <div class="text-wrap text-md text-center italic" v-html="question"></div>
      <div class="w-[100%] rounded-3xl border-2 border-gray-400"></div>
      <div class="text-wrap text-center text-sm" v-html="answer"></div>
    </div>
  </div>
</template>

<script setup>
// vue
import { onMounted } from 'vue'
// packages
import { Icon } from '@iconify/vue'
// stores
// import { useUserStore } from '../../../stores/userStore'
// const userStore = useUserStore()
// onMounted(() => userStore.getUsersFavoriteCards())

const props = defineProps({
  collection: String,
  question: String,
  answer: String,
  color: String
})
</script>

<style lang="scss" scoped></style>
