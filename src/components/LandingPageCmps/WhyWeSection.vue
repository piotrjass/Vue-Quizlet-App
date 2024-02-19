<template>
  <div class="bg1 flex h-[fit] w-screen flex-col items-center gap-10">
    <p class="mt-10 text-5xl font-semibold">
      <RoughNotation :is-show="true" type="highlight" color="#fef9c3">
        <span>Why we?</span>
      </RoughNotation>
    </p>
    <div class="flex w-[80%] flex-wrap items-center justify-center gap-5 px-10 py-5">
      <why-we-card
        v-for="card in cards"
        :key="card.title"
        :icon="card.icon"
        :title="card.title"
        :desc="card.desc"
      ></why-we-card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'
import WhyWeCard from '../LandingPageCmps/WhyWeCard.vue'
const cards = reactive([
  {
    icon: 'ci:window-terminal',
    title: 'Code examples',
    desc: 'We have code examples. Dive into the world of coding with confidence! Our platform is your gateway to a vast collection of meticulously crafted code examples'
  },
  {
    icon: 'cib:mozilla-firefox',
    title: 'Verified sources',
    desc: 'Our materials are based on verified sources. More than 90% are based on Mozilla MDN. When it comes to learning how to code, accuracy matters. '
  },
  {
    icon: 'fluent:people-community-add-20-filled',
    title: 'Commnity driven',
    desc: 'Learning to code is not just an individual pursuit. Its a collaborative adventure. Join our vibrant community of learners and educators who are passionate about code. '
  }
])
</script>

<style lang="scss" scoped>
.bg1 {
  background: rgb(204, 251, 241);
  background: linear-gradient(
    180deg,
    rgba(204, 251, 241, 0.3561799719887955) 0%,
    rgba(255, 255, 255, 1) 62%,
    rgba(204, 251, 241, 0.3617822128851541) 100%
  );
}
</style>
