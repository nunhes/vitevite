import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'gl',
  title: 'DAW 2025',
  description: 'Confección e publicación de páxinas web',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      /* {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }, */
      {
        text: 'Básicos',
        items: [{ text: 'Léeme', link: '/basicos/readme' }],
      },
      {
        text: 'Guías',
        items: [
          { text: 'HTML', link: '/guias/linguaxehtml' },
          { text: 'CSS', link: '/guias/follasdeestiloencascada' },
          { text: 'JavaScript', link: '/guias/javascript-fundamentos' },
        ],
      },
      {
        text: 'Unidades',
        items: [
          { text: 'UF1302', link: '/uf1302/readme' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nunhes/vitevite' },
    ],
    footer: {
      message: 'i.berndz.',
      copyright: '© 2019-present',
    },
  },
});
