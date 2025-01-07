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

## 修改文件

- **内容**：修改 `/` 和 `/zh` 目录中的 markdown 文件。
- **导航**：更新 `.vitepress/config.mts` 中的导航菜单。

## 添加导航和侧边栏

- **导航菜单**：编辑 `.vitepress/config.mts` 中的 `themeConfig.nav`。
- **侧边栏菜单**：编辑 `.vitepress/config.mts` 中的 `themeConfig.sidebar`。

更多详情，请参考 [VitePress 文档](https://vitepress.vuejs.org/)。
