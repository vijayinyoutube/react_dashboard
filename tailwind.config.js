/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#5c6ac4",
        btnColor: "rgb(249 115 22)",
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
}

