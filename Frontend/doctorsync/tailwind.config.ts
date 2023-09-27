import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#CAD2C5',
      secundary: '#1A202C',
      white: '#FFFFFF',
      gray: '#767676',
      darkgreen: '#354F52',
      green: '#52796F',
      black: '#000000'
    },
    extend: {},
  },
  plugins: [],
}
export default config
