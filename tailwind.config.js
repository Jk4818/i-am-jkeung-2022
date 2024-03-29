/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-light': '#EAE8E7',
        'prod-dark': '#141414',
        'text-light': '#F9F9F9',
        'main-black':'#302E2F',
        'main-gray':'#8B8989',
        'main-gray-dark':'#444444',
        'main-gray-darker':'#666666',
        'text-red':'#D67860',
      },
      fontFamily: {
        archivo: ["archivo", "sans-serif"],
        anton: ["anton", "sans-serif"],
        limelight: ["limelight", "sans-serif"],
        'roboto-mono': ["roboto-mono", "monospace"],
        'atkinson-hyperlegible': ["Atkinson Hyperlegible", "sans-serif"],
        'rock-salt': ["Rock Salt", "cursive"],
        'rubik': ["rubik", "sans-serif"],
        'tinos': ["tinos", "serif"],
      },
      backgroundImage: {
        'about-pattern': "/src/assets/images/about_background.png",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      neumorphismColor: {
        'main': {
          'black': '#302E2F',
        },
      },
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      boxShadow: {
        'main': '0px 0px 20px 0px rgba(0,0,0,0.2);',
      },
      blur: {
        '4xl': '130px',
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
