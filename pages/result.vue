<script setup lang="ts">
import { onMounted } from 'vue'
import confetti from 'canvas-confetti'
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const resultNumber = route.query.number || '000'

function handleKeyup(event: KeyboardEvent) {
  if (event.code === 'Space') {
    router.push('/')
  }
}

onMounted(() => {
  window.addEventListener('keyup', handleKeyup);

  confetti({
    particleCount: 400,
    spread: 80,
    origin: { y: 0.8 }
  })
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyup);
});
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
    <div class="w-full max-w-md p-4 bg-transparentWhite rounded-lg text-center">
      <h2 class="text-3xl font-bold mb-1">抽選結果</h2>
      <p class="text-[200px] mb-8">{{ resultNumber }}</p>
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