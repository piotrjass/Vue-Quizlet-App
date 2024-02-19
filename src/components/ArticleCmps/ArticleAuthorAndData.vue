<template>
  <div class="flex justify-between gap-5 border-b-2 border-t-2 border-gray-100 p-5">
    <p class="font-semibold"><slot name="author"></slot></p>
    <p class="text-graccent-sky-500 italic"><slot name="date"></slot></p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
