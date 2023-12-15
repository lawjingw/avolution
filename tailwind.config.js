/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      sora: ["Sora", "sans-serif"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        "color-0": "#7d9c5a",
        "color-1": "#61DE56",
        "color-2": "#F7F1F4",
        "color-3": "#7f7f7f1a",
        "color-4": "#252A4C",
        "color-5": "#db8563",
        "color-6": "#6e4922",
        "color-7": "#a1583b",
        "color-8": "#ffe3c0",
        "color-9": "#FEF8EC",
        "color-10": "#A1583B",
      },
    },
  },
  plugins: [],
};
