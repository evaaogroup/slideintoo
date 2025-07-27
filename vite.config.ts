import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Ensure proper file extensions for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1000,
    // Ensure proper module format
    target: 'es2015',
    minify: 'terser',
    // Ensure proper MIME types
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
}) 