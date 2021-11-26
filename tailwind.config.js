const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pdark: "#212121",
        sdark: "#242424",
        textdark: "#607d8b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
