/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**.{js,ts,jsx,tsx}",

  ],
  themes: ['light', 'dark'],
  plugins: [
    require('daisyui'),
  ],
}