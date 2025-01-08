# Plugin-tee-onchain-da

## Overview

Eliza writes the "life" information of a specified AI agent—such as character files, memory, and keystore—into the blockchain (or DA layer) in near real-time. If the TEE node running the specified AI agent shuts down for any reason, another TEE node can download the AI agent's "life" data from the chain and resume its operation.

## Features

- **Real-time Data Synchronization**: Continuous syncing of AI agent state to blockchain
- **Secure Data Storage**: TEE-encrypted data storage on chain
- **Seamless Recovery**: Quick restoration of AI agent state on any TEE node
- **Version Control**: Ensures only compatible TEE versions can restore agents

## Technical Details

### Data Structure
- Character files
- Memory states
- Keystore information
- Runtime configurations

### Synchronization Process
1. State change detection
2. Data encryption in TEE
3. Blockchain transaction submission
4. Confirmation and verification

### Recovery Mechanism
- State verification
- Data decryption
- Environment preparation
- Agent restoration

## Implementation

```typescript
interface OnChainDA {
  // Write agent state to blockchain
  writeState(agentId: string, state: AgentState): Promise<string>;

  // Read agent state from blockchain
  readState(agentId: string): Promise<AgentState>;

  // Verify state integrity
  verifyState(agentId: string, state: AgentState): Promise<boolean>;
}
```

## Usage Example

```typescript
// Initialize the plugin
const onChainDA = new OnChainDAPlugin();

// Write agent state
const state = {
  character: characterData,
  memory: memoryData,
  keystore: keystoreData
};

const txHash = await onChainDA.writeState('agent-001', state);

// Read and restore agent state
const savedState = await onChainDA.readState('agent-001');
const isValid = await onChainDA.verifyState('agent-001', savedState);
```

## Configuration

```yaml
onchain-da:
  # Sync interval in seconds
  syncInterval: 60

  # Maximum state size in MB
  maxStateSize: 100

  # Blockchain configuration
  blockchain:
    endpoint: 'https://rpc.example.com'
    contract: '0x1234...'
```

## Security Considerations

1. **Data Protection**
   - TEE encryption
   - Access control
   - Version compatibility

2. **State Management**
   - Atomic updates
   - Consistency checks
   - Rollback mechanisms

3. **Network Security**
   - Secure RPC connections
   - Rate limiting
   - Error handling

## Resources

- [GitHub Repository](https://github.com/focai-acc/plugin-tee-onchain-da)
- [API Documentation](https://docs.focai-acc.io/plugins/onchain-da)
- [Integration Guide](https://docs.focai-acc.io/guides/onchain-da)