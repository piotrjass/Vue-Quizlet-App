<template>
  <textarea
    v-model="model"
    required
    class="h-[10rem] w-[30rem] rounded-3xl border-2 bg-transparent p-5 text-xl shadow-lg transition-all duration-300 hover:border-blue-400 active:border-blue-400 md:w-[40rem] lg:w-[50rem] xl:w-[60rem]"
  />
</template>

<script setup>
import { defineModel } from 'vue'

const model = defineModel()
</script>
