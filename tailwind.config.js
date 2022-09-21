/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        grupo: ['Gruppo'],
        lato: ['Lato'],
        open_san: ['Open Sans'],
        roboto: ['Roboto'],
        nunito: ['Nunito']
      },
      boxShadow: {
        '1xl': '0px 1px 4px rgba(0, 0, 0, 0.1)',
        '2xl': '0px 2px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
