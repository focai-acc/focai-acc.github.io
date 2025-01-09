# Plugin-tee-verifiable-log

## Overview

**plugin-tee-verifiable-log** is about to launch! Soon, everyone will be able to remotely verify every action performed by Eliza through its web terminal. This will allow users to distinguish between actions genuinely executed by the AI agent and those falsified by administrators.

While Eliza operates within the TEE, it uses a derived key pair to sign its actions, ensuring that these actions are definitively executed by Eliza. Third-party users can remotely verify Eliza's public key to validate these actions.

we aim to make this magic happen!

The magical seed comes from [@shawmakesmagic](https://x.com/shawmakesmagic) [@PhalaNetwork](https://x.com/PhalaNetwork)'s work!

## Features

- **Action Signing**: Automatic signing of all Eliza actions using TEE-derived keys
- **Remote Verification**: Third-party verification of Eliza's actions
- **Transparent Logging**: Complete audit trail of all operations

## Technical Details

### Key Generation
- Secure key derivation within TEE
- Automatic key rotation policies
- Protected private key storage

### Verification Process
1. Action execution in TEE
2. Signature generation
3. Public verification
4. Log storage

### Integration Points
- TEE runtime environment
- Blockchain verification nodes
- External verification tools

## Security Considerations

1. **Key Management**
   - Secure key generation
   - Protected storage
   - Regular rotation

2. **Verification Process**
   - Multi-node verification
   - Timestamp validation
   - Signature integrity

3. **Log Protection**
   - Tamper-proof storage
   - Encrypted transmission
   - Backup procedures
