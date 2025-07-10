/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        h70: "70%",
        h71: "71%",
        h73: "73%",
      },
      screens: {
        xsm: "320px",
      },
    },
  },
  plugins: [],
};
