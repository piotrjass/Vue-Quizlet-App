<template>
  <div class="flex flex-col border-2 border-red-500">
    <div
      class="flex flex-wrap items-center justify-center gap-5 p-5 text-center text-5xl font-semibold drop-shadow-lg"
    >
      Made with
      <Icon
        icon="pixelarticons:heart"
        width="60"
        height="60"
        class="font-bold text-red-500 drop-shadow-lg transition-all duration-300 hover:text-purple-500"
      />
      using
    </div>
    <div class="relative">
      <img
        class="absolute inset-0 z-[-1] h-full w-full object-cover object-center"
        src="../../assets/img/global/computer-bg-opacity-01.png"
        alt=""
      />
      <div class="relative border-4 border-green-500">
        <div class="flex h-[100%] w-[100%] flex-wrap justify-center gap-5 p-10 backdrop-blur-sm">
          <offer-section-card
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :web-architecture="card.webArchitecture"
            :image-u-r-l="card.imageURL"
            :template-color="card.templateColor"
            class="bg-[#f3f3f3]"
          ></offer-section-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OfferSectionCard from '../LandingPageCmps/OfferSectionCard.vue'
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'
const cards = reactive([
  {
    title: 'Vue',
    description:
      'Vue3 is a modern JavaScript framework for building user interfaces. Created and maintained by Javascript legend Evan You. It combines best of React and AngularJS.',
    webArchitecture: 'frontend',
    imageURL: 'vue.png',
    imageDesc: 'Vue logo',
    templateColor: 'bg-green-300'
  },
  {
    title: 'Node',
    webArchitecture: 'backend',
    description:
      'Node is server-side JavaScript runtime environment that allows developers to run JavaScript code on the server. The creator apologied for bring JS to the server, but it is fun to use.',
    imageURL: 'node.png',
    imageDesc: 'Node js logo',
    templateColor: 'bg-yellow-300'
  },
  {
    title: 'MongoDB',
    webArchitecture: 'database',
    description:
      'MongoDB is a missing piece in web dev. It fits perfectly with modern web technologies. To give credit when its due, Moongose does the work as well.',
    imageURL: 'mongodb.png',
    imageDesc: 'MongoDB leaf logo',
    templateColor: 'bg-blue-300'
  }
])
</script>

<style scoped></style>
