# Plugin-Smart-Action

## 概述

Smart Action 是一个针对 ElizaOS 的插件，它引入了一种类似于区块链智能合约的快速开发方式。该插件利用自定义数据结构和自然语言状态描述自动生成新的状态逻辑。当与链上状态存储插件结合时，它可以快速创建基于 LLM 的智能合约，实现高效的状态管理和灵活的操作。

## 特性

- **快速插件开发**：通过简单的自然语言描述和自定义数据结构自动生成状态转换逻辑。
- **自然语言处理**：能够轻松解析用英文描述的状态转换。
- **链上状态存储集成**：通过链上存储插件安全地持久化和检索状态数据。
- **模块化设计**：遵循区块链智能合约的风格，使得扩展和维护变得容易。

## 技术细节

### 数据结构与状态生成

- **自定义数据结构**：开发者可以定义满足特定需求的状态数据结构，支持结构化和非结构化数据。这些结构可以动态扩展以适应不断变化的业务需求。
- **自然语言描述**：状态转换使用英文描述，插件会自动解析这些描述，并基于预定义的 JSON 模式生成新的状态对象。
- **链上集成**：该插件与链上状态存储无缝集成，确保状态数据的安全持久化以及历史状态数据的一致性检索。

### 插件实现

```typescript
interface SmartActionService extends Service {
    getInstance(): SmartActionService;

    static get serviceType(): ServiceType;

    async generateObject(
        state: Record<string, any>,
        prompt: string,
        modelClass: ModelClass,
        runtime: IAgentRuntime,
        _message: Memory,
        _state?: State,
    ): Promise<SmartActionResult>
}
```

该接口定义了核心的 SmartActionService，该服务负责根据当前状态和自然语言提示生成新的状态对象。

## SmartActionResult 文档

由 SmartActionService 生成的结果遵循 `SmartActionResult` 接口。该接口封装了状态转换过程的结果，其结构定义如下：

```typescript
interface SmartActionResult {
    result: boolean | false; // Indicates whether the state transition was successful.
    msg: string | null;      // Provides a success confirmation or an error explanation.
    states: [{
        key: string;         // The name of the state field that was updated.
        value: string;       // The new value for the state field.
    }] | null;                // An array of updated state entries.
}
```

所有更新的用户状态数据都存储在 `states` 数组中，便于开发者检索和处理更新后的状态信息。

## 资源

- [Smart Action快速开发指南](/zh/docs/smart-action/quick-start)
- [Smart Action GitHub 仓库](https://github.com/focai-acc/focEliza/tree/develop/packages/plugin-smart-action)
- [On-chain State Service 文档](/zh/blog/onchain-state.md)
