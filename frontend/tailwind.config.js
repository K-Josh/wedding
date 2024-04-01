/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Sans-serif',
      secondary: 'Poppins',
      },
      container: {
        padding: {
            DEFAULT: '15px',
        },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        story: "url('../images/pic3.jpeg')"
      }
    },
  },
  plugins: [],
}

