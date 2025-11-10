/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores exactos del cliente
        brand: {
          // Azul: C100 M53 Y0 K0 → RGB 0, 109, 186
          blue: {
            50: '#f0f7ff',
            100: '#e0f0ff',
            200: '#bae0ff',
            300: '#7cc4ff',
            400: '#36a5ff',
            500: '#006dba', // Color principal azul
            600: '#0059a3',
            700: '#004785',
            800: '#003566',
            900: '#002547',
          },
          // Naranja: C0 M80 Y100 K10 → RGB 219, 71, 21
          orange: {
            50: '#fff5f0',
            100: '#ffe8e0',
            200: '#ffcdb8',
            300: '#ffa585',
            400: '#ff7742',
            500: '#db4715', // Color principal naranja
            600: '#c23a0d',
            700: '#a22d08',
            800: '#852308',
            900: '#701c06',
          }
        },
        // Mantener colores base de Tailwind
        background: 'oklch(1 0 0)',
        foreground: 'oklch(0.145 0 0)',
        primary: 'oklch(0.205 0 0)',
        secondary: 'oklch(0.97 0 0)',
        border: 'oklch(0.922 0 0)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}