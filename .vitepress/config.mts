import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "focEliza",
  description: "Fully on-chain Eliza",
  base: '/',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          {
            text: 'Collection',
            link: '/collection/focEliza'
          },
          {
            text: 'Dev Community',
            link: '/dev-community'
          },
          {
            text: 'Resources',
            items: [
              { text: 'Documentation', link: 'https://focai-acc.github.io/' },
              { text: 'GitHub', link: 'https://github.com/focai-acc' },
              { text: 'Discussions', link: 'https://github.com/focai-acc/focEliza/discussions' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          {
            text: '产品集',
            link: '/zh/collection/focEliza'
          },
          {
            text: '开发者社区',
            link: '/zh/dev-community'
          },
          {
            text: '资源',
            items: [
              { text: '文档', link: 'https://focai-acc.github.io/' },
              { text: 'GitHub', link: 'https://github.com/focai-acc' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    siteTitle: 'focEliza',
    logo: '/img/focElizaLogo.png',

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    sidebar: {
      '/collection': [
        {
          text: 'Overview',
          items: [
            { text: 'focEliza', link: '/collection/focEliza' }
          ]
        },
        {
          text: 'Plugins',
          items: [
            { text: 'Verifiable Log', link: '/collection/plugins/verifiable-log' },
            { text: 'On-chain DA', link: '/collection/plugins/onchain-da' },
            { text: 'GoPlus TEE', link: '/collection/plugins/goplus-tee' },
            { text: 'BitLife TEE', link: '/collection/plugins/bitlife-tee' },
            { text: 'Character Dynamic', link: '/collection/plugins/character-dynamic' },
            { text: 'Character GreenField', link: '/collection/plugins/character-greenfield' }
          ]
        }
      ],
      '/zh/collection': [
        {
          text: '概述',
          items: [
            { text: 'focEliza', link: '/zh/collection/focEliza' }
          ]
        },
        {
          text: '插件',
          items: [
            { text: 'Verifiable Log', link: '/zh/collection/plugins/verifiable-log' },
            { text: 'On-chain DA', link: '/zh/collection/plugins/onchain-da' },
            { text: 'GoPlus TEE', link: '/zh/collection/plugins/goplus-tee' },
            { text: 'BitLife TEE', link: '/zh/collection/plugins/bitlife-tee' },
            { text: 'Character Dynamic', link: '/zh/collection/plugins/character-dynamic' },
            { text: 'Character GreenField', link: '/zh/collection/plugins/character-greenfield' }
          ]
        }
      ],
      '/dev-community': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/dev-community/introduction' },
            { text: 'Quick Start', link: '/dev-community/quick-start' }
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Development Process', link: '/dev-community/development-process' },
            { text: 'Contributing', link: '/dev-community/contributing' }
          ]
        }
      ],
      '/zh/dev-community': [
        {
          text: '入门',
          items: [
            { text: '简介', link: '/zh/dev-community/introduction' },
            { text: '快速开始', link: '/zh/dev-community/quick-start' }
          ]
        },
        {
          text: '开发',
          items: [
            { text: '开发流程', link: '/zh/dev-community/development-process' },
            { text: '贡献指南', link: '/zh/dev-community/contributing' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/focai-acc' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright ©  present focEliza'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/img/focElizaLogo.png' }],
    ['style', {}, `
      :root {
        --vp-c-brand: #0147C4;
        --vp-c-brand-light: #2E69D6;
        --vp-c-brand-lighter: #5C8BE8;
        --vp-c-brand-dark: #0139A6;
        --vp-c-brand-darker: #012B88;
        --vp-home-hero-name-color: var(--vp-c-brand);
        --vp-button-brand-bg: var(--vp-c-brand);
        --vp-button-brand-hover-bg: var(--vp-c-brand-light);
      }
      .dark {
        --vp-home-hero-name-color: var(--vp-c-brand-light);
      }
    `]
  ]
})
