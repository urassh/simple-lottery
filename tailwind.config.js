/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',   // Nuxtのページフォルダ内のすべてのファイル
    './components/**/*.{vue,js,ts,jsx,tsx}', // Nuxtのコンポーネントフォルダ内のすべてのファイル
    './layouts/**/*.{vue,js,ts,jsx,tsx}', // レイアウトフォルダ内のすべてのファイル
  ],
  theme: {
    extend: {
      colors: {
        transparentWhite: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

