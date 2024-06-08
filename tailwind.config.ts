import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#1d1d1d",
      },
      colors: {
        main: "#eee",
        primary: "#ff66ab",
        text: "#cbd5e1",
      },
      fontFamily: {
        primary: "Merriweather",
        title: "Playfair",
      },
    },
  },
  plugins: [],
};
export default config;
