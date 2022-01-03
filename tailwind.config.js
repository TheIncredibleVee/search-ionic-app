const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '420px',
      ...defaultTheme.screens,
    },
    extend:{
      colors: {
        'cg': '#00FFA3',
        'cb': '#03E1FF',
        'cp': '#DC1FFF',
        'cbl': '#101921',
        'cbg': 'rgb(16, 25, 33,0.2)',
        'cbgd': 'rgb(16, 25, 33,0.6)',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};