# Installing Pinned Projects

## From the marketplace (Open VSX)

1. Open **Extensions** (Ctrl+Shift+X / Cmd+Shift+X) in Cursor or VS Code.
2. Search for **Pinned Projects** and click **Install**.

Or open the extension page and install from there:
- [Open VSX: Pinned Projects](https://open-vsx.org/extension/cursor-pinned-projects/cursor-pinned-projects)

If the extension does not appear in search, Cursor may be using a different marketplace. Use **Install from VSIX** below.

## Install from VSIX

1. Get a `.vsix` file:
   - Download from [Open VSX](https://open-vsx.org/extension/cursor-pinned-projects/cursor-pinned-projects) (Download button), or
   - Download the **cursor-pinned-projects-*version*** artifact from a [GitHub Actions Build](https://github.com/general-alexson/cursor-pinned-projects/actions) run (Summary → Artifacts).
2. In Cursor/VS Code: **Extensions** → **⋯** (top right) → **Install from VSIX…**.
3. Select the `.vsix` file and reload if prompted.

## Development install (run from source)

To hack on the extension or run it without installing:

1. Clone the repo and open the folder in Cursor/VS Code.
2. In a terminal:
   ```bash
   npm install
   npm run compile
   ```
3. Press **F5** (or **Run → Start Debugging**) to launch an Extension Development Host.
4. In the new window, open a **multi-root workspace** (add at least two folders). Right-click a root folder in the Explorer and use **Pin Project to Top** / **Unpin Project**.

See [building.md](building.md) for how to produce a `.vsix` from source.
