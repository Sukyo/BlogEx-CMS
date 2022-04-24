import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { loadEnv } from 'vite'
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_BASE, // 部署后的base,会挂到import.meta.env.BASE_URL上
    server: {
      port: 8088,
      cors: true,
      force: true,
      hmr: true,
      host: 'localhost',
      strictPort: true, // 严格端口 true:如果端口已被使用，则直接退出，而不会再进行后续端口的尝试。
      /**
       * @description 解决chrome设置origin:*也跨域机制,代理/api前缀到服务基地址
       * 最终的地址会将axios设置的baseUrl:/api代理拼接成[target][/api],然后通过rewrite重写掉/api为'' 这样就是我们真实的基地址了
       */
      proxy: {
        '/api': {
          target: 'http://spzgczyj.top:20010',
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        'blogex-cms': resolve(__dirname, 'src') // 设置项目根路径别名指向src
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.vue', '.json'], // 扩展名
    },
    css: {
      preprocessorOptions: {
        // scss预处理器选项 配置全局scss
        scss: {
          additionalData: `
            @import "blogex-cms/styles/common.scss";
          `
        }
      }
    },
  })
} 
