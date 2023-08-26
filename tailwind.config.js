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
        green_dark: '#063d23',
      },
      height: {
        input: '50px',
      },
    },
  },
  plugins: [],
};
