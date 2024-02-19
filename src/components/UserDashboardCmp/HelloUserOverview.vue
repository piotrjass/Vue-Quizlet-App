<template>
  <div name="overview container" class="mx-auto flex items-center justify-center">
    <div name="title and overview text" class="flex flex-col justify-start gap-2 p-2"></div>
    <div name="border-straight-line"></div>
    <div
      name="summary cards containers"
      class="flex h-fit w-fit flex-row flex-wrap items-center justify-center"
    >
      <ul v-for="option in computedOverviewOptions" :key="option.title">
        <overview-card
          :icon="option.icon"
          :number="option.number"
          :key="option.number"
          :title="option.title"
        ></overview-card>
      </ul>
    </div>
  </div>
</template>

<script setup>
// vue
import { ref, computed, onMounted } from 'vue'
// components
import OverviewCard from './Cards/OverviewCard.vue'
// stores
import { useUserStreakStore } from '../../stores/userStreakStore.js'
const userStreakStore = useUserStreakStore()
//
const computedOverviewOptions = computed(() => [
  {
    icon: 'fa6-solid:calendar-days',
    number: Number(userStreakStore.numOfDaysOfUserStreak),
    title: 'days streak'
  },
  {
    icon: 'streamline:interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard',
    number: Number(userStreakStore.resourcesStartedNumber),
    title: 'resources started'
  },
  {
    icon: 'ph:seal-question-fill',
    number: Number(userStreakStore.questionAnswered),
    title: 'question answered'
  }
])
onMounted(async () => {
  await userStreakStore.getUserStatisticsAndPersonalData()
})
</script>

<style scoped></style>
