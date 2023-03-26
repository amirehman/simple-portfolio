/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(rose|yellow|indigo|blue|orange|teal|gray|green)-(100|200|300|400|500|600|700)/
    },
    {
      pattern: /text-(rose|yellow|indigo|blue|orange|teal|gray|green)-(100|200|300|400|500|600|700)/
    }
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          a11y: withOpacity("--color-a11y"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          a11y: withOpacity("--color-a11y"),
        },
      },
      ringColor: {
        skin: {
          primary: withOpacity("--color-primary"),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          a11y: withOpacity("--color-a11y"),
        },
      },
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

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}