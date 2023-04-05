/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "roxo-primario": "#5F4B8B",
        "roxo-secundario": "#3C2F58",

        "cinza-primario": "#D9D9D9",

        "branco-primario": "#FFFFFF",
        "branco-secundario": "#F4F3F7",
      },
    },
  },
  plugins: [],
};
