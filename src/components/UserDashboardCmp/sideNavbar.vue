<template>
  <nav
    name="navbar container"
    class="flex h-fit flex-col gap-5 border-r-2 bg-white px-5 py-5 transition-all duration-300 md:h-screen lg:py-2"
    :class="{ 'lg:w-[10vw] ': collapsed }"
  >
    <NavbarLogoAndIcon
      @toggle-sidebar="toggleSidebar()"
      :internalCollapsed="collapsed"
    ></NavbarLogoAndIcon>
    <side-navbar-user-card
      v-if="userDataStore.currentUserName"
      :name="userDataStore.currentUserName"
      :email="userDataStore.currentUserEmail"
      :class="{ hidden: collapsed }"
    >
    </side-navbar-user-card>

    <div
      name="List of option"
      class="mx-auto w-fit flex-grow gap-3 py-5"
      :class="{ hidden: collapsed }"
    >
      <side-bar-list></side-bar-list>
    </div>
    <navbar-footer :class="{ hidden: collapsed }"></navbar-footer>
  </nav>
</template>

<script setup>
// vue related
import { ref, onMounted } from 'vue'
// components
import sideBarList from './SidebarItems/NavbarList.vue'
import sideNavbarUserCard from './Cards/sideNavbarUserCard.vue'
import NavbarBreakLine from './SidebarItems/NavbarBreakLine.vue'
import NavbarLogoAndIcon from './SidebarItems/NavbarLogoAndIcon.vue'
import NavbarFooter from './SidebarItems/NavbarFooter.vue'
// stores
import { useDashboardStore } from '../../stores/UIStores/dashboardStore'
const dashboardStore = useDashboardStore()
import { useUserStore } from '../../stores/userStore'
const userDataStore = useUserStore()
// functions
function toggleSidebar() {
  dashboardStore.toggleSidebar()
  collapsed.value = !dashboardStore.collapsed
}
const collapsed = ref(dashboardStore.collapsed)
// onMounted(() => {
//   userDataStore.setCurrentUserData()
// })
</script>

<style scoped></style>
