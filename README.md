# FocElizaWeb Documentation

This project uses [VitePress](https://vitepress.vuejs.org/) to build and manage documentation. Below are the steps to get started.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/focai-acc/focai-acc.github.io
   cd focai-acc.github.io
   ```

2. **Install Dependencies**
   Make sure you have Yarn installed. Then run:

   ```bash
   yarn install
   ```

3. **Start the Development Server**

   ```bash
   yarn dev
   ```

## Building the Documentation

To build the documentation for production, run:

```bash
yarn build
```

## Preview the Built Documentation

To preview the built documentation, run:

```bash
yarn preview
```

## Documentation Structure

The documentation is organized in the following structure:

```
docs/
├── collection/           # Product collection
│   ├── focEliza.md      # Main product overview
│   └── plugins/         # Plugin documentation
│       ├── verifiable-log.md
│       ├── onchain-da.md
│       └── ...
├── dev-community/       # Developer community docs
│   ├── introduction.md
│   ├── quick-start.md
│   ├── development-process.md
│   └── contributing.md
└── zh/                  # Chinese documentation
    ├── collection/      # Mirror of English collection
    └── dev-community/   # Mirror of English dev-community
```

When adding new documentation:
1. Place English documentation in the root directory
2. Place Chinese documentation in the `/zh` directory
3. Maintain the same file structure in both directories
4. Update the navigation menus accordingly

## Configuring Navigation

### Navigation Menu

Edit `.vitepress/config.mts` to update the navigation menu:

```typescript
// English navigation
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

// Chinese navigation
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

### Sidebar Menu

Configure the sidebar in `.vitepress/config.mts`:

```typescript
// English sidebar
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

// Chinese sidebar
'/zh/collection': [
  {
    text: '概述',
    items: [
      { text: 'focEliza', link: '/zh/collection/focEliza' }
    ]
  }
]
```

For more details, refer to the [VitePress documentation](https://vitepress.vuejs.org/).
