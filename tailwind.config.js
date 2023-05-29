/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'little-yellow': '#F4CE14',
      'little-green': '#495E57'
      },
    },
  },
  plugins: [],
}

