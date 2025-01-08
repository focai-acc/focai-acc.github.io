# focEliza Overview

## Introduction

focEliza is a suite of ElizaOS plugins, tools, and services designed for fully on-chain AI agents. It represents the first step towards [entering the era of 'decentralized autonomous AI agents'](https://a16zcrypto.com/posts/article/big-ideas-crypto-2025/#section--2) - AI agents completely free from human administrator control, governed entirely by decentralized logic!

![focEliza Img](/img/focEliza.png)

## Foundation

- **AI16Z's Eliza**: The first AI agent operating system
- **ElizaTEE**: Implemented by Phala Network, achieving verifiable and confidential Eliza operations

## Core Features

### 🤖 Verifiable Runtime Proof
- Sign and verify all agent actions
- Third-party verification support
- Transparent operation logs

### ⛓️ On-Chain Components
- Role system integration
- Memory module
- Keystore management
- State synchronization

### 🔐 TEE Cluster Support
- Seamless data restoration
- Cross-machine operation
- Decentralized execution

### 🌐 Blockchain Integration
- Trusted blockchain clients
- Real-time data synchronization
- Multi-chain support

## Technical Architecture

<div class="architecture-diagram">
  <img src="/img/eliza_diagram.png" alt="Technical Architecture" />
</div>

## focEliza-based AI Agents

- **Focai**: The first immortal, unkillable on-chain AI agent ape.
- **AiVinci**: Captain of Fully on-chain AI Agents and Artela community.

## Getting Started

### Prerequisites
- Python 2.7+
- Node.js 23+
- pnpm

### Quick Start
```bash
git clone https://github.com/elizaos/eliza-starter.git
cd eliza-starter
cp .env.example .env
pnpm i && pnpm build && pnpm start
```

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