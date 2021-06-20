module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        '3xl': '2000px',
        '4xl': '2500px'
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      textColor: ['active'],
      padding: ['last']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
