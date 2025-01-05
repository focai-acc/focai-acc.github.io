import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "focEliza",
  description: "Fully on-chain Eliza",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          {
            text: 'Product',
            link: '/product'
          },
          {
            text: 'DAO',
            link: '/dao'
          },
          {
            text: 'Resources',
            items: [
              { text: 'Documentation', link: 'https://foceliza.github.io' },
              { text: 'GitHub', link: 'https://github.com/focai-acc' }
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
            text: '产品',
            link: '/zh/product'
          },
          {
            text: 'DAO',
            link: '/zh/dao'
          },
          {
            text: '资源',
            items: [
              { text: '文档', link: 'https://foceliza.github.io' },
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
      '/product': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is focEliza?', link: '/product#overview' },
            { text: 'Getting Started', link: '/product#getting-started' }
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Runtime Proof', link: '/product#verifiable-runtime-proof' },
            { text: 'On-Chain Components', link: '/product#on-chain-components' },
            { text: 'TEE Support', link: '/product#tee-cluster-support' }
          ]
        }
      ],
      '/zh/product': [
        {
          text: '介绍',
          items: [
            { text: '什么是 focEliza?', link: '/zh/product#产品概述' },
            { text: '快速开始', link: '/zh/product#快速开始' }
          ]
        },
        {
          text: '功能特性',
          items: [
            { text: '运行时证明', link: '/zh/product#可验证运行时证明' },
            { text: '链上组件', link: '/zh/product#链上组件' },
            { text: 'TEE 支持', link: '/zh/product#tee-集群支持' }
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
