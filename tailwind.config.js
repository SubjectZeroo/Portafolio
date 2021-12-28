module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false,

  theme: {
    fontFamily: {
      sans: ['Ubuntu'],
      serif: ['Ubuntu'],
    },
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
