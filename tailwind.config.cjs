/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        't': ['Alegreya Sans', 'sans-serif'],
        'ts': ['Alegreya Sans SC', 'sans-serif']
      },
      colors: {
        't-black': '#212529'
      },  
    },
  },
  plugins: [],
}
