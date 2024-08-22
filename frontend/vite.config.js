import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change 'build' to your desired output directory
    rollupOptions: {
      external: []  // Ensure this does not include `/src/main.jsx`
    }
  }
})
