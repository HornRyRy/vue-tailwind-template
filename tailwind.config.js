/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue, js, ts, jsx}'],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins:{
    // preflight:false
  }
}

