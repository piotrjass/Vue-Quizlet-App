<template>
  <div class="md:flex">
    <side-navbar class=""></side-navbar>
    <div class="mx-auto min-w-[80%] px-10 py-10">
      <hello-user-overview class=""></hello-user-overview>
      <Transition>
        <router-view></router-view>
      </Transition>
    </div>
  </div>
</template>

<script setup>
// vue
import { onMounted } from 'vue'
// components
import sideNavbar from '../components/UserDashboardCmp/sideNavbar.vue'
import HelloUserOverview from '../components/UserDashboardCmp/HelloUserOverview.vue'
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
