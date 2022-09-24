/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "dark-blue-project" : "#020234",
        "light-blue-project" : "#05057b",
      },
    },
  },
  plugins: [],
}