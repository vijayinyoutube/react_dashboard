/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        timberGreen: "#183028",
        mediumSpringBud: "#afe67f",
        oldSilver:'#adadad'
      },
      height:{
        sideMenuLogoutHeightLg:'calc(100vh - 550px);',
        sideMenuLogoutHeightMd:'calc(100vh - 450px);'
      }
    },
  },
  plugins: [],
};
