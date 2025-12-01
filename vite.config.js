import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import process from 'node:process'

// Detect if we are building for GitHub Pages
const isGitHubPages = process.env.HOSTING_ON_GHP === 'true'

export default defineConfig({
  base: isGitHubPages ? '/eclat-journal/' : '/',
  plugins: [react(), tailwindcss()],
})