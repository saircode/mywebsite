// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },
  app: {
    head: {
      title: 'Sair Sánchez - Desarrollador Full Stack',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { name: 'description', content: 'Desarrollador Full Stack con +6 años de experiencia en Vue.js, Python, Laravel, AWS y GCP' },
        { name: 'author', content: 'Sair Sánchez' },
        { property: 'og:title', content: 'Sair Sánchez - Desarrollador Full Stack' },
        { property: 'og:description', content: 'Desarrollador Full Stack con +6 años de experiencia en Vue.js, Python, Laravel, AWS y GCP' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  }
})
