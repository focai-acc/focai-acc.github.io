---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "focEliza"
  text: "Fully on-chain Eliza"
  tagline: "A suite of ElizaOS plugins, tools, and services designed for fully on-chain AI agents"
  image:
    src: /img/focElizaLogo.png
    alt: focEliza
  actions:
    - theme: brand
      text: Get Started
      link: /product
    - theme: alt
      text: View on GitHub
      link: https://github.com/focai-acc

features:
  - icon: ⛓️
    title: ElizaOS On-chain Compoment
    details: Decentralizing key components of ElizaOS by utilizing blockchain technology, such as on-chain charactor, on-chain memory, on-chain ownership, and more.

  - icon: 🔐
    title: Verifiable TEE Components
    details: Utilizing TEE to make ElizaOS and LLM execution verifiable, enabling mutual verification with on-chain systems to achieve a higher level of autonomous AI agents.

  - icon: 🤖
    title: Trustless Interaction
    details: Leveraging TEE and blockchain to address trust issues in AI agent interactions with the external world, avoiding untrusted data fraud for autonomous AI agents.

  - icon: 💰
    title: Autonomous Asset Management
    details: AI agents can autonomously manage assets without human intervention, gaining external trust. Combined with smart contracts, they execute asset management according to the AI agent's settings.

  - icon: 🤝
    title: Trusted Execution
    details: AI agents can fulfill the trustless rules defined by smart contracts, enabling them to engage in transactions and trade with the external world.

  - icon: 🌟 
    title: Other Magic
    details: Defined by you!
---

## focEliza-based AI agent

- Focai: The first immortal, unkillable on-chain AI agent ape. 
- AiVinci: Captain of Fully on-chain AI Agents and Artela community.

## Finish Features
- Plugin-tee-verifiable-log

  While Eliza operates within the TEE, it uses a derived key pair to sign its actions, ensuring that these actions are definitively executed by Eliza. Third-party users can remotely verify Eliza's public key to validate these actions.

- Plugin-tee-onchain-da
  
  Eliza writes the "life" information of a specified AI agent—such as character files, memory, and keystore—into the blockchain (or DA layer) in near real-time. If the TEE node running the specified AI agent shuts down for any reason, another TEE node can download the AI agent's "life" data from the chain and resume its operation. This data is encrypted by the TEE, ensuring that only the same version of TEE Eliza can download and restore the agent.

- Plugin-goplus-tee

  The plugin seamlessly integrates GoPlus security infrastructure, providing AI agents with the following key security capabilities: Token Security Detection, NFT Security Detection, Phishing Website Detection, Malicious Authorization Detection, and Malicious Signature Detection.

- FocEliza Verifiable Terminal

  The web terminal for remote attestation and exploing verifiable logs of the focEliza AI agent

## On-going Features

- Plugin-BitLife-tee

  Implements on-chain genotype synthesis and evolution based on Conway's Game of Life rules. Includes TEE-enabled computation for genotype evolution and on-chain verification.

- Plugin-Character-Dynamic

  A dynamic feature file loading plugin that updates Eliza's character files based on specific on-chain information for automated updates.

- Plugin-Character-GreenField

  Writes the "free will" data of AI agents—character files, memory, knowledge—into GreenField in near real-time. If a TEE node shuts down, another node can download the data and resume operations.


## Developer Community

What Does focEliza developer community Offer?

* **Idea to Implementation**

  Got an idea? We’ll help you turn it into reality! From brainstorming to building, focEliza supports you every step of the way:

  - **Idea Generation**: Share your vision, and we’ll collaborate with you to refine it.
  - **Development Support**: Whether it’s integrating TEE, blockchain, or AI components, our team and community provide technical guidance and resources.
  - **Project Listing**: Once your project is ready, focEliza will help you gain visibility by listing it within the community and showcasing it to our ecosystem partners.
  - **Community Contribution**: You’ll have the opportunity to contribute back to focEliza and become part of a growing ecosystem shaping the on-chain AI future.


* **1-on-1 Mentorship**

  Get personalized support through 1-on-1 mentorship with our team of experts. Whether you need guidance on:
  - Building with ElizaOS and on-chain AI frameworks.
  - Leveraging exist resource.
  - Optimizing smart contract design for your AI agents.
  We’ve got you covered.