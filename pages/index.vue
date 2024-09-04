<script setup lang="ts">
import { usePersist } from '~/composables/persist';
import { useRouter } from 'vue-router';

const numbers = usePersist<string[]>('numbers', () => [
  '001',
  '002',
  '003',
  '004',
  '005',
  '006',
  '007',
  '008',
  '009',
  '010',
  '011',
  '012',
  '013',
  '014',
  '015',
  '016',
  '017',
  '018',
  '019',
  '020',
  '021',
  '022',
  '023',
  '024',
  '025',
  '026',
  '027',
  '028',
  '029',
  '030',
  '031',
  '032',
  '033',
  '034',
  '035',
  '036',
  '037',
  '038',
  '039',
  '040',
  '041',
  '042',
  '043',
  '044',
  '045',
  '046',
  '047',
  '048',
  '049',
  '050',
  '051',
  '052',
  '053',
  '054',
  '055',
  '056',
  '057',
  '058',
  '059',
  '060',
  '061',
  '062',
  '063',
  '064',
  '065',
  '066',
  '067',
  '068',
  '069',
  '070',
  '071',
  '072',
  '073',
  '074',
  '075',
  '076',
  '077',
  '078',
  '079',
  '080',
  '081',
  '082',
  '083',
  '084',
  '085',
  '086',
  '087',
  '088',
  '089',
  '090',
  '091',
  '092',
  '093',
  '094',
  '095',
  '096',
  '097',
  '098',
  '099',
  '100',
  '101',
  '102',
  '103',
  '104',
  '105',
  '106',
  '107',
  '108',
]);
const router = useRouter();

function drawNumber() {
  const drewNumber = numberProvider(numbers.value);

  numbers.value.push(drewNumber);

  router.push({ path: '/result', query: { number: drewNumber } });
}

</script>
<template>
  <div class="min-h-screen bg-gray-900 text-white flex ">
    <!-- 中央のセクション -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-md p-4 bg-transparentWhite rounded-lg">
        <h1 class="text-center text-2xl font-bold mb-4">中夜祭・抽選</h1>

        <!-- 抽選ボタンセクション -->
        <div>
          <button @click="drawNumber" class="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            抽選する
          </button>
        </div>
      </div>
    </div>

    <!-- 抽選結果セクション -->
    <div class="result-section">
      <h2>抽選結果</h2>
      <div class="result-list-container">
        <ul>
          <li v-for="(number, index) in numbers" :key="index">
            {{ number }}
          </li>
        </ul>
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
  }

  .result-list-container {
    flex-grow: 1;
    overflow-y: auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      li {
        text-align: left;
        flex-basis: calc(50% - 0.25rem);
      }
    }
  }
}
</style>