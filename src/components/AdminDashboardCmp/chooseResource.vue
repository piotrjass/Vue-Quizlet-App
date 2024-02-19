<template>
  <section class="flex flex-col items-center">
    <p class="m-2 text-sm font-semibold text-gray-400">Choose a collection you want to edit</p>
    <div v-if="globalStore.databaseOptions.length > 0">
      <select
        name=""
        id=""
        class="mb-2 min-w-[10rem] rounded-3xl p-2 text-center font-semibold"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="updateAndGet(modelValue)"
      >
        <option v-for="db in globalStore.databaseOptions" :key="db.name" :value="db">
          {{ db }}
        </option>
      </select>
    </div>
    <div class="m-5" v-else>
      <rotate-loader :loading="loading" color="black" :size="size"></rotate-loader>
    </div>
  </section>
</template>

<script setup>
// vue
import { onMounted } from 'vue'
// packages
import 'animate.css'
import { RotateLoader } from 'vue-spinner/dist/vue-spinner.min.js'
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardStore = useFlashcardStore()
import { useGlobalStore } from '../../stores/globalStore'
const globalStore = useGlobalStore()
//

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

function updateAndGet(modelValue) {
  flashcardStore.setCurrentCollection(modelValue)
  flashcardStore.getFlashcards()
}

onMounted(() => globalStore.getFlashcardCollectionsNames())
</script>

<style lang="scss" scoped></style>
