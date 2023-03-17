/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#3ab982',
        'dark-blue': '#34495f',
        gray: '#c1c4ce',
        'dark-gray': '#8c8c8c',
        'light-gray': '#eaebee',
      },
    },
  },
  plugins: [],
};
