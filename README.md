# Pinned Projects

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VS Code 1.85+](https://img.shields.io/badge/VS%20Code-1.85%2B-blue?logo=visualstudiocode)](https://code.visualstudio.com/)
[![Cursor](https://img.shields.io/badge/Cursor-Extension-green)](https://cursor.com/)

Pin selected workspace projects to the top of the File Explorer sidebar. For Cursor and VS Code multi-root workspaces.

Useful when you have several folders in one workspace and want your most-used projects to stay at the top of the list.

**Topics:** `cursor` · `vscode-extension` · `file-explorer` · `workspace` · `multi-root`

## Requirements

- **Multi-root workspace**: Pin/unpin only applies when you have more than one folder in the workspace (File → Add Folder to Workspace…).
- Cursor or VS Code `^1.85.0`.

## How to use

1. **Pin a project**: In the File Explorer, right-click a **workspace root folder** (top-level project) → **Pin Project to Top**.
2. **Unpin**: Right-click the same folder → **Unpin Project**.
3. Pinned projects are reordered to the top immediately. Order is persisted per workspace.

You can also run **Pinned Projects: Apply Pinned Order** from the Command Palette to reapply the order (e.g. after adding new folders).

## Installation (development)

1. Open the extension folder in Cursor:
   ```bash
   cd cursor-pinned-projects
   ```
2. Install dependencies and compile:
   ```bash
   npm install
   npm run compile
   ```
3. Press **F5** to launch an Extension Development Host window (or Run → Start Debugging).
4. In the new window, open a **multi-root workspace** (add at least two folders). Right-click a root folder in the Explorer and use **Pin Project to Top** / **Unpin Project**.

## Packaging (optional)

To install the extension as a `.vsix`:

```bash
npm install -g @vscode/vsce
vsce package
```

Then in Cursor: **Extensions** → **…** → **Install from VSIX…** and select the generated `.vsix` file.

## License

MIT
