import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VantResolve()]
    })
  ],

  optimizeDeps: {
    exclude: ['eruda', 'lodash-es']
  },
  resolve: {
    alias: {
      lodash: 'lodash-es',
      '@vue/composition-api': 'vue'
    }
  }
})
