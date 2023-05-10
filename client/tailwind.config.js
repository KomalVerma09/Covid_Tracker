/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {dropShadow: {
      '3xl': '0 35px 35px rgb(0, 0, 0 / 0.15)',
      '4xl': [
        'rgba(0, 0, 0, 0.25) 0px 54px 55px', 'rgba(0, 0, 0, 0.12) 0px -12px 30px', 'rgba(0, 0, 0, 0.8) 0px 4px 6px', 'rgba(0, 0, 0, 0.17) 0px 12px 13px', 'rgba(0, 0, 0, 0.09) 0px -3px 5px'
      ],
      '4xl-w': [
        'rgba(255, 0, 0, 0.25) 0px 54px 55px', 'rgba(255, 0, 0, 0.12) 0px -12px 30px', 'rgba(255, 0, 0, 0.8) 0px 4px 6px', 'rgba(255, 255, 255, 0.17) 0px 12px 13px', 'rgba(255, 255, 255, 0.09) 0px -3px 5px'
      ]
    }
},
  },
  plugins: [],
}
// drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
// box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
// box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;