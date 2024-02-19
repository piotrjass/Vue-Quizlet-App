<template>
  <div
    class="relative m-5 flex flex-col items-center justify-center rounded-xl text-xl font-bold text-gray-400 md:min-h-[80%]"
  >
    <div
      class="z-50 m-5 flex w-full flex-wrap justify-center gap-10 overflow-y-auto bg-transparent p-10"
    >
      <UsersFavoriteCard
        v-for="item in userStore.currentUserFavCards"
        :key="item.question"
        :collection="item.collection"
        :question="item.question"
        :answer="item.answer"
        :color="color"
        @delete-from-favorites="deleteFromFavorites(item.question, item.answer)"
      ></UsersFavoriteCard>
    </div>
    <RouterLink :to="`/gameview/favoriteCards`">
      <base-button-dark class="mx-auto" v-if="userStore.currentUserFavCards.length !== 0"
        >Start</base-button-dark
      >
    </RouterLink>
  </div>
</template>
<script setup>
// vue
import { onMounted, ref, computed } from 'vue'
// components
import UsersFavoriteCard from './Cards/UsersFavoriteCard.vue'
// store
import { useUserStore } from '../../stores/userStore'
// utils
import { sendToastToUser } from '../../utils/sendToasterToUser'

//
const userStore = useUserStore()

async function deleteFromFavorites(question, answer) {
  const response = await userStore.deleteFavCard(question, answer)
  sendToastToUser(response.status, 'Deleted!')
}

const color = computed(() => {
  const colors = [
    'bg-red-300',
    'bg-orange-300',
    'bg-amber-300',
    'bg-yellow-300',
    'bg-lime-300',
    'bg-green-300',
    'bg-emerald-300',
    'bg-teal-300',
    'bg-cyan-300',
    'bg-sky-300',
    'bg-blue-300',
    'bg-indigo-300',
    'bg-violet-300',
    'bg-purple-300',
    'bg-fuchsia-300'
  ]
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
})
// life-cycle hooks
onMounted(() => userStore.getUsersFavoriteCards())
</script>
