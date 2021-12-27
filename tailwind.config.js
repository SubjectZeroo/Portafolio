module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false,

  theme: {
    extend: {
      colors: {
        green: {
          950: "#57e589",
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
