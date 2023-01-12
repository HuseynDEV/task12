/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "902px",
      sm: "750px",
      download:'1190px',
      downloadMd:'980px',
      downloadSm:"800px",
      footerLg:"1200px",
      footerMd:'900x',
      footerSm:'680px'
    },

    extend: {},
  },
  plugins: [],
};
