/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandNavy: "#101828",   // Deep Navy (Headings)
        brandCoral: "#FF7373",  // Accent (Buttons/Icons)
        brandBeige: "#EFE1D1",  // Soft Background
        brandWhite: "#FDFCFE",  // Main Background
        uigray: {
          25: "#FCFCFD",
          500: "#667085",       // Subtext
          900: "#101828",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};