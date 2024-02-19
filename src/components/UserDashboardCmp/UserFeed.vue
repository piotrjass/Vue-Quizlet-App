<template>
  <div class="flex flex-col gap-5 rounded-xl text-xl md:min-h-[80%]">
    <h1
      class="mx-auto mb-5 mt-5 flex flex-wrap items-center justify-center font-serif text-5xl italic drop-shadow-md"
    >
      <!-- news<span class="font-extrabold">&</span>announcements -->
      <RoughNotation :is-show="true" type="highlight" color="#ccfbf1" class="px-5 py-2">
        <span>News</span>
      </RoughNotation>
    </h1>

    <div class="relative flex flex-col items-center justify-center gap-3 p-5 text-center">
      <!-- <img
        class="absolute inset-0 h-full w-full object-cover object-center"
        src="../../assets/img/global/computer-bg-opacity-01.png"
        alt=""
      /> -->
      <UserFeedNews
        v-for="record in news"
        :key="record.title"
        :title="record.title"
        :author="record.author"
        :date="record.date"
        :text="record.text"
      ></UserFeedNews>
    </div>
  </div>
</template>
<script setup>
import UserFeedNews from './UserFeedNews.vue'
import { ref, onMounted } from 'vue'
//
import { useUserStreakStore } from '../../stores/userStreakStore'
const userStreakStore = useUserStreakStore()
//
const news = ref([
  {
    title: 'Update of the resources!',
    author: 'Dev team',
    date: '25.11.2023',
    text: 'We`re thrilled to announce a major update! Our development team has been hard at work to enhance the platform, bringing you new features and improvements to elevate your user experience. Get ready for an even better platform! Our latest update includes optimizations and new functionalities, ensuring a smoother and more enjoyable experience. Keep an eye out for these exciting changes! '
  },
  {
    title: 'Platorm launch',
    author: 'Dev team',
    date: '21.11.2023',
    text: 'After months on working on this project, it was finnaly delivered. Learnt a lot of stuff during the proccess, but that was a main point. It is not only the project for portfolio, but actually a usefull tool for learning and maintaing knowledge. Hope you like it! '
  }
])
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Vollkorn', serif;
  // font-size: 32px;
  // line-height: 1.4;
  color: #222022;
  box-decoration-break: clone;
  background-image: linear-gradient(90deg, #ffef7e, #b7f9e9);
  background-size: 100% 42%;
  background-repeat: no-repeat;
  background-position: 0 115%;
  padding: 0 4px;
  // margin-left: -4px;
  border-radius: 32px;
}
</style>
