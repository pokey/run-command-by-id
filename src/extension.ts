import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "run-command-by-id.runCommandById",
    async () => {
      const commandToRun = await vscode.window.showInputBox({
        prompt: "Enter command id",
      });

      if (commandToRun === undefined) {
        return;
      }

      vscode.commands.executeCommand(commandToRun);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
