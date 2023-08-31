/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        satoshi: ["satoshi","sans-serif"],
      },
      colors: {
        'primary': '#F1DD2B',
        'black': '#202127',
      }
    },
  },
  plugins: [],
}