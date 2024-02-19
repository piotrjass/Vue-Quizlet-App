<template>
  <section>
    <p>This will be Editor JS</p>
    <div name="editor">
      <Editor
        :value="modelValue"
        @change="emitContent"
        api-key="y28ctkknyytw7emetk30cmnn25x31u9qbmdnrbqb10le6nea"
        :init="{
          plugins: 'lists link image table code help wordcount'
        }"
      />
      <button>show text</button>
      <p>results</p>
      <div v-html="text"></div>
    </div>
  </section>
</template>

<script setup>
// FIXME HIDE THE API KEY

import Editor from '@tinymce/tinymce-vue'
import { defineProps, defineEmits } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
function emitContent(event, editor) {
  emit('update:modelValue', editor.getContent())
}
</script>

<style lang="scss" scoped></style>
