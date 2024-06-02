/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "150px",
      },
      colors: {
        primary: "#2E3A59",
        secondary: "#F5A623",
        accent: "#ECF0F1",
      },
      backgroundImage: {
        hero: "url('./assets/library-hero.jpg')",
      },
    },
  },
  plugins: [],
};

//
