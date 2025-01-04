/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        fira: ['"Fira Sans Condensed"', 'sans-serif'],
        jockey: ['"Jockey One"', 'sans-serif'],
        jost: ['"Jost"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('bgMain.jpg')",
      },
      animation: {
        move: 'mover 30s linear infinite',
        slideDown: 'slideDown 0.5s ease-out forwards'
      },
      keyframes: {
        mover: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideDown: {
          '0%': { top: '-100%' },
          '100%': { top: '0' },
        },
      },
    },
  },
  plugins: [],
}

