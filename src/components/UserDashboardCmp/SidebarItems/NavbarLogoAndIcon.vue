<template>
  <div name="logo and icon container" class="mt-4 flex h-[5%] items-center justify-between px-3">
    <div name="logo" :class="{ hidden: internalCollapsed }"></div>
    <div name="toggle icon" class="cursor-pointer">
      <Icon icon="typcn:th-menu" width="30" height="30" @click="$emit('toggleSidebar')" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const props = defineProps(['internalCollapsed'])
</script>

<style lang="scss" scoped></style>
