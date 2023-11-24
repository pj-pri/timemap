import type { Config } from "tailwindcss";

const size = (unit: string, size: number) => {
  const array = new Array(size + 1).fill("");
  const result = array.reduce((a, c, i) => {
    a[`${i}${unit}`] = `${i}${unit}`;
    return a;
  }, {});
  return result;
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   black: "#000000",
    //   white: "#ffffff",

    //   primaryLight: "#42a5f5",
    //   primary: "#1976d2",
    //   primaryDark: "#1565c0",

    //   secondaryLight: "#ba68c8",
    //   secondary: "#9c27b0",
    //   secondaryDark: "#7b1fa2",

    //   errorLight: "#ef5350",
    //   error: "#d32f2f",
    //   errorDark: "#c62828",

    //   warningLight: "#ff9800",
    //   warning: "#ed6c02",
    //   warningDark: "#e65100",

    //   infoLight: "#03a9f4",
    //   info: "#0288d1",
    //   infoDark: "#01579b",

    //   successLight: "#4caf50",
    //   success: "#2e7d32",
    //   successDark: "#1b5e20",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        ...size("px", 100),
        tabBar: "65px",
        headTop: "90px",
      },
      width: { ...size("px", 100), ...size("%", 100) },
      height: {
        ...size("px", 100),
        ...size("%", 100),
      },
      margin: {
        ...size("px", 100),
      },
    },
  },
  plugins: [],
};
export default config;
