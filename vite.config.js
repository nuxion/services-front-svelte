import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve('./src'),
  base: '/',
  plugins: [
	  svelte(), 
	  legacy({ targets: ['defaults', 'not IE 11']})],
  build: {
    manifest: true,
    outDir: resolve('./dist'),
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./src/main.js'),
	    // explore: resolve('./theme/static/src/explore/main.js'),

      }
    }
  },
  resolve: {
    // https://mtm.dev/svelte-vite-aliases
    alias: {
      $lib: path.resolve('./src/lib'),
      $components: path.resolve('./src/components'),
      $assets: path.resolve('./src/assets'),
    }
  }
})
