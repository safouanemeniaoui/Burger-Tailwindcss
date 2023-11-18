/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        secondaryColorhover: "#d5ab00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#009688",
        redColor: "#E91E63",
        darkColor: "#000",
        darkColorLight: "#212121",
        blueColor: "#00BCD4",
        orangeColor: "#FF9800",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
        },
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounceSlow: "bounceSlow 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
