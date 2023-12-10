/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#3498db',
          2: '#2980b9',
        },
        danger: {
          1: '#e74c3c',
          2: '#c0392b',
        },
        success: {
          1: '#2ecc71',
          2: '#27ae60',
        },
        gray: {
          1: '#f6f6f6',
          2: '#ddd',
          3: '#34495e',
        },
        text: {
          color: '#444',
          primary: '#ffffff',
        },
      },
      border: {
        width: '1px',
        color: '#ddd',
        radius: '4px'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}