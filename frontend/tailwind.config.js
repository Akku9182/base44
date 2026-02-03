/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "savvy-navy": "#0B1D39",
        "savvy-teal": "#1EC8B0",
        "savvy-sand": "#F4F6FA",
        "savvy-lilac": "#8B8CFB"
      }
    }
  },
  plugins: []
};
