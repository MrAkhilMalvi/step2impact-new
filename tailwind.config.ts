/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandNavy: "#0F172A",
        brandBlue: "#1E40AF",
        brandDeepBlue: "#1E3A8A",
        brandRed: "#B91C1C",
        brandAccentRed: "#DC2626",
        brandLight: "#F8FAFC",
        brandWhite: "#FFFFFF",
        brandMuted: "#64748B",
        brandBorder: "#E2E8F0",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
