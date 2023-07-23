/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-900': '#101026',
        'dark-700': '#1d1d2e',
        'greenTheme': '#3fffa3',
        'redTheme': '#ff3f4b',
        'blueTheme': '#3FD1FF'
      }
    },
  },
  plugins: [],
}

