/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D1B69",
        secondary: "#2CD19D",
        accent: "#F4B73F",
      },
    },
  },
  plugins: [],
};
