/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        fd: "300px",

        sm: "450px",

        md: "768px",

        lg: "1350px",
      },
    },
  },
  plugins: [],
};
