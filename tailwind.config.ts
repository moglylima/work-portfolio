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
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#079211',
        white: '#ffffff',
        black: '#000000',
        'light-gray': '#D1D5DB',
        gray: '#808080',
        'deep-gray': '#0A0A0F',
        'light-dark': '#313131',
        dark: '#101017',
        'deep-dark': '#050507',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        blink2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 2s infinite',
        blink2: 'blink 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
