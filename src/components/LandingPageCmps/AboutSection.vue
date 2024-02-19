<template>
  <div
    name="container"
    class="bg1 flex h-fit w-screen flex-wrap items-center justify-center border-t-2 border-teal-100 px-20 py-10 md:items-stretch"
  >
    <div
      name="left container"
      class="flex h-[100%] w-[100%] flex-col items-center gap-10 p-5 md:w-[60%]"
    >
      <div class="b flex h-[60%] flex-col items-center justify-center gap-10">
        <p class="text-5xl font-bold">
          <WordHighlighter
            :highlightStyle="highlight"
            query="really"
            textToHighlight="Get really  good at theory"
          />
        </p>
        <p class="w-[60%] text-2xl">
          Start learning about web dev theory. Here you can find resources to learn on all levels.
          We are
          <RoughNotation :is-show="true" type="underline" :animate="false" class="left-0">
            <span class="font-semibold">fun, effective and free!</span>
          </RoughNotation>
        </p>
      </div>
      <div class="flex flex-col flex-wrap items-center justify-center">
        <ButtonsContainer></ButtonsContainer>
        <CodeSignature></CodeSignature>
      </div>
    </div>
    <div name="right container" class="relative flex items-center justify-center">
      <img
        src="../../assets/img/landing_page/about-section-3d-2.jpg"
        class="lg:rem-[25rem] inset-0 h-[15rem] rounded-full drop-shadow-lg md:h-[20rem]"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import ButtonsContainer from '../LandingPageCmps/ButtonsContainer.vue'
import CodeSignature from './CodeSignature.vue'
import WordHighlighter from 'vue-word-highlighter'
import { reactive } from 'vue'
const highlight = reactive({
  backgroundColor: '#fef9c3'
})
</script>

<style scoped>
.bg1 {
  background: rgb(204, 251, 241);
  background: linear-gradient(
    180deg,
    rgba(204, 251, 241, 0.3561799719887955) 0%,
    rgba(255, 255, 255, 1) 62%,
    rgba(204, 251, 241, 0.3617822128851541) 100%
  );
}

@keyframes custom-slow-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}

.custom-slow-pulse {
  animation: custom-slow-pulse 10s infinite;
}
</style>
