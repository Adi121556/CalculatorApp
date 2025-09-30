// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇👇 Add the correct base path (must match GitHub repo name exactly)
export default defineConfig({
  plugins: [react()],
  base: '/CalculatorApp/',
})
