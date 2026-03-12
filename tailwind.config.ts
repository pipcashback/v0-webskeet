import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { webskeet: { blue: '#0057FF', dark: '#0A0A0A', light: '#F5F7FF' } } } },
  plugins: [],
}
export default config
