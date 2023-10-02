/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors:{
        pWhite:'hsl(0, 0%, 100%)',
        pGv: "hsl(270, 3%, 87%)",
        pDGv: 'hsl(279, 6%, 55%)',
        pError: 'hsl(0, 100%, 66%)',
        pPurrple: 'hsl(249, 99%, 64%)',
        pViolet: 'hsl(278, 94%, 30%)',
      }
    },
  },
  plugins: [],
}

