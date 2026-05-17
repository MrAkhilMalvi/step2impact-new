/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Exact Untitled UI Palette
        uiprimary: {
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          600: "#7F56D9", // Main Purple
          700: "#6941C6",
        },
        uigray: {
          25: "#FCFCFD",
          500: "#667085",
          900: "#101828", // Deep Heading Color
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};