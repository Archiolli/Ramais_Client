/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'BEE5FF': '#f0fdfa',
        '9FCCEB': '#ccfbf1',
        '7DB7E1': '#99f6e4',
        '498BBB': '#5eead4',
        '186A9F': '#2dd4bf'

      },
      skew: {
        '17': '-40deg',
      },
      translate: {
        '4.25': '17rem',
      }
    }
  },
  plugins: [],
}

