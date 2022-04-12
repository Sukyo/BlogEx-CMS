import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9090,
    strictPort: true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src') // 设置 @ 指向 src
    }
  },
})
