const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      height: {
        nav: "72px",
        feature: "743px",
      },
      maxHeight: {
        nav: "72px",
        feature: "743px",
      },
      width: {
        "8xl": "1440px",
        feature: "375px",
      },
      maxWidth: {
        "8xl": "1440px",
        feature: "375px",
      },
      fontSize: {
        icon: "22px",
      },
      textColor: {
        primary: "#AC3378",
      },
      backgroundColor: {
        primary: "#AC3378",
      },
      boxShadow: {
        btn: "0px 1px 2px 0px #1018280D",
        feature: "#FF76C4 -120px 0px 1000px -150px"
      },
      padding: {
        "input-10": "10px",
        "input-14": "14px"
      }
    },
  },
  plugins: [],
};
