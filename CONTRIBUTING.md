# Contributing to Hawktask

We welcome contributions. This file explains how to report issues, propose changes, and submit code.

## Code of Conduct

Be respectful and constructive. Treat everyone with respect. We expect the same in issue and pull request discussions.

## How to Contribute

### Report a bug

1. Check existing [issues](https://github.com/username/hawktask/issues) to see if the bug is already reported.
2. Open a new issue. Use the bug report template if one exists.
3. Include steps to reproduce, what you expected, and what happened.
4. Add your environment (OS, Node version) when relevant.

### Suggest a feature

1. Open an issue with the feature label or title prefix "Feature:".
2. Describe the problem you want to solve and how the feature would help.
3. Optionally outline a possible solution or API.

### Submit a pull request

1. Fork the repository and clone your fork.
2. Create a branch from `main`: `git checkout -b fix/short-description` or `feature/short-description`.
3. Make your changes. Keep commits focused and messages clear.
4. Run the app and any tests: from repo root, `npm install`, then in `apps/web` run `npm run build` and `npm run dev`.
5. Push your branch and open a pull request against `main`.
6. Fill in the PR template. Link any related issues.
7. Wait for review. Address feedback by pushing new commits to the same branch.

### Review process

Maintainers will review your PR. They may ask for changes. Once approved, a maintainer will merge it.

## Project structure

- `apps/web`: Next.js app (marketing, dashboard, docs). Put app-level changes here.
- `packages/ui`: Shared components and design tokens. Use the existing design system. Add new components in `src/` and export from `index.ts`.
- `packages/animations`: Anime.js hooks and helpers. Keep animations short (200–400 ms) and subtle.

When you add or change UI, use the shared tokens and classes from `packages/ui/styles/` so the design stays consistent.

## Questions

Open a [GitHub Discussion](https://github.com/username/hawktask/discussions) or an issue with the "Question" label.

Thank you for contributing.
