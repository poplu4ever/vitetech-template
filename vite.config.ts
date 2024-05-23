import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        // 'vue-router'
        VueRouterAutoImports,
        '@vueuse/core'
      ]
    }),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true
    }),
    Layouts({
      layoutsDir: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
