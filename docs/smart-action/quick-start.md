# Smart Action Quick Start Guide

Smart Action is a plugin for ElizaOS inspired by blockchain smart contracts. It allows developers to rapidly generate state transition logic using custom data structures and natural language descriptions. When combined with an on-chain state storage plugin, this approach enables the efficient creation of LLM-based smart contracts with flexible operations and secure state management.

## 1. Prerequisites

- Set up the Eliza environment as directed in [Eliza Quickstart](https://elizaos.github.io/eliza/docs/quickstart/).
- Refer to [Eliza Plugin](https://elizaos.github.io/eliza/docs/core/plugins/) for information on Eliza's plugin mechanism and plugin development methods.

## 2. Plugin Development

SmartAction is used in plugin development. Please refer to [Prerequisites](#_1-prerequisites) to prepare your plugin package, and utilize smartAction in your plugin implementation to develop plugin functionalities.


### 2.1 Define User State

Define the user state data that will participate in the state transition. For example, in a plugin where you need inputs related to the username, you might define something like the following:

```typescript
const userState = {
  userName: "Eric",
};
```

### 2.2 Define Natural Language State Transition Description

Write a clear natural language description that outlines the state transition logic:

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

This description clearly specifies the processing content required by smart action, ensuring that the generated state object meets the expected outcomes.

### 2.3 Invoke the Smart Action Service to Generate the Result

Using the runtime provided by ElizaOS (```IAgentRuntime```), obtain an instance of ```SmartActionService``` and call the ```generateObject``` method to produce the new state object:

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

The above code composes the current state and natural language prompt to generate a state update result conforming to the predefined JSON schema. Developers can then use this result to proceed with the necessary business logic.  
(Refer to the [identity authentication example](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/actions/identityAuth.ts)).

### 2.4 Handling the Return Result: SmartActionResult

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

If the above example is executed, the returned result will be:

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

After executing the above steps, a smart action-based plugin has been successfully developed. You can return `result.msg` to the user via a callback, and handle the content in `states` based on the result.

### 2.5 On-chain Read/Write

Use the smart action interface to store and query key-value data on-chain:

```typescript
// set
await smartActionService.setState(runtime, "{name-space}", `{key}`, '{value}'),
// get
await smartActionService.getState(runtime, "{name-space}", `{key}`)
```

## 3. Usage Example: Identity Authentication Scenario

In an identity authentication plugin (e.g., ```plugin-foc-auth```), developers use Smart Action to process and update user state. The main steps are:

1. **Retrieve User State**: Read user information from on-chain state storage or the conversation context.
2. **Define the State Description**: Write a natural language description that first checks authentication and then updates user details if authentication is valid.
3. **Invoke SmartActionService**: Generate the updated state object and store it in the on-chain state storage.

Detailed workflow and code examples can be found in the identity authentication provider implementation.  
(See [identityAuth.ts](https://github.com/focai-acc/focEliza/blob/develop/packages/plugin-foc-auth/src/providers/identityAuth.ts)).

## 4. References

- [Smart Action Plugin](/collection/plugins/smart-action.md)
- [Smart Action GitHub Repository](https://github.com/focai-acc/focEliza/tree/develop/packages/plugin-smart-action)
- [On-chain State Service Documentation](/blog/onchain-state.md)

By following these steps, you can quickly start developing with the Smart Action plugin, integrating natural language descriptions with automatic state transitions to accelerate business logic development and achieve flexible state management.

Hope this guide helps you get started!
