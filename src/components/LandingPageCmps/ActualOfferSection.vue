<template>
  <div class="min:h-[60vh] h-fit w-screen p-10">
    <p
      class="mx-auto flex w-[50%] items-center justify-center p-5 text-center text-5xl font-semibold leading-relaxed"
    >
      <RoughNotation :is-show="true" type="underline">
        <span>Explore and get fluent in:</span>
      </RoughNotation>
    </p>
    <div>
      <ul
        class="gborder-2 mx-auto flex h-fit w-[80%] flex-wrap items-center justify-center gap-10 border-black p-10"
      >
        <li
          v-for="card in cards"
          :key="card.title"
          class="flex flex-grow items-center justify-center"
        >
          <ActualOfferCard
            class="flex-grow"
            :icon="card.icon"
            :title="card.title"
          ></ActualOfferCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ActualOfferCard from './ActualOfferCard.vue'
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'
// const a1 = annotate(document.querySelector('#e1'), { type: 'underline' })
// a1.show()
const cards = reactive([
  {
    title: 'Fundamentals',
    icon: 'fluent:javascript-16-regular',
    color: 'linear-gradient(-180deg, white, #fda3b2)'
  },
  {
    title: 'AsyncJS',
    icon: 'carbon:ibm-cloud-internet-services',
    color: 'linear-gradient(-180deg, white, #aaf0d1)'
  },
  {
    title: 'Modern JS Tooling',
    icon: 'entypo:tools',
    color: 'linear-gradient(-180deg, white, #b3fda3)'
  },
  {
    title: 'Behind the scenes',
    icon: 'tabler:engine',
    color: 'linear-gradient(-180deg, white, #a3fdf1)'
  },
  {
    title: 'Introduction to API',
    icon: 'mdi:code-json',
    color: 'linear-gradient(-180deg, white, #f1fda3)'
  },
  {
    title: 'Protocols and Web',
    icon: 'material-symbols:http-rounded',
    color: 'linear-gradient(-180deg, white, #a3e6fd)'
  },
  {
    title: 'JS Array methods',
    icon: 'mdi:code-array',
    color: 'linear-gradient(-180deg, white, #fda3c5)'
  },
  {
    title: 'Methods',
    icon: 'material-symbols:function',
    color: 'linear-gradient(-180deg, white, #fdc9a3)'
  },
  {
    title: 'Regex',
    icon: 'material-symbols:regular-expression',
    color: 'linear-gradient(-180deg, white, #fda3db)'
  },
  {
    title: 'Functional code',
    icon: 'fluent-mdl2:functional-manager-dashboard',
    color: 'linear-gradient(-180deg, white, #a3fde3)'
  },
  {
    title: 'OOP',
    icon: 'uim:object-ungroup',
    color: 'linear-gradient(-180deg, white, #fda3d0)'
  },
  {
    title: 'Algorithms',
    icon: 'mingcute:numbers-09-sort-ascending-fill',
    color: 'linear-gradient(-180deg, white, #d8fded)'
  },
  {
    title: 'Data structures',
    icon: 'carbon:data-structured',
    color: 'linear-gradient(-180deg, white, #a3e3fd)'
  },
  {
    title: 'Design patterns ',
    icon: 'ic:baseline-design-services',
    color: 'linear-gradient(-180deg, white, #fdd7a3)'
  }
])
</script>

<style lang="scss" scoped></style>
