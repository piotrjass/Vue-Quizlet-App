<template>
  <div class="relative flex h-fit w-screen items-center justify-center">
    <div
      name="image backgrpund"
      class="absolute inset-0 bg-[url('../assets/img/global/computer-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-5"
    ></div>

    <div
      name="forms and buttons container "
      class="z-30 flex h-fit w-screen flex-col items-center justify-center"
    >
      <router-buttons-container></router-buttons-container>
      <div
        name="forms and images"
        class="mt-10 w-[90%] flex-wrap overflow-hidden rounded-3xl bg-white shadow-lg md:flex md:w-[70%]"
      >
        <div name="left" class="w-[100%] lg:w-[50%]">
          <img
            class="h-full w-full object-cover"
            src="../assets/img/landing_page/LearningPlatform.jpg"
            alt=""
          />
        </div>
        <div name="right" class="mt-5 flex flex-col items-center justify-center p-5 lg:w-[50%]">
          <Transition>
            <RouterView></RouterView>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'animate.css'
import routerButtonsContainer from '../components/LoginCmp/routerButtonsContainer.vue'
</script>

<style scoped>
.bg {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
