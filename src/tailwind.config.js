// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
"./node_modules/tw-elements-react/dist/js/**/*.js",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui","tw-elements-react/dist/plugin.cjs")],
});