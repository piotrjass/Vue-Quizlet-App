<template>
  <div
    @click="customEvent"
    class="text-md my-3 flex h-fit w-fit cursor-pointer flex-nowrap items-center gap-5 whitespace-nowrap py-3 pl-5 pr-4 font-semibold drop-shadow-md transition-all duration-500 hover:scale-105"
  >
    <div name="box" class="h-[30px] w-[5px] rounded-xl bg-black"></div>
    <div>
      <Icon :icon="icon" width="30" height="30" />
    </div>
    <div>
      {{ name }}
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { defineEmits } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  icon: String,
  name: String
})
const emits = defineEmits('customEvent')
</script>

<style lang="scss" scoped></style>
