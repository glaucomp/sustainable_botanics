/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: '#F7E046',
        secondary: '#4850A2',
        tertiary: '#32A071',
        neutral: '#0F172A',
        green_dark: '#042918',
        green_light: '#ebc6af',
        gray_light: '#ebeadf',
        brown_dark: '#4f3c02',
        red_dark: '#701100',
      },
      height: {
        input: '50px',
      },
    },
  },
  plugins: [],
};
