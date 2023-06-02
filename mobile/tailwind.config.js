/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-900': '#101026',
        'dark-700': '#1d1d2e',
        'green-theme': '#3fffa3',
        'red-theme': '#ff3f4b',
      }
    },
  },
  plugins: [],
}

