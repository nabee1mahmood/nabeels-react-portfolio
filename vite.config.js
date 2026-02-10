import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nabeels-react-portfolio/', // <- your GitHub repo name
})