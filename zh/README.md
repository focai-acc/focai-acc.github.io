# FocElizaWeb 文档

该项目使用 [VitePress](https://vitepress.vuejs.org/) 来构建和管理文档。以下是入门步骤。

## 开始

1. **克隆仓库**

   ```bash
   git clone https://github.com/focai-acc/focai-acc.github.io
   cd focai-acc.github.io
   ```

2. **安装依赖**
   确保已安装 Yarn。然后运行：

   ```bash
   yarn install
   ```

3. **启动开发服务器**

   ```bash
   yarn dev
   ```

## 构建文档

要为生产环境构建文档，请运行：

```bash
yarn build
```

## 预览构建的文档

要预览构建的文档，请运行：

```bash
yarn preview
```

## 文档结构

文档按以下结构组织：

```
docs/
├── collection/           # 产品集
│   ├── focEliza.md      # 主产品概述
│   └── plugins/         # 插件文档
│       ├── verifiable-log.md
│       ├── onchain-da.md
│       └── ...
├── dev-community/       # 开发者社区文档
│   ├── introduction.md
│   ├── quick-start.md
│   ├── development-process.md
│   └── contributing.md
└── zh/                  # 中文文档
    ├── collection/      # 对应英文 collection
    └── dev-community/   # 对应英文 dev-community
```

添加新文档时：
1. 将英文文档放在根目录
2. 将中文文档放在 `/zh` 目录
3. 在两个目录中保持相同的文件结构
4. 相应地更新导航菜单

## 配置导航

### 导航菜单

编辑 `.vitepress/config.mts` 来更新导航菜单：

```typescript
// 英文导航
themeConfig: {
  nav: [
    {
      text: 'Collection',
      link: '/collection/focEliza'
    },
    {
      text: 'Dev Community',
      link: '/dev-community'
    }
  ]
}

// 中文导航
locales: {
  zh: {
    themeConfig: {
      nav: [
        {
          text: '产品集',
          link: '/zh/collection/focEliza'
        },
        {
          text: '开发者社区',
          link: '/zh/dev-community'
        }
      ]
    }
  }
}
```

### 侧边栏菜单

在 `.vitepress/config.mts` 中配置侧边栏：

```typescript
// 英文侧边栏
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
        { text: 'Verifiable Log', link: '/collection/plugins/verifiable-log' }
      ]
    }
  ]
}

// 中文侧边栏
'/zh/collection': [
  {
    text: '概述',
    items: [
      { text: 'focEliza', link: '/zh/collection/focEliza' }
    ]
  }
]
```

更多详情，请参考 [VitePress 文档](https://vitepress.vuejs.org/)。
