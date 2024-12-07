import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-clr": "var(--primary-clr)",
        "primary-clr-light1": "var(--primary-clr-light1)",
        "primary-clr-light2": "var(--primary-clr-light2)",
        "black-text": "var(--black-text)",
        "bg-gray": "var(--bg-gray)",
        "light-gray": "var(--light-gray)",
        "light-gray2": "var(--light-gray2)",
        "dark-gray": "var(--dark-gray)",
      },
    },
  },
  plugins: [],
};
export default config;
