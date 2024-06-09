/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./focus/src/**/*.{js,jsx,ts,tsx,css}",
    "./src/**/*.{js,jsx,ts,tsx,html,css}",
    
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2500': '2500ms',
      },
      colors: {
        'primary': '#110202', 
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}