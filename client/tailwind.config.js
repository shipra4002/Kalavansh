/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",   // main brand (buttons, highlights)
        accent: "#A0522D",    // secondary earthy tone
        navy: "#2F3A56",      // for headings / logo feel
        beige: "#fbe8cc",     // background
        gold: "#e2b25a",      // subtle highlight
        dark: "#1C1C1C",      // text
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};