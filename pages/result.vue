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
  <div class="result-container">
    <div class="result-box">
      <h2 class="result-title">抽選結果</h2>
      <p class="result-number">{{ resultNumber }}</p>
      <NuxtLink to="/" class="back-button">
        戻る
      </NuxtLink>
      <p class="text-center text-sm text-gray-400 mt-4">or スペースキーで戻る</p>
    </div>
  </div>
</template>

<style scoped>
.result-container {
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.result-box {
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  text-align: center;
}

.result-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.result-number {
  font-size: 12.5rem;
  margin-bottom: 2rem;
}

.back-button {
  background-color: #d53f8c;
  color: white;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 1.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b83280;
  }
}
</style>