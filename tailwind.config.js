/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9408cc",
        
"secondary": "#10a312",
        
"accent": "#8bd854",
        
"neutral": "#2C2334",
        
"base-100": "#F4F4F6",
        
"info": "#9DABF0",
        
"success": "#2BB17D",
        
"warning": "#DAA616",
        
"error": "#E34F54",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
