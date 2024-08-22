/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "var(--background-color)",
        borderColor: "var(--border-color)",
        fontColor: "var(--font-color)",
      }
    },
  },
  plugins: [],
};

