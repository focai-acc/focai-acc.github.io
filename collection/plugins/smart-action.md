# Plugin-Smart-Action

## Overview

Smart action is a plugin for ElizaOS that introduces a rapid development approach reminiscent of blockchain smart contracts. By leveraging custom data structures and natural language state descriptions, developers can automatically generate new state logic. When combined with an on-chain state storage plugin, it enables the swift creation of LLMs-based smart contracts with efficient state management and flexible operations.

## Features

- **Rapid Plugin Development**: Automatically generate state transformation logic using natural language descriptions and custom data structures.
- **Natural Language Processing**: Interpret state transitions described in plain English, lowering the barrier for development.
- **On-Chain State Storage Integration**: Seamlessly integrate with on-chain state storage plugins to securely persist and retrieve state data.
- **Modular Design**: Emulates the development style of blockchain smart contracts, making it easy to extend and maintain.

## Technical Details

### Data Structure

- **Custom Data Structures**: Developers can define tailored state data structures to suit their needs, supporting both structured and unstructured data. When provided with these data, users can dynamically customize and control state transitions.
- **Flexible Extension**: The design of these data structures is highly extensible, accommodating evolving business requirements.

### State Description & Generation

- **Natural Language Description**: Use plain English to describe state transitions, offering an intuitive method to articulate business logic.
- **State Generation Mechanism**: Automatically parse the natural language description to generate new states, enabling dynamic updates and iterative improvements.

### Integration with On-Chain Storage

- **State Storage**: Utilizes on-chain state storage plugins to securely persist state data.
- **State Retrieval & Verification**: Supports retrieving historical state data from the chain and verifying its integrity, ensuring consistent state management.

## Implementation

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

## Usage Example

### 1. Define the User State

The user state specifies the custom data required during state transitions. You can combine it with the prompt to include any necessary input data. For example:

```typescript
const userState = {
    userId: userId,
    ifAuth: await auth(userId)
};
```

### 2. Define the Prompt for State Transition

Describe the desired processing steps using natural language as the task for the smart action. For instance:

```typescript
const smartAction = `
Your objective is to manage and update the user's information according to the following precise steps:

1. **Authentication Verification:**
    - Check the \`ifAuth\` field in the provided \`UserState\`.
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
    - For each field:
      - If a new value is explicitly provided in the conversation, use that new value.
      - If no new value is provided, retain the existing value from the \`UserState\`.
`.trim();
```

### 3. Invoke the Service to Generate the Result

Import the service and call the method to generate the new state object:

```typescript
import { SmartActionService, SmartActionResult } from "@elizaos/plugin-smart-action";

const smartActionService = runtime.getService<SmartActionService>(ServiceType.SMART_ACTION);
const result = await smartActionService.generateObject(
    userState,
    smartAction,
    ModelClass.LARGE,
    runtime,
    _message,
    _state
);
```

## Resources

- [Smart Action GitHub Repository](https://github.com/focai-acc/focEliza/tree/main/packages/plugin-smart-action)
- [Onchain State Service](/blog/onchain-state.md)
