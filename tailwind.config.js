/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: true,
    // themes: ["light", "dark", "cupcake"],
    // styled: true,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    themes: ["light", "dark", "black", "dracula", "forest", "coffee", "dim", "bumblebee"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "bumblebee", // name of one of the included themes for dark mode
    lightTheme: "bumblebee",
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    rtl: false,

  },
}