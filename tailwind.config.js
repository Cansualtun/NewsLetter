/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
       padding: '5rem',
    },
    extend: {
      maxWidth: {
       container:"1200px"
     },
     screens: {
      responsive: "750px",
    },
  },
  plugins: [],
}
}
