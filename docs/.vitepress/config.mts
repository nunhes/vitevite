import { defineConfig } from 'vitepress';
// import { withMermaid } from "vitepress-plugin-mermaid";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/daw2025/',
  vite: {
    optimizeDeps: {
      exclude: ['@vue/devtools-api', '@vueuse/core']
    },
    resolve: {
      preserveSymlinks: true
    }
  },
  lang: 'gl',
  title: "DAW🧊2025",
  description: "Confección e publicación de páxinas web ",


  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  ],
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.svg',
    siteTitle: 'DAW🧊2025',
    nav: [
      { text: 'Home', link: 'https://bitsolto.com/daw2025/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Básicos',
        items: [
          { text: 'Léeme', link: '/basicos/readme' },
        ]
      },
      {
        text: 'Guías',
        items: [
          { text: 'HTML', link: '/guias/linguaxehtml' },
          { text: 'CSS', link: '/guias/follasdeestiloencascada' },
          { text: 'JavaScript', link: '/guias/javascript-fundamentos' },
          { text: 'Markdown', link: '/guias/markdown' },
        ]
      },
      {
        text: 'Unidades',
        items: [
          { text: 'UF1302', link: '/uf1302/readme' },
          { text: 'UF1303', link: '/uf1303/readme' },
          { text: 'UF1304', link: '/uf1304/readme' },
          { text: 'UF1305', link: '/uf1305/readme' },
          { text: 'UF1306', link: '/uf1306/readme' },
          { text: 'MF0952', link: '/mf0952/readme' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    lastUpdated: {
      text: 'Actualizado o',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/nunhes/vitevite',
        ariaLabel: 'Github link'
      }
    ],
    footer: {
      message: 'DAW🧊2025',
      copyright: 'i.berndz © 2019-present'
    },
    externalLinkIcon: true,
    outlineTitle: 'Nesta paxina'
  },
  buildConcurrency: 1, // this will be very slow, but please check if out of heap issue happens with this too
})
