/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Navmenu/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
