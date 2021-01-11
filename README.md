# Run Command by Id

Adds a command that allows you to type the id of a command into a box and run it, eg `workbench.action.terminal.focusAtIndex1`. This capability is useful eg for control by [talon](https://talonvoice.com/).

## Features

- Contributes the `run-command-by-id.runCommandById` command, which shows an
  input box to enter the id of a command to run
- Sets a default keybinding of `ctrl+shift+alt+p` (`cmd+shift+alt+p` on
  Mac) to run the `run-command-by-id.runCommandById` command

## Release Notes

### 0.2.0

Add default keybinding

### 0.1.0

Initial release
