<template>
  <div
    class="m-5 mx-auto flex h-[70vh] w-[90%] flex-col items-center justify-center rounded-xl text-xl font-bold text-gray-400"
  >
    <div
      v-if="userStore.currentUserFavCollections.value === ''"
      class="flex items-center justify-center gap-3 text-center"
    >
      <span>You have no favorites yet</span>
      <Icon icon="mdi:favorite-off-outline" width="36" height="36" />
    </div>
    <div
      name="card containers"
      class="relative flex h-full w-full flex-wrap items-center justify-center gap-5 p-5"
    >
      <ul v-for="item in userStore.getCurrentUserFavCollections()" :key="item.resourceName">
        <li class="flex">
          <RouterLink :to="`/gameview/${item.resourceCollection}`">
            <SmallResourceCard
              @click="setResource(item.resourceCollection)"
              class="text-black"
              :key="item.resourceName"
              :title="item.resourceName"
              @toggleFavorites="deleteFavCollection(item.resourceCollection)"
            ></SmallResourceCard>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// libraries
import { Icon } from '@iconify/vue'
// stores
import { useUserStore } from '../../stores/userStore'
const userStore = useUserStore()
// components
import SmallResourceCard from '../FlashcardGame/SmallResourceCard.vue'
// vue methods
import { onMounted } from 'vue'
// functions
async function deleteFavCollection(col) {
  const response = await userStore.deleteFavCollection(col)
}
// Life-cycle hooks

// onMounted(() => userStore.setUsersFavorites())
</script>

<style lang="scss" scoped></style>
