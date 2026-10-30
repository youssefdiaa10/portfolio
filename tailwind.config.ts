import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#61e6ad",
        background: "#090d12",
        foreground: "#f1f5f2",
      },
    },
  },
  plugins: [],
};

export default config;
