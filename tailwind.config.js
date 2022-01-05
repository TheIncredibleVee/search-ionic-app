const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend:{
      colors: {
        'cg': '#00FFA3',
        'cb': '#03E1FF',
        'cp': '#DC1FFF',
        'cbl': '#101921',
        'cbg': 'rgb(16, 25, 33,0.2)',
        'cbgld': 'rgb(16, 25, 33,0.4)',
        'cbgmd': 'rgb(16, 25, 33,0.6)',
        'cbgd': 'rgb(16, 25, 33,0.8)',
        'tp': '#DC1FFF',
        'tg': '#00FFA3',
        'satin-1' :'rgba(0,0,0,0.1)',
        'satin-2' :'rgba(0,0,0,0.2)',
        'satin-3' :'rgba(0,0,0,0.3)',
        'satin-4' :'rgba(0,0,0,0.4)',
        'satin-5' :'rgba(0,0,0,0.5)',
        'satin-6' :'rgba(0,0,0,0.6)',
        'satin-7' :'rgba(0,0,0,0.7)',
        'satin-8' :'rgba(0,0,0,0.8)',
        'satin-9' :'rgba(0,0,0,0.9)',
         
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};