module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center:true,
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:["active"],
      fontSize:["hover"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
