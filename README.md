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

## Modifying Files

- **Content**: Modify the markdown files in the `/` and `/zh` directory.
- **Navigation**: Update the navigation menu in `.vitepress/config.mts`.

## Adding Navigation and Sidebar

- **Navigation Menu**: Edit the `themeConfig.nav` in `.vitepress/config.mts`.
- **Sidebar Menu**: Edit the `themeConfig.sidebar` in `.vitepress/config.mts`.

For more details, refer to the [VitePress documentation](https://vitepress.vuejs.org/).
