module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
