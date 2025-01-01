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
        "custom-3xl": "32px",
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
        "off-black": "#010101",
        "deep-blue": "#00171F",
        "purssian-blue": "#003459",
        "light-grey": "#7F8A8E",
        "light-white": "#FEFEFE",
        "pale-grey": "#00000033",
        "dark-grey": "#4B4B4B",
        "crisp-blue": "#007EA7",
        "light-blue": "#EAF9FF",
        "off-white":"#FCFCFC"
      },
      backgroundSize: {
        full: "100% 100%",
      },
      backgroundImage: {
        hero: "url(/assets/images/webp/hero-bg.webp)",
        news: "url(/assets/images/webp/newsletter-bg.webp)",
        foot: "url(/assets/images/webp/footer-bg.webp)",
      },
      dropShadow: {
        accordion: "0px 0px 13.9px #0000001A"
      },
      boxShadow: {
        "utility-box": "0px 0px 13.9px 0px #0000001A",
        "acc-box": "0px 4px 23.2px 0px #00000014"
      },
      screens: {
        "custom-lg": "1060px",
        "custom-xl": "1300px"
      }
    },
  },
  plugins: [],
};
