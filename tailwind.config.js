/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // regular colors
        themeColor: "#20D9A1",
      },
    },
  },
  plugins: [],
}

