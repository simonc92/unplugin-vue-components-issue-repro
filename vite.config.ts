import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // your plugin installation
    Components({
      dts: true,
      // globs: [
      //   './src/components/customers/*.vue',
      //   './src/components/users/*.vue',
      // ],
      dirs: ['src/components/customers', 'src/components/users'],
      directoryAsNamespace: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

