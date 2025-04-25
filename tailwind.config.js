/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f3f1ff',
          100: '#e4e0ff',
          200: '#cdc5fe',
          300: '#b19dfd',
          400: '#9572fa',
          500: '#7c45f6',
          600: '#6e2aed',
          700: '#5d1dd4',
          800: '#4c17ab',
          900: '#3b1285',
          950: '#1f0a4d',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 15px rgba(251, 191, 36, 0.5)',
      },
    },
  },
  plugins: [],
};