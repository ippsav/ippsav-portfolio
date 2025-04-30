/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        primary: {
          light: '#333333',
          dark: '#F5F5F5'
        },
        secondary: {
          light: '#666666',
          dark: '#AAAAAA'
        },
        accent: {
          light: '#000000',
          dark: '#FFFFFF'
        },
        bg: {
          light: '#FFFFFF',
          dark: '#121212'
        },
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        }
      },
      transitionDuration: {
        400: '400ms'
      }
    }
  },
  plugins: []
};
