<script setup lang="ts">
import { usePersist } from '~/composables/persist';
import { useRouter } from 'vue-router';

const numbers = usePersist<string[]>('numbers', () => []);
const router = useRouter();

function drawNumber() {
  const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  numbers.value.push(randomNumber);
  // 抽選結果画面に遷移
  router.push({ path: '/result', query: { number: randomNumber } });
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white flex">
    <!-- 中央のセクション -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-md p-4 bg-transparentWhite rounded-lg">
        <h1 class="text-center text-2xl font-bold mb-4">昼夜祭・特別抽選</h1>

        <!-- 抽選ボタンセクション -->
        <div>
          <button @click="drawNumber" class="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            抽選する
          </button>
        </div>
      </div>
    </div>

    <!-- 抽選結果セクション -->
    <div class="w-1/3 p-4 bg-transparentWhite rounded-lg">
      <h2 class="text-xl font-semibold mb-2">抽選結果</h2>
      <ul>
        <li v-for="(number, index) in numbers" :key="index" class="text-left my-2">
          {{ number }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.bg-transparentWhite {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>