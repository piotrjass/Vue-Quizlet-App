<template>
  <nav
    name="navbar container"
    class="flex h-fit flex-col gap-5 border-r-2 bg-white px-5 py-5 transition-all duration-300 md:h-screen lg:py-2"
    :class="{ 'lg:w-[10vw] ': collapsed }"
  >
    <div
      name="logo and icon container"
      class="flex-end mt-4 flex h-[5%] items-center justify-end px-3"
      :class="{ 'justify-center': collapsed }"
    >
      <div name="toggle icon" class="cursor-pointer">
        <Icon icon="typcn:th-menu" width="30" height="30" @click="toggleSidebar" />
      </div>
    </div>
    <div :class="{ hidden: collapsed }">
      <adminCard
        title="Admin"
        class="text-black transition-all duration-300 hover:scale-105"
        icon="clarity:administrator-solid"
      ></adminCard>
    </div>
    <div
      class="mx-auto mt-5 w-[80%] border-2 border-gray-300 shadow-md"
      :class="{ hidden: collapsed }"
    ></div>
    <div
      name="List of option"
      class="mx-auto flex w-fit flex-col gap-5 py-5"
      :class="{ hidden: collapsed }"
    >
      <ul v-for="link in links" :key="link.name">
        <li>
          <RouterLink
            :to="`/admindashboard/${link.component}`"
            exact-active-class="text-teal-500 bg-teal-100"
            class="flex"
          >
            <sideNavbarLink :name="link.name" :icon="link.icon" class="flex-grow"></sideNavbarLink
          ></RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
//vue
import { ref, reactive } from 'vue'
// packages
import { Icon } from '@iconify/vue'
// components
import sideNavbarLink from './sideNavbarLink.vue'
import AdminCard from '../AdminDashboardCmp/Cards/AdminCard.vue'
// stores
import { useDashboardStore } from '../../stores/UIStores/dashboardStore'
const dashboardStore = useDashboardStore()
//
const collapsed = ref(dashboardStore.collapsed)
function toggleSidebar() {
  dashboardStore.toggleSidebar()
  collapsed.value = !dashboardStore.collapsed
}

const links = reactive([
  {
    name: 'Add Flashcard',
    icon: 'tabler:cards-filled',
    component: 'addFlashcard'
  },
  {
    name: 'Learn Mode',
    icon: 'dashicons:welcome-learn-more',
    component: 'StartScreen'
  },
  {
    name: 'Show questions',
    icon: 'bx:show-alt',
    component: 'ShowQuestion'
  },
  {
    name: 'Edit questions',
    icon: 'fluent:edit-16-filled',
    component: 'EditResources'
  },
  {
    name: 'Delete question',
    icon: 'mdi:eye-remove',
    component: 'deleteQuestions'
  },
  {
    name: 'Add question',
    icon: 'mingcute:question-fill',
    component: 'addQuestionSection'
  }
])
</script>

<style scoped></style>
