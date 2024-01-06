/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bottomLine:"bottomLine 1s ease-in-out 1"
      },
      keyframes:{
        bottomLine:{
          "0%":{transform:"scaleX(50%)",transformOrigin:"left"},
          "50%":{transform:"scaleX(100%)"},
          "75%":{transform:"translateX(100%)"},
          "100%":{transform:"ScaleX(0)"}
        }
      }
    },
  },
  plugins: [],
}