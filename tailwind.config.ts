import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Add components directory
  ],
  theme: {
    extend: {
      colors: {
        'spark-teal': '#4AD9D9',
        'spark-yellow': '#FFD700',
        'spark-indigo': '#4a42ff',
        'spark-dark': '#111',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards', // For the tooltip
      },
    },
  },
  plugins: [],
};
export default config;