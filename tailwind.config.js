/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        mygrey: "#4D4C4E",
        mygreylight : "#636263"
      },
      fontFamily: {
        spectral : ['Playfair Display', "serif"]
      }
    },

    backgroundImage : {
      "main-grad" : "linear-gradient(to top , #C7CD2FE , #FECACA , #FFFFFF);",
      "main-grad-short" : "linear-gradient(to top ,rgba(254 , 202 , 202 , 1)0% , rgba(255, 234, 234, 1) 25%, rgba(255, 255, 255, 1) 100%)",

    }
  },
  plugins: [],
}