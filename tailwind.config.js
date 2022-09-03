/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        blue: "#119EF4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        hyperion: ["hyperion"],
        hyperionBold: ["hyperion-bold"],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1530px",
    },
  },
  plugins: [],
};
