/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          '200': '#e0e7ff',
          '400': '#a3a2e9',
          '800': "#5045e4"
        },
        gray: {
          '200': '#e6e8ea',
          '300': '#f9fbfc'
        }
      }
    },
  },
  plugins: [],
}

