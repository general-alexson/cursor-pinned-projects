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

1. **Update CHANGELOG.md** — add an `[X.Y.Z] - YYYY-MM-DD` section under `[Unreleased]` with the changes for this release.
2. Bump `version` in `package.json` to match (e.g. `0.1.16`).
3. Commit, push, then create and push the **patch** tag, e.g. `v0.1.16`.
4. Update the **3-tag** version tags so they point to the new release:
   - `vX.X.X` — specific release (e.g. `v0.1.16`) — created in step 3.
   - `vX.X` — latest in minor line (e.g. `v0.1` → same commit as `v0.1.16`).
   - `vX` — latest in major line (e.g. `v0` → same commit).
   - `latest` — most recent stable (→ same commit).
   ```bash
   COMMIT=$(git rev-parse v0.1.16)
   git tag -f -a v0.1 $COMMIT -m "v0.1 - latest 0.1.x"
   git tag -f -a v0 $COMMIT -m "v0 - latest 0.x"
   git tag -f -a latest $COMMIT -m "latest stable"
   git push origin v0.1 v0 latest --force
   ```
5. Download the `.vsix` from the workflow run’s **Artifacts**, or install from Open VSX after the publish job completes.
