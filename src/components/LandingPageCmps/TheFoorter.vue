<template>
  <div class="flex h-[10rem] flex-col items-center justify-center bg-teal-400 p-5">
    <p class="my-3 font-semibold italic text-white">Created for learninig purposes</p>
    <div class="flex w-fit flex-row items-center justify-center gap-5 p-3">
      <p class="text-white">Code at:</p>
      <Icon icon="codicon:github" color="white" width="36" height="36" />
    </div>
    <a href="https://www.youtube.com/watch?v=Uo3cL4nrGOk&t=3s" target="_blank">
      <Icon icon="mdi:egg-easter" width="36" height="36" color="white" />
    </a>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
