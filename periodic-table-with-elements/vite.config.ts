import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/periodic-table-with-elements/', // 👈 This must match your repo name
  plugins: [react()],
})
