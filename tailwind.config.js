/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Mono', 'monospace'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          200: '#E5E5E5',
          400: '#A0A0A0',
          600: '#666666',
          800: '#333333',
        },
      },
    },
  },
  plugins: [],
}
