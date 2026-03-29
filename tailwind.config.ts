import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FDFBF7",
          teal: "#2C5F63",
          sage: "#8BA888",
          coral: "#E57373",
        },
      },
    },
  },
  plugins: [],
}
export default config