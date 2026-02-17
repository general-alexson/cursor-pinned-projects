# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.16] - 2026-02-16

### Changed

- Release docs: update CHANGELOG before bumping version (step 1 in `doc/publishing.md`).

## [0.1.15] - 2026-02-16

### Changed

- Version bump.

## [0.1.14] - 2026-02-17

### Added

- MIT LICENSE file for packaging and marketplace.
- Generate icon step in CI before packaging so `images/icon.png` is produced during build.

## [0.1.13] - 2026-02-17

### Changed

- Version bump (package-lock.json sync).

## [0.1.12] - 2026-02-17

### Added

- Marketplace icon (map-pin teardrop) in `icon.svg` and `images/icon.png` (via `npm run generate-icon`).
- `scripts/generate-icon.js` and `pngjs` devDependency to generate 128×128 PNG from the pin shape.
- `generate-icon` npm script.

### Changed

- `package.json` includes `icon` field pointing to `images/icon.png`.

## [0.1.11] - 2026-02-16

### Changed

- README rewritten for marketplace: short description, requirements, how to use, installation.
- Install, build, and publish instructions moved to `doc/installing.md`, `doc/building.md`, and `doc/publishing.md`.

## [0.1.10] - 2026-02-16

### Added

- `license` field (MIT) in `package.json` for Open VSX.
- Create Open VSX namespace step in publish workflow (with `continue-on-error`).

## [0.1.9] - 2026-02-16

### Changed

- Publish job uses Node.js 20 (Setup Node step) so `ovsx` and `vsce` run on a supported engine.

## [0.1.8] - 2026-02-16

### Added

- `repository` URL in `package.json` for vsce (README link resolution).

## [0.1.7] - 2026-02-16

### Changed

- Version bump.

## [0.1.6] - 2026-02-16

### Added

- TypeScript ESLint support: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin` and `.eslintrc.json` updates so `npm run lint` parses TypeScript.

## [0.1.5] - 2026-02-16

### Added

- `package-lock.json` and workflow reverted to `npm ci` with `cache: "npm"`.

## [0.1.4] - 2026-02-16

### Changed

- Workflow runs only on tag push (`v*`); PR and branch push triggers removed to avoid double runs.

## [0.1.3] - 2026-02-16

### Fixed

- Publish job `if` condition no longer references `secrets` (not allowed in job `if`).

## [0.1.2] - 2026-02-16

### Changed

- Workflow triggers: run on tag push and on push to `main` (later simplified to tags only).

## [0.1.1] - 2026-02-16

### Added

- README badges (License, VS Code, Cursor), description, and topics.

## [0.1.0] - 2026-02-16

### Added

- Initial release.
- Pin workspace root folders to the top of the File Explorer via context menu (**Pin Project to Top** / **Unpin Project**).
- Persisted pin order per workspace using `workspaceState`.
- Reorder via `workspace.updateWorkspaceFolders` so pinned folders appear first.
- Command **Pinned Projects: Apply Pinned Order** to reapply order (e.g. after adding folders).
- Activation on startup to apply saved order when opening a workspace.

[Unreleased]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.16...HEAD
[0.1.16]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.15...v0.1.16
[0.1.15]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.14...v0.1.15
[0.1.14]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.13...v0.1.14
[0.1.13]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.12...v0.1.13
[0.1.12]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.11...v0.1.12
[0.1.11]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.10...v0.1.11
[0.1.10]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/general-alexson/cursor-pinned-projects/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/general-alexson/cursor-pinned-projects/releases/tag/v0.1.0
