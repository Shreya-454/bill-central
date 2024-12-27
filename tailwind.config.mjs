/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-4xl": "38px",
        "custom-6xl": "64px",
      },
      lineHeight: {
        110: "110%",
        109: "109%",
        150: "150%",
        115: "115%",

      },
      colors: {
        "sky-blue": "#00A8E8",
        "deep-blue": "#00171F",
        "purssian-blue": "#003459",
        "light-grey": "#7F8A8E",
        "light-white": "#FEFEFE",
        "pale-grey": "#00000033"
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        hero: "url(/assets/images/webp/hero-bg.webp)"
      }
    },
  },
  plugins: [],
};
