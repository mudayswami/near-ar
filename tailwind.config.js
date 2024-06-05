/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right,#222222 0%, #171422 25%, #6759a2 100%)',
        // 'custom-gradient': 'linear-gradient(to right, #000000 0%, #030207 25%, #4F3BA0 100%)',
      },
    },
  },
  plugins: [],
};
