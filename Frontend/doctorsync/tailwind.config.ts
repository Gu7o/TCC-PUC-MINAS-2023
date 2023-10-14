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
      black: '#000000',
      cinzaclaro: '#B5BAC1',
      login:'#2F3E46',
      red: '#FF0000'
    },
    fontSize : {
      xxs: ['10px', { lineHeight: '24px', letterSpacing: ' -0.03em' }],
      xs: ['14px', { lineHeight: '24px', letterSpacing: ' -0.03em' }], 
      sm: ['16px', { lineHeight: '28px', letterSpacing: ' -0.03em' }], 
      lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }], 
      xl: ['24px', { lineHeight: '36px', letterSpacing: ' -0.03em' }], 
      '2x1': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }], 
      '3x1': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4x1': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5x1': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }]
    },
    extend: {},
  },
  plugins: [],
}
export default config
