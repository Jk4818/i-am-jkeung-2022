/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-light': '#EAE8E7',
        'text-light': '#F9F9F9',
        'main-black':'#302E2F',
        'main-gray':'#8B8989',
        'text-red':'#D67860',
      },
      fontFamily: {
        archivo: ["archivo", "sans-serif"],
        anton: ["anton", "sans-serif"],
        limelight: ["limelight", "sans-serif"],
        'atkinson-hyperlegible': ["Atkinson Hyperlegible", "sans-serif"],
        'rock-salt': ["Rock Salt", "cursive"],
        'rubik': ["rubik", "sans-serif"]
      },
      backgroundImage: {
        'about-pattern': "/src/assets/images/about_background.png",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
