/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      width: {
        '55': '55%',
        '60': '60%',
        '65': '65%',
        '70': '70%',
        '80': '80%'
      },
      height: {
        '70': '70%',
        '80': '80%',
      }
    },
  },
  plugins: [],
}
