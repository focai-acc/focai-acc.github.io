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
            text: 'Docs',
            link: '/docs/focEliza'
          },
          {
            text: 'Collection',
            link: '/collection/focEliza'
          },
          {
            text: 'Dev Community',
            link: '/dev-community/introduction'
          },
          {
            text: 'Blog',
            link: '/blog/launching-foceliza-community'
          },
          {
            text: 'Resources',
            items: [
              { text: 'Documentation', link: 'https://focai-acc.github.io/' },
              { text: 'GitHub', link: 'https://github.com/focai-acc' },
              { text: 'Discussions', link: 'https://github.com/focai-acc/focEliza/discussions' }
            ]
          }
        ],
        sidebar: {
          '/blog/': [
            {
              text: 'Articles',
              items: [
                { text: 'Launching focEliza Community', link: '/blog/launching-foceliza-community' },
                { text: 'Verifiable Log Plugin', link: '/blog/verifiable-log-plugin' },
                { text: 'On-chain State', link: '/blog/onchain-state' },
                { text: 'GoPlus Security Plugin', link: '/blog/goplus-security-plugin' },
                { text: 'Verifiable Terminal', link: '/blog/verifiable-terminal' },
                { text: 'Why Fully On-chain', link: '/blog/why-fully-onchain' },
                { text: 'Future of Crypto', link: '/blog/future-of-crypto-2025' },
                { text: 'Setting Your Pet Rock Free', link: '/blog/setting-your-pet-rock-free' },
                { text: 'Interview with Vitalik', link: '/blog/interview-with-vitalik' }
              ]
            }
          ],
          '/docs/': [
            {
              text: 'Overview',
              items: [
                { text: 'FocEliza', link: '/docs/focEliza' },
                { text: 'Smart Action', link: '/docs/smart-action' }
              ]
            }
          ],
          '/collection/': [
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
                { text: 'Character GreenField', link: '/collection/plugins/character-greenfield' },
                { text: 'Smart Action', link: '/collection/plugins/smart-action' }
              ]
            }
          ],
          '/dev-community/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/dev-community/introduction' },
                { text: 'Quick Start', link: '/dev-community/quick-start' },
                { text: 'Quick Start Smart Action', link: '/dev-community/quick-start-smart-action' }
              ]
            },
            {
              text: 'Development',
              items: [
                { text: 'Development Process', link: '/dev-community/development-process' },
                { text: 'Contributing', link: '/dev-community/contributing' }
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          {
            text: '文档',
            link: '/zh/docs/focEliza'
          },
          {
            text: '产品集',
            link: '/zh/collection/focEliza'
          },
          {
            text: '开发者社区',
            link: '/zh/dev-community/introduction'
          },
          {
            text: '博客',
            link: '/zh/blog/launching-foceliza-community'
          },
          {
            text: '资源',
            items: [
              { text: '文档', link: 'https://focai-acc.github.io/' },
              { text: 'GitHub', link: 'https://github.com/focai-acc' },
              { text: '讨论', link: 'https://github.com/focai-acc/focEliza/discussions' }
            ]
          }
        ],
        sidebar: {
          '/zh/blog/': [
            {
              text: '文章',
              items: [
                { text: '启动 focEliza 公共社区', link: '/zh/blog/launching-foceliza-community' },
                { text: '可验证日志插件', link: '/zh/blog/verifiable-log-plugin' },
                { text: '链上状态', link: '/zh/blog/onchain-state' },
                { text: 'GoPlus Security 插件', link: '/zh/blog/goplus-security-plugin' },
                { text: '可验证终端', link: '/zh/blog/verifiable-terminal' },
                { text: '为什么要完全链上', link: '/zh/blog/why-fully-onchain' },
                { text: '加密的未来 2025', link: '/zh/blog/future-of-crypto-2025' },
                { text: '释放你的宠物石头', link: '/zh/blog/setting-your-pet-rock-free' },
                { text: '对话 Vitalik', link: '/zh/blog/interview-with-vitalik' }
              ]
            }
          ],
          '/zh/docs/': [
            {
              text: '概述',
              items: [
                { text: 'FocEliza', link: '/zh/docs/focEliza' },
                { text: 'Smart Action', link: '/zh/docs/smart-action' }
              ]
            }
          ],
          '/zh/collection/': [
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
                { text: 'Character GreenField', link: '/zh/collection/plugins/character-greenfield' },
                { text: 'Smart Action', link: '/zh/collection/plugins/smart-action' }
              ]
            }
          ],
          '/zh/dev-community/': [
            {
              text: '入门',
              items: [
                { text: '简介', link: '/zh/dev-community/introduction' },
                { text: '快速开始', link: '/zh/dev-community/quick-start' },
                { text: 'SmartAction快速开发指南', link: '/zh/dev-community/quick-start-smart-action' }
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
        }
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/focai-acc' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © present focEliza'
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
