<script setup lang="ts">
import { onMounted } from 'vue'
import confetti from 'canvas-confetti'
import { useRoute } from 'vue-router'

const route = useRoute()
const resultNumber = route.query.number || '000'

onMounted(() => {
  confetti({
    particleCount: 400,
    spread: 80,
    origin: { y: 0.8 }
  })
})
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
    <div class="w-full max-w-md p-4 bg-transparentWhite rounded-lg text-center">
      <h2 class="text-xl font-bold mb-4">抽選結果</h2>
      <p class="text-4xl mb-8">{{ resultNumber }}</p>
      <NuxtLink to="/" class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        戻る
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.bg-transparentWhite {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>