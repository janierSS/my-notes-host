import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'myNotesHost',
    remotes: {
      notesHomeRemote: 'http://localhost:5000/dist/assets/remoteEntry.js',
      loginRemote: 'http://localhost:5001/dist/assets/remoteEntry.js'
    },
    exposes: {
      './shared': './src/exposes'
    },
    shared: ['react', 'react-dom', 'react-router-dom', 'react-redux', '@reduxjs/toolkit']
  })],
  server: {
    open: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api'
      },
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
