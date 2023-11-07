/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],

  theme: {
    extend: {
      screens: {
        'sm': '500px',
        'md': '600px',
        'lg': '1024px',
      },
    },
  },
  plugins: [],
}

