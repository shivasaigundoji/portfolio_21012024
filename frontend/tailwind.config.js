/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors : {
        'primary': "#edf2f8",
        'secondary': '#313bac',
        'black-color' :'#030303',
        'lightGray': '#e4e4e4',
        'gray-color':'#6b7688',
        'brown-color': '#46364a',
      },

      boxShadow: {
        '4xl': '0px 0px 20px rgba(0, 0, 0, 0.1)',
        '3xl': '0 0 20px rgba(168, 168, 168 ,0.15)'
      },
      backgroundImage: {
        'menu': "url('assets/bgWhite.png')",
        'img' : "url('assets/bgImg.png')",
      },

      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.25)',
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}