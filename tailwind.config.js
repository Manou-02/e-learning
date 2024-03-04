/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        // Configure your color palette here
        white: "#ffffff",
        primary: "#1d3557",
        secondary: "#677788",
        gray: "#D2C8C8",
        accent: "#F4F5F7",
        black: "#A39F9F",
        grayBlack: "#797575",
        mainBackgroundColor: "#F9FAFD", //'#0D1117',
        columnBackgroundColor: "#c3f1f7",
      },
      space: {},
    },
  },
  plugins: [],
};
