/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#003B71',
        'azul-medio': '#014ABF',
        'azul-claro': '#0168E9',
        'vermelho': '#FF0000',
        'amarelo': '#FFAE00',
        'verde': '#1CA369',
        'cinza-claro': '#E2E2E2',
        'cinza-medio': '#BFBFBF',
        'branco': '#FFFFFF',
        'preto': '#000000',
      },
    },
  },
  plugins: [],
}