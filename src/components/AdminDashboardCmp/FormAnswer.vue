<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="flex w-[80%] items-center justify-center gap-2 rounded-3xl p-2">
      <textarea
        class="w-full"
        :placeholder="ansPlaceholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  ansPlaceholder: {
    type: String,
    default: 'default'
  },
  modelValue: {
    type: String
  }
})

defineEmits(['update:modelValue', 'update:checkboxValue'])
// eslint-disable-next-line no-unused-vars
</script>

<style scoped></style>
