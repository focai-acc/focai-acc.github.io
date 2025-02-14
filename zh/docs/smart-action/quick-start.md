# Smart Action 快速入门指南

Smart Action 是 ElizaOS 的一个插件，灵感来源于区块链智能合约。它允许开发者利用自定义数据结构和自然语言描述快速生成状态转换逻辑。当与链上状态存储插件结合时，这种方法可以高效创建基于 LLM 的智能合约，实现灵活的操作和安全的状态管理。

---

## 1. 特性与优势

- **快速开发**：通过自然语言描述自动生成状态转换逻辑，无需编写大量业务代码。
- **自然语言处理**：将纯英文描述转换为可执行的状态转换操作。
- **链上状态存储集成**：可以无缝对接链上状态存储服务，安全持久地保存和验证状态数据。
- **模块化设计**：仿照区块链智能合约的开发方式，易于扩展和维护。

> 有关更多详细信息，请参阅 Smart Action 插件的总体说明文档。

---

## 2. 技术概览

### 2.1 自定义数据结构

- **状态数据**：开发者可以定义任意键值对数据，支持结构化和非结构化数据。
- **灵活扩展**：设计具有高度可扩展性，以适应不断变化的业务需求。

### 2.2 自然语言描述与状态生成

- **状态描述**：使用纯英文描述业务逻辑，该描述会被直接转换为状态转换流程。
- **自动生成**：内部的 ```generateObject``` 方法根据预定义的 JSON 模式（利用 Zod 进行验证）解析自然语言描述，从而生成新的状态对象。
- **上下文组合**：在生成状态之前，```composeSmartActionContext``` 方法会构建一个完整的提示，其中包含当前状态、角色信息和对话上下文，确保生成的逻辑与业务场景相匹配。  
  (参见 [composeSmartActionContext 源码](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-smart-action/src/lib/index.ts)).

### 2.3 服务实现

核心服务 ```SmartActionService``` 实现于 ```plugin-smart-action/src/index.ts``` 中，它封装了初始化和状态生成逻辑。主要方法包括：

- **getInstance()**：返回服务实例。
- **generateObject(...)**：接收当前状态、自然语言提示、模型类型等参数，组合完整上下文后调用核心生成逻辑并返回结果。  
  (参见 [SmartActionService 源码](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-smart-action/src/index.ts)).

---

## 3. 快速入门开发步骤

### 3.1 环境配置

确保你的项目包含 ElizaOS 核心模块（例如 ```@elizaos/core```）以及必要的依赖（例如用于验证的 ```zod```）。

### 3.2 定义用户状态

定义将参与状态转换的用户状态数据。例如，在身份认证场景中，你可能会定义如下内容：

```typescript
const userState = {
  userId: userId,
  needAuth: await auth(userId),
  nickname: currentNickname,
  description: currentDescription,
  avatarUrl: currentAvatarUrl,
  email: currentEmail,
  options: currentOptions,
};
```

### 3.3 定义自然语言状态转换描述

编写一个清晰的自然语言描述来概述状态转换逻辑：

```typescript
const smartAction = `
Your objective is to manage and update the user's information according to the following precise steps:

1. **Authentication Verification:**
   - Check the \`needAuth\` field in the provided \`UserState\`.
   - **If \`needAuth\` is \`true\`:**
     - Immediately output a JSON response indicating that identity verification is required.
     - Do not modify or update any state.
   - **If \`needAuth\` is \`false\`:**
     - Proceed with updating the user information.

2. **Extracting User Updates:**
   - Analyze the recent conversation to determine if the user has provided updated details.
   - The required fields to update are:
     - \`userId\` - copy directly from the \`UserState\`.
     - \`nickname\`
     - \`description\`
     - \`avatarUrl\`
     - \`email\`
     - \`options\`
   - For each field:
     - If a new value is explicitly provided in the conversation, use that new value.
     - If no new value is provided, retain the existing value from the \`UserState\`.
`.trim();
```

该描述明确了身份验证逻辑并指定了需要更新的字段，从而确保生成的状态对象符合预期。

### 3.4 调用 Smart Action 服务生成结果

使用 ElizaOS 提供的运行时（```IAgentRuntime```），获取 ```SmartActionService``` 的实例，并调用 ```generateObject``` 方法以生成新的状态对象：

```typescript
import { SmartActionService, SmartActionResult } from "@elizaos/plugin-smart-action";

const smartActionService = runtime.getService<SmartActionService>(ServiceType.SMART_ACTION);
const result: SmartActionResult = await smartActionService.generateObject(
  userState,
  smartAction,
  ModelClass.LARGE,
  runtime,
  _message,
  _state
);
```

上述代码将当前状态与自然语言提示组合在一起，生成符合预定义 JSON 模式的状态更新结果。开发者可根据此结果继续处理相应的业务逻辑。  
(参见 [身份认证示例](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/actions/identityAuth.ts)).

### 3.5 理解 SmartActionResult

```generateObject``` 方法返回的结果遵循 ```SmartActionResult``` 接口，该结构定义如下：

```typescript
interface SmartActionResult {
    result: boolean | false;
    msg: string | null;
    states: [{
        key: string;
        value: string;
    }] | null;
}
```

- **result**：布尔值，指示状态转换是否成功。
- **msg**：消息字段，提供成功确认或错误说明。
- **states**：键值对数组，表示更新后的状态数据。所有更新后的用户状态数据均存储在此字段中。

---

## 4. 使用示例：身份认证场景

在身份认证插件（例如 ```plugin-foc-auth```）中，开发者使用 Smart Action 处理和更新用户状态。主要步骤如下：

1. **获取用户状态**：从链上状态存储或对话上下文中读取用户信息。
2. **定义状态描述**：编写自然语言描述，首先检查身份验证，然后在验证通过后更新用户详细信息。
3. **调用 SmartActionService**：生成更新后的状态对象并将其存储到链上状态存储中。

详细的工作流程和代码示例请参见身份认证提供者的实现。  
(参见 [identityAuth.ts](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/providers/identityAuth.ts)).

---

## 5. 参考资料

- [Smart Action 插件](/zh/collection/plugins/smart-action.md)
- [Smart Action GitHub 仓库](https://github.com/focai-acc/focEliza/tree/develop/packages/plugin-smart-action)
- [Onchain State](/zh/blog/onchain-state.md)

---

按照以上步骤，你可以快速开始使用 Smart Action 插件开发，将自然语言描述与自动状态转换相结合，从而加速业务逻辑开发，实现灵活的状态管理。

希望本指南能帮助你快速上手！
