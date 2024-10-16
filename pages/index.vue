<script setup lang="ts">
import { usePersist } from '~/composables/persist';
import { useRouter } from 'vue-router';

const numbers = usePersist<string[]>('numbers', () => []);
const router = useRouter();

function drawNumber() {
  const drewNumber = numberProvider(numbers.value);

  numbers.value.push(drewNumber);

  router.push({ path: '/result', query: { number: drewNumber } });
}

function handleKeyup(event: KeyboardEvent) {
  if (event.code === 'Space') {
    drawNumber();
  }
}

onMounted(() => {
  window.addEventListener('keyup', handleKeyup);
});

onUnmounted(() => {
  window.removeEventListener('keyup', handleKeyup);
});

</script>
<template>
  <div class="min-h-screen bg-gray-900 text-white flex ">
    <!-- 中央のセクション -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-md p-4 bg-transparentWhite rounded-lg">
        <h1 class="text-center text-4xl font-bold mb-4">カウントナンバー</h1>

        <!-- 抽選ボタンセクション -->
        <div>
          <button @click="drawNumber" class="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            抽選する
          </button>
          <p class="text-center text-sm text-gray-400 mt-4">or スペースキーで抽選</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-transparentWhite {
  background-color: rgba(255, 255, 255, 0.1);
}

.result-section {
  width: 33.333%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 92vh;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  }

  .result-list-container {
    flex-grow: 1;
    overflow-y: auto;
    margin-top: 0.5rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      li {
        text-align: left;
        font-size: 1.4rem;
        flex-basis: calc(50% - 0.25rem);
      }
    }
  }
}
</style>