<template>
  <!-- <prism language="javascript"> {{ code }}</prism> -->
  <prism language="javascript" v-html="code"> </prism>
</template>

<script setup>
import { ref } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import Prism from 'vue-prism-component'
const props = defineProps(['code'])
// const code = ref('const a = b')
</script>

<style lang="scss" scoped></style>
