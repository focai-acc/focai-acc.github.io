# 贡献指南

## 入门指南

### 前置要求

在开始为 focEliza 做贡献之前，请确保你具备：

1. Node.js（v23 或更高版本）
2. pnpm
3. Git
4. GitHub 账号
5. TypeScript 和区块链技术的基础知识

### 设置开发环境

1. Fork 代码仓库
2. 克隆你的 fork：
   ```bash
   git clone https://github.com/focai-acc/focEliza.git
   cd focEliza
   ```
3. 安装依赖：
   ```bash
   pnpm install
   ```
4. 设置环境变量：
   ```bash
   cp .env.example .env
   # 编辑 .env 配置文件
   ```

## 开发工作流

### 1. 创建功能分支

```bash
# 创建并切换到新分支
git checkout -b feature/your-feature-name

# 对于错误修复
git checkout -b fix/bug-description

# 对于文档
git checkout -b docs/description
```

### 2. 进行更改

1. 遵循[编码标准](./best-practices.md)
2. 编写清晰简洁的提交信息
3. 为新功能添加测试
4. 根据需要更新文档

### 3. 提交指南

我们遵循约定式提交：

```bash
# 格式
<类型>(<范围>): <描述>

# 示例
feat(tee): 添加新的验证方法
fix(core): 解决内存泄漏问题
docs(api): 更新认证文档
test(core): 为状态管理添加单元测试
```

类型：
- `feat`: 新功能
- `fix`: 错误修复
- `docs`: 文档变更
- `style`: 代码风格变更（格式化等）
- `refactor`: 代码重构
- `test`: 添加或修改测试
- `chore`: 维护任务

### 4. 测试

```bash
# 运行所有测试
pnpm test

# 运行特定测试文件
pnpm test path/to/test

# 以监视模式运行测试
pnpm test:watch
```

### 5. 提交拉取请求

1. 推送你的更改：
   ```bash
   git push origin feature/your-feature-name
   ```

2. 在 GitHub 上创建拉取请求：
   - 使用清晰描述性的标题
   - 引用相关问题
   - 提供详细的更改说明
   - 包含 UI 更改的截图

3. 回应审查评论

4. 根据需要更新你的 PR：
   ```bash
   git add .
   git commit -m "fix: 处理审查评论"
   git push origin feature/your-feature-name
   ```

## 代码审查流程

### 我们关注的内容

1. 代码质量
   - 遵循 TypeScript 最佳实践
   - 适当的错误处理
   - 高效的算法
   - 清晰的命名约定

2. 测试
   - 充分的测试覆盖率
   - 测试边缘情况
   - 必要的集成测试

3. 文档
   - 清晰的代码注释
   - 更新的 API 文档
   - 适当的使用示例

4. 安全性
   - 不暴露敏感数据
   - 适当的输入验证
   - 安全的通信

### 审查时间线

- 初始审查：1-2 个工作日
- 后续审查：1 个工作日
- 最终批准：需要 1-2 个审查者

## 社区指南

### 交流渠道

1. GitHub Issues
   - 错误报告
   - 功能请求
   - 文档改进

2. 开发者论坛
   - 技术讨论
   - 架构提案
   - 最佳实践分享

### 行为准则

1. 保持尊重
   - 重视多样化观点
   - 使用包容性语言
   - 提供建设性反馈

2. 保持专业
   - 保持话题相关
   - 清晰的沟通
   - 跟进承诺

3. 保持协作
   - 分享知识
   - 帮助他人学习
   - 认可他人的工作

## 发布流程

### 版本编号

我们遵循语义化版本（主版本号.次版本号.修订号）：

- 主版本号：破坏性变更
- 次版本号：新功能（向后兼容）
- 修订号：错误修复（向后兼容）

### 发布清单

1. 更新版本号
2. 更新 CHANGELOG.md
3. 运行完整测试套件
4. 更新文档
5. 创建发布标签
6. 部署到预发布环境
7. 验证部署
8. 部署到生产环境

### 热修复流程

1. 创建热修复分支
2. 实现修复
3. 彻底测试
4. 更新修订号
5. 创建主分支 PR
6. 获得批准后部署

## 获取帮助

### 资源

1. 文档
   - API 参考
   - 架构指南
   - 最佳实践
   - 示例

2. 社区支持
   - Stack Overflow 标签
   - GitHub 讨论

3. 问题模板
   - 错误报告
   - 功能请求
   - 文档更新

### 联系方式

- 技术问题：[GitHub Issues](https://github.com/focai-acc/focEliza/issues)
- 普通问题：[GitHub Discussions](https://github.com/orgs/focai-acc/discussions)
