/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        amethyst: "#8A63F2",
        violet: "#6A35F2",
        emerald: "#10B981",
        "slate-dark": "#1F2937",
        "slate-gray": "#718096",
        turquoise: "#00D4B5",
        coral: "#FF6B8B",
      },
    },
  },
  plugins: [],
};
