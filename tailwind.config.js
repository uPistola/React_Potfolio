/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    },
  },
  variants: {
    fill: ['hover', 'focus'] 
  },
  plugins: [
      require("tailwindcss-animation-delay"),
  ],
}
