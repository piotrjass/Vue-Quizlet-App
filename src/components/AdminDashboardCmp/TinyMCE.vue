<template>
  <div>
    <div name="editor">
      <Editor
        :value="modelValue"
        @change="emitContent"
        :api-key="key"
        :init="{
          plugins: 'lists link image table code help wordcount'
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const key = ref(import.meta.env.VITE_TINYMCE_API_KEY)

import Editor from '@tinymce/tinymce-vue'
import { defineProps, defineEmits } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
function emitContent(event, editor) {
  emit('update:modelValue', editor.getContent())
}
</script>

<style lang="scss" scoped></style>
