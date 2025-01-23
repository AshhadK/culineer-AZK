/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#767A85',
        greenPrimary: '#85C349',
        lightPrimaryGreen: '#F3F9ED',
        darkTextGreen: '#548828',
        lightBgGreen: '#E5F3D4'
      },
      spacing: {
        '128': '32rem', // Add custom width/height values
        '144': '36rem',
      },
      fontFamily: {
        inter: ['Inter'],
      },

    },
  },
  plugins: [],
};
