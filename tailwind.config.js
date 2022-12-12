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
  },
  plugins: [],
};
