/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 10px rgba(20, 20, 43, 0.04)',
        eventcard: '0px 2px 10px rgba(25, 93, 194, 0.07)',
      },
      fontFmily: {
        inter: ['"Inter"'],
      },
      colors: {
        themeBg1: '#F7F9FC',
        themeBg2: '#F4F7FF',
        themeBg3: '#E5EFFA',
        themeBg4: '#F4F7FF',
        themeBlue: '#1476FF',
        themeBlackText: '#0B0E2C',
        themeGray1Text: '#828282',
        themeGray2Text: '#4F4F4F',
        themeGray3Text: '#9D9DA1',
        themeGray4Text: '#989AAD',
        themeBlueText1: '#0064D2',
        themeDarkText1: '#2F294D',
        themeBorder1: '#E9EAF3',
        themeBorder2: '#E0E0E0',
        themeBlue1: '#4170FF',
        themeGrey3Text: '#6F7182',
        themeGrey4Text: '#303350',
      },
    },
    screens: {
      ph: '375px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1366px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
