/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        bgColor: '#132a60',
        cta: '#f5393a',
        star: '#efaf05',
      }
    },
  },
  plugins: [],
}