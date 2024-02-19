<template>
  <div class="relative m-5 flex flex-col items-center justify-center">
    <!-- <img
      class="absolute inset-0 h-full w-full object-cover object-center"
      src="../../assets/img/global/computer-bg-opacity-01.png"
      alt=""
    /> -->
    <StartScreen></StartScreen>
  </div>
</template>

<script setup>
import StartScreen from '../FlashcardGame/StartScreen.vue'
import { Icon } from '@iconify/vue'
import ResoureCardsContainer from './Cards/ResoureCardsContainer.vue'
</script>

<style lang="scss" scoped></style>
