/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08152F',
        steel: '#102A52',
        aqua: '#18C7B2',
        skyglow: '#2F80FF',
        brand: {
          50: '#EFF5FF',
          100: '#DCE9FF',
          200: '#BDD6FF',
          300: '#91BBFF',
          400: '#5D95FF',
          500: '#2F80FF',
          600: '#1E62D8',
          700: '#174BAA',
          800: '#143C86',
          900: '#102E66'
        },
        mint: {
          100: '#D9FAF4',
          300: '#6EE7D8',
          500: '#18C7B2',
          700: '#0E8A7D'
        }
      },
      boxShadow: {
        soft: '0 14px 36px rgba(11, 26, 56, 0.13)',
        lift: '0 22px 52px rgba(8, 21, 47, 0.2)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 14% 14%, rgba(47,128,255,0.26), transparent 48%), radial-gradient(circle at 86% -2%, rgba(24,199,178,0.2), transparent 42%)'
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeup: 'fadeup 0.7s ease-out forwards'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-7px)' }
        },
        fadeup: {
          from: { opacity: 0, transform: 'translateY(14px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};