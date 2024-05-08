/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'Moderate-cyan': 'hsl(176, 50%, 47%)',
        'Dark-cyan': 'hsl(176, 72%, 28%)',
        'Dark-gray': 'hsl(0, 0%, 48%)',
      }
    },
  },
  plugins: [],
}

