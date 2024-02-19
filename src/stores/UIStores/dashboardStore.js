import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDashboardStore = defineStore('useDashboardStore', () => {
  const collapsed = ref(false)
  function toggleSidebar() {
    collapsed.value = !collapsed.value
  }

  return { collapsed, toggleSidebar }
})
