/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "exo2": ["'Exo 2'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
