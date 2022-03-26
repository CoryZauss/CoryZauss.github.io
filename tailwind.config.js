module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        offblack: "#18181b",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#1e3a8a",
        metal: "#565584",
        blue: "#06b6d4",
        red: "#e11d48",
        miami: "#db2777",
        foam: "#2dd4bf",
        green: "#22c55e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
