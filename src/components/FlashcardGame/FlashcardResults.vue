<template>
  <section
    class="flex h-fit min-h-[30rem] w-[40rem] overflow-hidden rounded-3xl bg-[#f3f3f3] shadow-2xl"
  >
    <div
      name="left"
      class="bg1 flex w-[50%] flex-col items-center justify-center gap-5 rounded-3xl text-white shadow-lg"
    >
      <p class="italic">Flashcards completed</p>

      <div
        name="circle"
        class="dot flex flex-col items-center justify-center rounded-full p-20 shadow-xl backdrop-blur-md"
      >
        <p class="text-5xl font-bold">{{ flashcardsStore.flashcardsCollection.length }}</p>
      </div>
      <span>
        <p class="mt-5 text-3xl font-semibold">Congratulations!</p>
      </span>
    </div>
    <div name="right" class="flex w-[50%] flex-col items-center justify-center gap-5 rounded-3xl">
      <p class="italic">More are waiting</p>
      <div
        name="circle"
        class="flex flex-col items-center justify-center rounded-full p-20 shadow-xl backdrop-blur-md"
      >
        <p class="text-5xl font-bold">{{ userStore.repeatCollection.length }}</p>
      </div>
      <span>
        <RouterLink
          to="/gameview/review"
          v-if="userStore.repeatCollection && userStore.repeatCollection.length > 1"
        >
          <button>
            <p class="mt-5 text-3xl font-semibold underline" @click="startReview()">Continue!</p>
          </button></RouterLink
        >
        <RouterLink to="/hellouser" v-else>
          <button>
            <p class="mt-5 text-3xl font-semibold underline">Go back!</p>
          </button></RouterLink
        >
      </span>
    </div>
  </section>
</template>

<script setup>
// stores
import { useFlashcardStore } from '../../stores/flashcardStore'
const flashcardsStore = useFlashcardStore()
import { useUserStore } from '../../stores/userStore'
const userStore = useUserStore()
//
function startReview() {
  flashcardsStore.showResults = false
  flashcardsStore.currentCollection = 'Review'
  flashcardsStore.flashcardsCollection = [...userStore.repeatCollection]
}
</script>

<style lang="scss" scoped>
.bg1 {
  background-image: linear-gradient(
    215deg,
    hsl(252deg 100% 67%) 0%,
    hsl(251deg 97% 65%) 0%,
    hsl(250deg 94% 64%) 0%,
    hsl(249deg 91% 62%) 2%,
    hsl(248deg 89% 61%) 13%,
    hsl(247deg 87% 59%) 71%,
    hsl(245deg 85% 57%) 83%,
    hsl(243deg 83% 56%) 92%,
    hsl(241deg 81% 54%) 100%
  );
}

.dot {
  background-image: linear-gradient(
    180deg,
    hsl(255deg 72% 45%) 0%,
    hsl(254deg 70% 47%) 11%,
    hsl(254deg 68% 49%) 22%,
    hsl(253deg 67% 50%) 33%,
    hsl(252deg 70% 52%) 44%,
    hsl(251deg 73% 53%) 56%,
    hsl(250deg 76% 55%) 67%,
    hsl(249deg 80% 56%) 78%,
    hsl(248deg 83% 58%) 89%,
    hsl(247deg 87% 60%) 100%
  );
}
</style>
