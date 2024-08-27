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
      colors : {
        'red' : 'hsl(0, 100%, 74%)',
        'green' : 'hsl(154, 59%, 51%)',
        'blue' : 'hsl(248, 32%, 49%)',
        'dark-blue' : 'hsl(249, 10%, 26%)',
        'grayish-blue' : 'hsl(246, 25%, 77%)',
      },
      fontFamily : {
        Poppins : ['Poppins']
      }
    },
  },
  plugins: [],
};
export default config;
