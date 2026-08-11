/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6E1B2D',
          dark: '#4E1220',
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
    },
  },
  plugins: [],
};
