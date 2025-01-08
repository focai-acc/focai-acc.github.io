# Contributing Guide

## Getting Started

### Prerequisites

Before you begin contributing to focEliza, ensure you have:

1. Node.js (v23 or higher)
2. pnpm
3. Git
4. A GitHub account
5. Basic knowledge of TypeScript and blockchain technology

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/focai-acc/focEliza.git
   cd focEliza
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## Development Workflow

### 1. Creating a Feature Branch

```bash
# Create and checkout a new branch
git checkout -b feature/your-feature-name

# For bug fixes
git checkout -b fix/bug-description

# For documentation
git checkout -b docs/description
```

### 2. Making Changes

1. Follow the [coding standards](./best-practices.md)
2. Write clear, concise commit messages
3. Add tests for new features
4. Update documentation as needed

### 3. Commit Guidelines

We follow conventional commits:

```bash
# Format
<type>(<scope>): <description>

# Examples
feat(tee): add new verification method
fix(core): resolve memory leak
docs(api): update authentication docs
test(core): add unit tests for state management
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

### 4. Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test path/to/test

# Run tests in watch mode
pnpm test:watch
```

### 5. Submitting a Pull Request

1. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request on GitHub:
   - Use a clear, descriptive title
   - Reference any related issues
   - Provide detailed description of changes
   - Include screenshots for UI changes

3. Respond to review comments

4. Update your PR if needed:
   ```bash
   git add .
   git commit -m "fix: address review comments"
   git push origin feature/your-feature-name
   ```

## Code Review Process

### What We Look For

1. Code Quality
   - Follows TypeScript best practices
   - Proper error handling
   - Efficient algorithms
   - Clear naming conventions

2. Testing
   - Adequate test coverage
   - Test edge cases
   - Integration tests where needed

3. Documentation
   - Clear code comments
   - Updated API documentation
   - Example usage where appropriate

4. Security
   - No sensitive data exposure
   - Proper input validation
   - Secure communication

### Review Timeline

- Initial review: 1-2 business days
- Follow-up reviews: 1 business day
- Final approval: 1-2 reviewers required

## Community Guidelines

### Communication Channels

1. GitHub Issues
   - Bug reports
   - Feature requests
   - Documentation improvements

2. Developer Forums
   - Technical discussions
   - Architecture proposals
   - Best practices sharing

### Code of Conduct

1. Be Respectful
   - Value diverse opinions
   - Use inclusive language
   - Be constructive in feedback

2. Be Professional
   - Stay on topic
   - Write clear communications
   - Follow up on commitments

3. Be Collaborative
   - Share knowledge
   - Help others learn
   - Credit others' work

## Release Process

### Version Numbering

We follow semantic versioning (MAJOR.MINOR.PATCH):

- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

### Release Checklist

1. Update version number
2. Update CHANGELOG.md
3. Run full test suite
4. Update documentation
5. Create release tag
6. Deploy to staging
7. Verify deployment
8. Deploy to production

### Hotfix Process

1. Create hotfix branch
2. Implement fix
3. Test thoroughly
4. Update patch version
5. Create PR for main
6. Deploy after approval

## Getting Help

### Resources

1. Documentation
   - API reference
   - Architecture guides
   - Best practices
   - Examples

2. Community Support
   - Stack Overflow tags
   - GitHub discussions

3. Issue Templates
   - Bug reports
   - Feature requests
   - Documentation updates

### Contact

- Technical Issues: [GitHub Issues](https://github.com/focai-acc/focEliza/issues)
- General Questions: [GitHub Discussions](https://github.com/orgs/focai-acc/discussions)
