/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c',  // Example dark background color
        'primary': '#3182ce',  // Example primary button color
        'primary-hover': '#2b6cb0', // Example hover color
      },
    },
  },
  plugins: [],
}