<template>
  <nav class="mx-auto flex h-20 w-[92%] items-center justify-between gap-4 bg-[#ffffff] p-2">
    <div>
      <span
        class="font-italic text-xl font-semibold text-[#5C5589] transition-all duration-300 hover:cursor-pointer hover:text-black"
        >DevWars</span
      >
    </div>
    <div
      class="absolute left-0 top-[9%] w-full p-2 backdrop-blur-lg transition-opacity duration-300 md:relative md:top-[0%] md:bg-transparent md:opacity-100"
      :class="isActive ? 'opacity-0' : 'opacity-100'"
    >
      <ul class="flex flex-col items-center justify-center gap-[4vw] text-xl md:flex-row">
        <li><FixedNavbarListItem listItem="Home"></FixedNavbarListItem></li>
        <li><FixedNavbarListItem listItem="Stack"></FixedNavbarListItem></li>
        <li><FixedNavbarListItem listItem="Explore"></FixedNavbarListItem></li>
      </ul>
    </div>
    <div class="flex flex-row items-center justify-center text-center">
      <span class="text-md flex w-[100px] items-center justify-center rounded-2xl text-center">
        <Icon
          class="h-fit w-fit cursor-pointer border-2 border-transparent p-2 transition-all duration-500 hover:scale-105 hover:rounded-full hover:border-2 hover:border-black hover:p-2 md:hidden"
          icon="mingcute:menu-fill"
          width="32"
          height="32"
          @click="toggleMenu"
        />
        <div class="cursor-pointer transition-all duration-300 hover:scale-105 md:hidden"></div>
        <Transition>
          <RouterLink to="/login">
            <button
              class="rounded-md border-2 border-teal-800 bg-teal-400 px-4 py-2 text-xl font-semibold text-white transition-all duration-300 hover:bg-teal-600"
            >
              <p class="whitespace-nowrap">Login in</p>
            </button></RouterLink
          ></Transition
        >
      </span>
    </div>
  </nav>
</template>

<script setup>
import FixedNavbarListItem from './FixedNavbarListItem.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const isActive = ref(true)
function toggleMenu() {
  isActive.value = !isActive.value
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
