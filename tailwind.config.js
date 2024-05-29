/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ECFDF5",
          100: "#111827",
          400: "#ECFDF5",
          500: "#047857",
          600: "#059669",
          700: "#047857",
          800: "#ff6700",
          900: "#D1FAE5",
        },
        gray: {
          50: "#F9FAFB",
          100: "#E5E7EB",
          150: "#E2E8F0",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        error: {
          50: "#FEF3F2",
          100: "#FEF2F2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#EF4444",
          500: "#F04438",
          700: "#B42318",
        },
      },
    },
  },
  plugins: [],
};
