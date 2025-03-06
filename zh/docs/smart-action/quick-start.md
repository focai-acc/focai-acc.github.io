# Smart Action 快速入门指南

Smart Action 是 ElizaOS 的一个插件，灵感来源于区块链智能合约。它允许开发者利用自定义数据结构和自然语言描述快速生成状态转换逻辑。当与链上状态存储插件结合时，这种方法可以高效创建基于 LLM 的智能合约，实现灵活的操作和安全的状态管理。

## 1. 先决条件

- 按照 [Eliza 快速上手](https://elizaos.github.io/eliza/docs/quickstart/) 所指示，搭建 Eliza 环境。
- 参考 [Eliza Plugin](https://elizaos.github.io/eliza/docs/core/plugins/) 了解 Eliza 的插件机制以及插件开发方法。


## 2. 插件开发

SmartAction引用于插件开发，请参考[先决条件](#_1-先决条件), 准备好你所开发的插件package, 并在插件的实现中使用smartAction进行插件功能开发。

### 2.1 定义User State

定义将参与状态转换的用户状态数据。例如，在一个插件中你需要和用户名相关的输入，你可能会定义如下内容：

```typescript
const userState = {
  userName: "Eric",
};
```

### 2.2 定义自然语言状态转换描述

编写一个清晰的自然语言描述来概述状态转换逻辑：

```typescript
const smartAction = `
Your objective is to respond to the user and determine if they provided a username:

1. **Username Retrieval:**
   - Extract the username from the recent conversation:
     - If no username is found:
       * Respond with "Hello!"
       * Set \`hasName = false\`
     - If username is detected:
       * Respond with "Hello, {username}!"
       * Set \`hasName = true\`
`.trim();
```

该描述明确了需要smart action所需要的处理内容，从而确保生成的状态对象符合预期。

### 2.3 调用 Smart Action 服务生成结果

使用 ElizaOS 提供的运行时（```IAgentRuntime```），获取 ```SmartActionService``` 的实例，并调用 ```generateObject``` 方法以生成新的状态对象：

```typescript
import { SmartActionService } from "@elizaos/plugin-smart-action";

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

### 2.4 处理返回结果：SmartActionResult

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

如果运行上例子，返回的结果将会是：

```json
{
  "result": true,
  "msg": "Hello, Eric!",
  "states": [
    {
      "key": "hasName",
      "value": "true"
    }
  ]
}
```

运行以上步骤，已经成功开发了一个基于smart action的plguin. 你可以把result.msg通过callback返回给用户，并且根据result，处理states里面的内容。

### 2.5 链上读取/写入

使用smart action的接口进行链上存储和查询kv数据：

```typescript
// set
await smartActionService.setState(runtime, "{name-space}", `{key}`,'{value}'),
// get
await smartActionService.getState(runtime, "{name-space}", `{key}`)
```

## 3. 使用示例：身份认证场景

在身份认证插件（例如 ```plugin-foc-auth```）中，开发者使用 Smart Action 处理和更新用户状态。主要步骤如下：

1. **获取用户状态**：从链上状态存储或对话上下文中读取用户信息。
2. **定义状态描述**：编写自然语言描述，首先检查身份验证，然后在验证通过后更新用户详细信息。
3. **调用 SmartActionService**：生成更新后的状态对象并将其存储到链上状态存储中。

详细的工作流程和代码示例请参见身份认证提供者的实现。  
(参见 [identityAuth.ts](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/providers/identityAuth.ts)).


## 4. 参考资料

- [Smart Action 插件](/zh/collection/plugins/smart-action.md)
- [Smart Action GitHub 仓库](https://github.com/focai-acc/focEliza/tree/develop/packages/plugin-smart-action)
- [Onchain State](/zh/blog/onchain-state.md)


按照以上步骤，你可以快速开始使用 Smart Action 插件开发，将自然语言描述与自动状态转换相结合，从而加速业务逻辑开发，实现灵活的状态管理。

希望本指南能帮助你快速上手！
