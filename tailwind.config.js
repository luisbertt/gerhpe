module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
      },
      colors: {
        grayish: "#D9DFE0",
        pinkish: "#D4D0D7",
        tanish: "#E8E2DD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
