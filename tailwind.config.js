/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landback: "url('/../../public/Background.jpg')",
      },
      colors: {
        primary: "#4063d6",
        secondary: "#07174b",
        // secondary: {
        //   100: "#E2E2D5",
        //   200: "#888883",
        // },
      },
      spacing: {
        init: "1em",
      },
      fontFamily: {
        primary: "poppins",
        secondary: "Montserrat",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sml: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      sm: { max: "500px" },
      // => @media (max-width: 500px) { ... }
    },
  },
  plugins: [],
};
