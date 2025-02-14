# Smart Action Quick Start Guide

Smart Action is a plugin for ElizaOS inspired by blockchain smart contracts. It allows developers to rapidly generate state transition logic using custom data structures and natural language descriptions. When combined with an on-chain state storage plugin, this approach enables the efficient creation of LLM-based smart contracts with flexible operations and secure state management.

---

## 1. Features and Benefits

- **Rapid Development**: Automatically generate state transformation logic using natural language descriptions, eliminating the need to write extensive business code.
- **Natural Language Processing**: Convert plain English descriptions into actionable state transitions.
- **On-Chain State Storage Integration**: Seamlessly interface with on-chain state storage services to persist and verify state data securely.
- **Modular Design**: Emulates blockchain smart contract development, making it easy to extend and maintain.

> Refer to the overall Smart Action plugin documentation for further details.

---

## 2. Technical Overview

### 2.1 Custom Data Structures

- **State Data**: Developers can define arbitrary key-value pairs, supporting both structured and unstructured data.
- **Flexible Extension**: The design is highly extensible to accommodate evolving business requirements.

### 2.2 Natural Language Description and State Generation

- **State Description**: Use plain text to describe the business logic, which is directly transformed into a state transition process.
- **Automatic Generation**: The internal ```generateObject``` method parses the natural language description against a predefined JSON schema (using Zod for validation) to generate a new state object.
- **Context Composition**: Before generating the state, the ```composeSmartActionContext``` method builds a complete prompt including the current state, role information, and conversation context to ensure the generated logic aligns with the business scenario.  
  (Refer to the [composeSmartActionContext](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-smart-action/src/lib/index.ts)).

### 2.3 Service Implementation

The core service, ```SmartActionService```, is implemented in ```plugin-smart-action/src/index.ts``` and encapsulates initialization and state generation logic. Key methods include:

- **getInstance()**: Returns the service instance.
- **generateObject(...)**: Accepts the current state, natural language prompt, model type, and other parameters, composes the complete context, and then invokes the core generation logic to produce the result.  
  (See the [SmartActionService](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-smart-action/src/index.ts)).

---

## 3. Quick Start Development Steps

Below is an example workflow for developing and using Smart Action:

### 3.1 Environment Setup

Ensure that your project includes the ElizaOS core modules (e.g., ```@elizaos/core```) and necessary dependencies (such as ```zod``` for validation).

### 3.2 Define the User State

Define the user state data that will participate in the state transition. For example, in an identity authentication scenario, you might define:

```typescript
const userState = {
  userId: userId,
  needAuth: await auth(userId),
  nickname: currentNickname,
};
```

### 3.3 Define the Natural Language State Transition Description

Write a clear natural language description that outlines the state transition logic:

```typescript
const smartAction = `
Your objective is to manage and update the user's information according to the following precise steps:

1. **Authentication Verification:**
   - Check the \`needAuth\` field in the provided \`UserState\`.
   - **If \`needAuth\` is \`true\`:**
     - Immediately output a JSON response indicating that identity verification is required.
     - Do not modify or update any state.
   - **If \`needAuth\` is `false`:**
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

This description clarifies the authentication logic and specifies the fields to update, ensuring the generated state object meets expectations.

### 3.4 Invoke the Smart Action Service to Generate the Result

Using the runtime provided by ElizaOS (```IAgentRuntime```), obtain an instance of ```SmartActionService``` and call the ```generateObject``` method to produce the new state object:

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

The above code composes the current state and natural language prompt to generate a state update result conforming to the predefined JSON schema. Developers can then use this result to proceed with the necessary business logic.  
(Refer to the [identity authentication example](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/actions/identityAuth.ts)).

### 3.5 Understanding SmartActionResult

The result returned by ```generateObject``` follows the ```SmartActionResult``` interface. This structure is defined as:

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

- **result**: A boolean indicating whether the state transition was successful.
- **msg**: A message providing either a success confirmation or an error explanation.
- **states**: An array of key-value pairs representing the updated state data. All user state data that has been updated is stored in this field.

---

## 4. Usage Example: Identity Authentication Scenario

In an identity authentication plugin (e.g., ```plugin-foc-auth```), developers use Smart Action to process and update user state. The main steps are:

1. **Retrieve User State**: Read user information from on-chain state storage or the conversation context.
2. **Define the State Description**: Write a natural language description that first checks authentication and then updates user details if authentication is valid.
3. **Invoke SmartActionService**: Generate the updated state object and store it in the on-chain state storage.

Detailed workflow and code examples can be found in the identity authentication provider implementation.  
(See [identityAuth.ts](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/providers/identityAuth.ts)).

---

## 5. References

- [Smart Action Plugin](/collection/plugins/smart-action.md)
- [Smart Action GitHub Repository](https://github.com/focai-acc/focEliza/tree/develop/packages/plugin-smart-action)
- [On-chain State Service Documentation](/blog/onchain-state.md)

---

By following these steps, you can quickly start developing with the Smart Action plugin, integrating natural language descriptions with automatic state transitions to accelerate business logic development and achieve flexible state management.

Hope this guide helps you get started!
