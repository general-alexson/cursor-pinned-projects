# Building the extension

## Prerequisites

- Node.js 20+
- npm

## Build and package a .vsix

From the repository root:

```bash
npm ci
npm run compile
npx @vscode/vsce package --no-dependencies
```

This produces `cursor-pinned-projects-<version>.vsix` (version from `package.json`). Install it via **Extensions → ⋯ → Install from VSIX…**.

## Scripts

| Script            | Description                    |
|-------------------|--------------------------------|
| `npm run compile` | Compile TypeScript to `out/`   |
| `npm run watch`   | Compile in watch mode          |
| `npm run lint`    | Run ESLint on `src/`           |

## Development

1. `npm install` then `npm run compile`.
2. Press **F5** to run the extension in a development host window.
3. Use a multi-root workspace in that window to test pin/unpin.

See [publishing.md](publishing.md) for publishing to Open VSX or the VS Code Marketplace.
