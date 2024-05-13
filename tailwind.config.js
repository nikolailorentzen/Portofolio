const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '112': '28rem',
      },
      backgroundImage: {
        "pfp": "url('./images/pfp2.png')"
      },
      animation:{
        "loop-scroll": "scroll-horizontal 1s linear infinite"
      },
      keyframes:{
        "scroll-horizontal":{
          to: {transform: "translateX(-108%)"}
        }
      }},
  },
  plugins: [],
}
