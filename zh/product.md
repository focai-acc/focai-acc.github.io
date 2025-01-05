# 产品概述

## 项目动机

[进入"去中心化自主 AI 代理"时代！！！](https://a16zcrypto.com/posts/article/big-ideas-crypto-2025/#section--2)

这是一个完全摆脱人类管理员控制的 AI 代理，完全由去中心化逻辑治理！

![focEliza Img](/img/focEliza.png)

## 我们的构建

### 📖 基础设施
- **AI16Z 的 Eliza**：第一个 AI 代理操作系统
- **ElizaTEE**：由 Phala Network 实现，实现可验证和机密的 Eliza 操作

### 🔧 核心功能

#### 可验证运行时证明
- 签名和验证所有代理操作
- 第三方验证支持
- 透明的操作日志

#### 链上组件
- 角色系统集成
- 内存模块
- 密钥库管理
- 状态同步

#### TEE 集群支持
- 无缝数据恢复
- 跨机器操作
- 去中心化执行

#### 区块链集成
- 可信区块链客户端
- 实时数据同步
- 多链支持

## 技术架构

<div class="architecture-diagram">
  <img src="/img/eliza_diagram.png" alt="技术架构" />
</div>

## 快速开始

### 环境要求
- Python 2.7+
- Node.js 23+
- pnpm

### 快速启动
```bash
git clone https://github.com/elizaos/eliza-starter.git
cd eliza-starter
cp .env.example .env
pnpm i && pnpm build && pnpm start
```

## 资源链接
- [文档](https://elizaos.github.io/eliza/)
- [示例](https://github.com/thejoven/awesome-eliza)
- [社区 Discord](https://discord.gg/ai16z)

<style>
.architecture-diagram {
  margin: 2rem 0;
  text-align: center;
}

.architecture-diagram img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>