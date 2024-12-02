import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'my-notes',
    remotes: {
      notesHomeRemote: 'http://localhost:5000/dist/assets/remoteEntry.js'
    },
    shared: ['react', 'react-dom', 'react-router-dom', 'react-redux', '@reduxjs/toolkit']
  })],
  server: {
    open: true,
    port: 3000
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
