export default defineNuxtConfig({
  devtools: {
    enabled: false
  },	
  modules: ['@nuxtjs/i18n', 'nuxt-studio', '@nuxtjs/mdc'],
  compatibilityDate: '2025-07-18',
  app:{
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'png', href: '/favicon.png' },
    ],
  },
  site: {
    name: 'XMPlus',
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  llms: {
    domain: 'https://docs.xmplus.dev',
    title: 'XMPlus',
    description: 'XMPlus proxy mangement panel',
    full: {
      title: 'XMPlus',
      description: 'XMPlus proxy mangement panel',
    },
  },
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'XMPlusDev',
      repo: 'XMPlusNuxt',
      branch: 'main',
      rootDir: 'docs',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }],
  },
})