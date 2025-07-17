// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // if using folders like /app/screens
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};