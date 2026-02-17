# Publishing the extension

## Publish to Open VSX (e.g. for Cursor)

1. Create an account and token at [open-vsx.org](https://open-vsx.org) (e.g. [user settings → tokens](https://open-vsx.org/user-settings/tokens)).
2. Create the namespace (publisher) once:
   ```bash
   npx ovsx create-namespace cursor-pinned-projects --pat YOUR_TOKEN
   ```
3. Build and publish:
   ```bash
   npx @vscode/vsce package --no-dependencies
   npx ovsx publish *.vsix --pat YOUR_TOKEN
   ```

## Publish to VS Code Marketplace

1. Get a [Personal Access Token](https://marketplace.visualstudio.com/manage) from the marketplace.
2. One-time login:
   ```bash
   npm install -g @vscode/vsce
   vsce login cursor-pinned-projects
   ```
3. Package and publish:
   ```bash
   vsce package
   vsce publish
   ```

## Automated publish (GitHub Actions)

The [Build workflow](.github/workflows/build.yml) runs on version tag pushes (`v*`). It:

1. Builds and runs tests/lint.
2. Packages a `.vsix` and uploads it as an artifact.
3. **Publishes to Open VSX** if the repository or organization secret `OPEN_VSX_TOKEN` is set (your [Open VSX PAT](https://open-vsx.org/user-settings/tokens)).

To release a new version:

1. Bump `version` in `package.json`.
2. Commit, push, then create and push a tag, e.g. `v0.1.11`.
3. Download the `.vsix` from the workflow run’s **Artifacts**, or install from Open VSX after the publish job completes.
