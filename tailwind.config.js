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
          light: '#000000',
          dark: '#FFFFFF'
        },
        secondary: {
          light: '#333333',
          dark: '#DDDDDD'
        },
        accent: {
          light: '#000000',
          dark: '#FFFFFF'
        },
        bg: {
          light: '#FFFFFF',
          dark: '#000000'
        },
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#333333',
          800: '#222222',
          900: '#111111'
        }
      },
      transitionDuration: {
        400: '400ms'
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        full: '0'
      }
    }
  },
  plugins: []
};
