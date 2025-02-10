import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/daw2025/',
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  },
  lang: 'gl',
  title: "DAW 2025",
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
    siteTitle: 'DAW 2025',
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
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    lastUpdated: {
      text: 'Updated at',
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
      message: 'i.berndz.',
      copyright: '© 2019-present'
    },
  },
  buildConcurrency: 1, // this will be very slow, but please check if out of heap issue happens with this too
})
