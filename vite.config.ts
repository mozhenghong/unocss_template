import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import * as path from "path"
import { presetAttributify, presetUno } from 'unocss'



// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    // 路径别名
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") },
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets' //指定生成静态资源的存放路径
  },
  // 本地开发配置
  server: {
    port: 8000,
    proxy: {
      "/prefix": {
        target: "http://101.36.33.9:8080",
        ws: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/prefix/, ""),
      },
    },
  },
  plugins: [
    react(),
    Unocss({
      presets: [
        presetAttributify({ /* preset options */ }),
        presetUno(),
        // ...custom presets
      ],
      rules: [
        // your custom rules,例如
        ['m-1', { margin: '0.25rem' }],
      ],
      shortcuts: [
        // you could still have object style
        {
          btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
        },
        // dynamic shortcuts
        [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],  // class="btn-green"
      ],
      preflights: [

      ],
      theme: {
        // ...
        colors: {
          'veryCool': '#0000ff', // class="text-very-cool"
          'brand': {
            'primary': '#FFE0E2', //class="bg-brand-primary"
          },
          yellow: {
            warning: '#FFC833'
          },
          pink: {
            bg: '#FFE0E2',
            line: '#FF6680'
          },
          gray: {
            scrollbar: '#CCCCCC',
            'search-border-line': '#D9D9D9',
            'meeting-box-line': '#E9E9E9'
          },
          'black-opacity': {
            '85': 'rgba(0, 0, 0, 0.85)',
            '65': 'rgba(0, 0, 0, 0.65)',
            '50': 'rgba(0, 0, 0, 0.50)',
            '45': 'rgba(0, 0, 0, 0.45)',
            '35': 'rgba(0, 0, 0, 0.35)',
            '30': 'rgba(0, 0, 0, 0.30)',
            '25': 'rgba(0, 0, 0, 0.25)',
            '12': 'rgba(0, 0, 0, 0.12)',
            '08': 'rgba(0, 0, 0, 0.08)',
            '06': 'rgba(0, 0, 0, 0.06)',
            '04': 'rgba(0, 0, 0, 0.04)'
          },
          'white-opacity': {
            '45': 'rgba(255, 255, 255, 0.45)'
          }
        },
      }
      /* options */
    })
  ]
})
