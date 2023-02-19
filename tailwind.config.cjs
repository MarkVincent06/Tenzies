/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B2434',
        'light-green': '#59E391',
        'dark-blue2': "#0B2434",
        'medium-blue': '#4A4E74',
        'light-blue': '#5035FF',
        'white2': '#F5F5F5'
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
