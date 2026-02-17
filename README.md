# Pinned Projects

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![VS Code 1.85+](https://img.shields.io/badge/VS%20Code-1.85%2B-blue?logo=visualstudiocode)](https://code.visualstudio.com/)
[![Cursor](https://img.shields.io/badge/Cursor-Extension-green)](https://cursor.com/)

Pin selected workspace projects to the top of the File Explorer sidebar. For **Cursor** and **VS Code** multi-root workspaces.

When you have several folders in one workspace, pin your most-used projects so they stay at the top of the list.

## Requirements

- **Multi-root workspace** — Pin/unpin applies when you have more than one folder in the workspace (e.g. **File → Add Folder to Workspace…**).
- **Cursor** or **VS Code** `^1.85.0`.

## How to use

1. **Pin a project** — In the File Explorer, right-click a **workspace root folder** (top-level project) → **Pin Project to Top**.
2. **Unpin** — Right-click the same folder → **Unpin Project**.
3. Pinned projects move to the top immediately. Order is saved per workspace.

You can also run **Pinned Projects: Apply Pinned Order** from the Command Palette (e.g. after adding new folders).

## Installation

- **From Open VSX** — In Cursor or VS Code, open **Extensions** (Ctrl+Shift+X), search for **Pinned Projects**, and install. Or install from [open-vsx.org](https://open-vsx.org/extension/cursor-pinned-projects/cursor-pinned-projects).
- **From a .vsix file** — Extensions → **⋯** → **Install from VSIX…** and choose the `.vsix` file.

## License

MIT
