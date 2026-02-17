# AI Memory — Pinned Projects Extension

Active context, patterns, and decisions for the Cursor Pinned Projects extension.

## Project Summary

- **cursor-pinned-projects**: VS Code/Cursor extension that pins workspace root folders to the top of the File Explorer (multi-root workspaces).
- Repo: https://github.com/general-alexson/cursor-pinned-projects
- Published to Open VSX. Build/publish via GitHub Actions on version tag push (`v*`).

## Active Conventions (from workspace .cursorrules)

- **Documentation**: README, CHANGELOG, SECURITY at project root; other docs in `doc/` (lowercase-kebab).
- **Versioning**: 3-tag approach — `vX.X.X` (specific), `vX.X` (latest in minor), `vX` (latest in major); `latest` = most recent stable.
- **Security**: Snyk code + SCA before commit/merge; fix critical/high; document accepted medium/low.

## Current State

- Version: 0.1.15 (see `package.json`).
- Icon: map-pin teardrop (icon.svg + generated images/icon.png in CI).
- Memory and completed-implementation docs are in use; Snyk is run before significant commits.

## No Active In-Progress Work

(Update this section when starting a task; move completed items to COMPLETED-IMPLEMENTATIONS.md.)
