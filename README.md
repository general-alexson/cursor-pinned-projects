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

## Publishing and installing

### Install from a built `.vsix` (no marketplace)

After the project is built (`npm run compile`), create an installable package and install it in Cursor:

1. **Create the `.vsix`** (from the repo root):
   ```bash
   npm ci
   npm run compile
   npx @vscode/vsce package
   ```
   This produces `cursor-pinned-projects-0.1.1.vsix` (version from `package.json`).

2. **Install in Cursor**
   - Open **Extensions** (Ctrl+Shift+X / Cmd+Shift+X).
   - Click the **⋯** menu at the top → **Install from VSIX…**.
   - Choose the `.vsix` file.
   - Reload if prompted.

### Publish to a marketplace (install by name)

To install from **Open VSX** (used by Cursor) or the **VS Code Marketplace**:

1. **Open VSX** (recommended for Cursor):
   ```bash
   npm install -g ovsx
   ovsx publish -p <your-open-vsx-pat>
   ```
   Create a token at [open-vsx.org](https://open-vsx.org).

2. **VS Code Marketplace**:
   ```bash
   npm install -g @vscode/vsce
   vsce login  # one-time: your publisher name + PAT from marketplace.visualstudio.com
   vsce publish
   ```

3. **Install from the marketplace**  
   In Cursor: **Extensions** → search for **Pinned Projects** → Install.

### Automated (GitHub Actions)

Every run of the [Build workflow](.github/workflows/build.yml) (push to `main`, PRs, or version tag `v*`) produces a **`.vsix` artifact**. Download it from the run’s **Summary** → **Artifacts**, then use **Install from VSIX…** in Cursor.

To **publish to Open VSX automatically** when you push a version tag (e.g. `v0.1.2`), ensure a secret named `OPEN_VSX_TOKEN` (repository or organization) is set with your [Open VSX PAT](https://open-vsx.org/user-settings/tokens). The workflow will build, package, and publish in one go.

## License

MIT
