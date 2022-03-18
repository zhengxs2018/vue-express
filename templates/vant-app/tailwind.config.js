// @ts-check

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
const userConfig = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: []
}

module.exports = userConfig
