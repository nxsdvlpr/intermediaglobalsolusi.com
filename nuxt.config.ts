import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    APP_URL: process.env.APP_URL,
    API_ENDPOINT: process.env.BACKEND_URL + '/api',
  },

  css: ['@/assets/css/main.pcss'],

  typescript: {
    shim: false,
  },

  buildModules: [
    'nuxt-windicss',
  ],

  vite: {
    // @ts-ignore
    plugins: [
      ViteComponents({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            alias: {
              ipo: 'icon-park-outline',
            },
          }),
        ],
      }),
    ],
  },

  windicss: {
    analyze: true,
  },
})
