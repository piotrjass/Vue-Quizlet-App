<template>
  <div class="md:flex">
    <sideNavbar></sideNavbar>
    <Transition>
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script setup>
import sideNavbar from '../components/AdminDashboardCmp/sideNavbar.vue'
// import { useRoute } from 'vue-router'
// import { watch } from 'vue'
// const route = useRoute()
// watch(
//   () => route.params.collectionName,
//   (component) => {
//     alert(component)
//   }
// )
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
