/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6E1B2D',
          dark: '#4E1220',
          light: '#D98499',
        },
        ink: '#222425',
        paper: '#FFFFFF',
        taupe: {
          DEFAULT: '#978F84',
          light: '#E9E5E0',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'sweep-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'sweep-in': 'sweep-in 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-up-1': 'fade-up 0.5s ease-out 0.12s forwards',
        'fade-up-2': 'fade-up 0.5s ease-out 0.24s forwards',
      },
    },
  },
  plugins: [],
};
