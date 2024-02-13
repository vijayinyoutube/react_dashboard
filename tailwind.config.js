/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timberGreen: "#183028",
        mediumSpringBud: "#afe67f",
      },
      spacing: {
        kSpacing: "",
        kLargeSpacing: "",
        kSmallSpacing: "",
      },
    },
    fontSize: {
      kSmallFont: "",
      kBodyDescFont: "",
      kHeadingFont: "",
      kTitleFont: "",
      kSubTitleFont: "",
    },
  },
  plugins: [],
};
