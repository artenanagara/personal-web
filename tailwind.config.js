/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'],
      },
      colors:{
        primary: '#1F2024',
        secondary: '#EE14DC'
      }
    },
  },
  plugins: [],
}

