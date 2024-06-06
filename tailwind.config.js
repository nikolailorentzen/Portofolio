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
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      fontFamily: {
        'inter': ['Inter-Regular', 'sans-serif'],
      },
      fontWeight: {
       '550': '550'
      },
      backgroundImage: {
        "pfp1": "url('./images/pfp1.png')",
        "pfp2": "url('./images/1243.png')",
        "pfp3": "url('./images/pfp3.png')",
        "electric1": "url('./images/electric1.PNG')",
        "electric2": "url('./images/electric2.PNG')",
        "electric3": "url('./images/electric3.PNG')",
        "no": "url('./images/norway.png')",
        "en-us": "url('./images/united-states.png')"
      },
    },
  },
  plugins: [],
}
