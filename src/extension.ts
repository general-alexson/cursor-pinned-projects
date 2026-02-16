import * as vscode from "vscode";

const PINNED_URIS_KEY = "cursorPinnedProjects.pinnedFolderUris";

function getPinnedUris(context: vscode.ExtensionContext): string[] {
  return context.workspaceState.get<string[]>(PINNED_URIS_KEY) ?? [];
}

function setPinnedUris(context: vscode.ExtensionContext, uris: string[]): void {
  context.workspaceState.update(PINNED_URIS_KEY, uris);
}

function normalizeUri(uri: vscode.Uri): string {
  return uri.toString().replace(/\/$/, "");
}

/** Reorder workspace folders so pinned (by URI) appear first, then apply via API. */
function applyPinnedOrder(context: vscode.ExtensionContext): boolean {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders || folders.length === 0) {
    return false;
  }

  const pinnedSet = new Set(getPinnedUris(context));
  const pinned: vscode.WorkspaceFolder[] = [];
  const unpinned: vscode.WorkspaceFolder[] = [];

  for (const folder of folders) {
    const normalized = normalizeUri(folder.uri);
    if (pinnedSet.has(normalized)) {
      pinned.push(folder);
    } else {
      unpinned.push(folder);
    }
  }

  // Preserve order within pinned (by pinned list order)
  const pinnedOrder = getPinnedUris(context);
  pinned.sort((a, b) => {
    const ia = pinnedOrder.indexOf(normalizeUri(a.uri));
    const ib = pinnedOrder.indexOf(normalizeUri(b.uri));
    return ia - ib;
  });

  const reordered = [...pinned, ...unpinned];
  const sameOrder =
    reordered.length === folders.length &&
    reordered.every((f, i) => folders[i] === f);
  if (sameOrder) {
    return false;
  }

  return vscode.workspace.updateWorkspaceFolders(0, folders.length, ...reordered);
}

export function activate(context: vscode.ExtensionContext): void {
  // Apply pinned order when workspace folders change (e.g. new folder added)
  const onDidChangeFolders = vscode.workspace.onDidChangeWorkspaceFolders(() => {
    applyPinnedOrder(context);
  });
  context.subscriptions.push(onDidChangeFolders);

  // Apply on activation so existing workspaces get correct order
  applyPinnedOrder(context);

  const pinToTop = vscode.commands.registerCommand(
    "cursorPinnedProjects.pinToTop",
    (resource: vscode.Uri) => {
      const folders = vscode.workspace.workspaceFolders;
      if (!folders) {
        return;
      }
      const normalized = normalizeUri(resource);
      const folder = folders.find(
        (f) => normalizeUri(f.uri) === normalized
      );
      if (!folder) {
        vscode.window.showWarningMessage(
          "Selected item is not a workspace folder."
        );
        return;
      }
      const pinned = getPinnedUris(context);
      if (pinned.includes(normalized)) {
        return;
      }
      setPinnedUris(context, [...pinned, normalized]);
      applyPinnedOrder(context);
      vscode.window.showInformationMessage(
        `Pinned "${folder.name}" to top of File Explorer.`
      );
    }
  );
  context.subscriptions.push(pinToTop);

  const unpin = vscode.commands.registerCommand(
    "cursorPinnedProjects.unpin",
    (resource: vscode.Uri) => {
      const normalized = normalizeUri(resource);
      const pinned = getPinnedUris(context).filter((u) => u !== normalized);
      setPinnedUris(context, pinned);
      applyPinnedOrder(context);
      vscode.window.showInformationMessage("Project unpinned.");
    }
  );
  context.subscriptions.push(unpin);

  const applyOrder = vscode.commands.registerCommand(
    "cursorPinnedProjects.applyOrder",
    () => {
      const applied = applyPinnedOrder(context);
      if (applied) {
        vscode.window.showInformationMessage("Pinned order applied.");
      }
    }
  );
  context.subscriptions.push(applyOrder);
}

export function deactivate(): void {}
