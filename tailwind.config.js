/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryText': '#07020e',
        'background': '#f4eefd',
        'primary': '#7d2be7',
        'secondary': '#f187c9',
        'accent': '#ed5d85',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      daisyui: {
        themes: [
          "light",
          "dark",
          "cupcake",
          "bumblebee",
          "emerald",
          "corporate",
          "synthwave",
          "retro",
          "cyberpunk",
          "valentine",
          "halloween",
          "garden",
          "forest",
          "aqua",
          "lofi",
          "pastel",
          "fantasy",
          "wireframe",
          "black",
          "luxury",
          "dracula",
          "cmyk",
          "autumn",
          "business",
          "acid",
          "lemonade",
          "night",
          "coffee",
          "winter",
          "dim",
          "nord",
          "sunset",
        ],    
        darkTheme: "luxury",
      },
    },
  },
  plugins: [require("daisyui")],
}