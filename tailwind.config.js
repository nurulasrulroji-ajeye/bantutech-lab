/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: "#4942E4",
        secondary: "#11009E",
        light: "#E6B9DE",
        lighten: "#FAE7F3",
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
