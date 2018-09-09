import { Component } from '@angular/core';

@Component({
  selector: 'gpg-assist',
  templateUrl: './app.gpg-assist.component.html'
})
export class GpgAssistComponent {
  selectedCommand: Command = null;
  isExpert: boolean;
  hasArmor: boolean;
  isMinimal: boolean;
  input: number = 0;
  output: number = 0;
  inputFile: string;
  outputFile: string;
  recipient: string;
  key: string;
  availableCommands: Command[] = [
    { description: 'generate a new key', command: '--generate-key', expertCommand: '--expert --full-generate-key' },
    { description: "edit a key", command: "--edit-key", expertCommand: "--expert --edit-key", opKey: true },
    { description: 'list all keys', command: '--list-keys', opKey: true },
    { description: 'list all keys with their fingerprints', command: '--fingerprint', opKey: true },
    { description: 'export a public key', command: '--export', opArmor: true, opMinimal: true, opOutput: true, opKey: true },
    { description: 'export a private key', command: '--export-secret-key', opArmor: true, opOutput: true, opKey: true },
    { description: 'import a key', command: '--import', opInput: true },
    { description: 'delete a public key', command: '--delete-keys', opKey: true },
    { description: 'delete a private key', command: '--delete-secret-keys', opKey: true },
    { description: 'sign a key', command: '--sign-key', expertCommand: '--ask-cert-level --sign-key', opKey: true },
    { description: 'sign a message', command: '--sign', opArmor: true, opOutput: true, opInput: true },
    { description: 'encrypt a message', command: '--encrypt', opArmor: true, opOutput: true, opRecipient: true, opInput: true },
    { description: 'decrypt a message', command: '--decrypt', opOutput: true, opInput: true },
    { description: 'verify a message', command: '--verify', opInput: true }
  ];
  buildCommandLine() {
    let selectedCommand = this.selectedCommand;

    if (!selectedCommand) {
      return null;
    }

    let commandLine: string[] = ['gpg'];

    if (selectedCommand.opArmor && this.hasArmor) {
      commandLine.push('--armor');
    }

    if (selectedCommand.opMinimal && this.isMinimal) {
      commandLine.push('--export-options export-minimal');
    }

    if (selectedCommand.opOutput && this.output === 1 && this.outputFile) {
      commandLine.push('--output');
      commandLine.push(this.outputFile);
    }

    if (selectedCommand.opRecipient && this.recipient) {
      commandLine.push('--recipient');
      commandLine.push(this.recipient);
    }

    if (selectedCommand.expertCommand && this.isExpert) {
      commandLine.push(selectedCommand.expertCommand);
    } else {
      commandLine.push(selectedCommand.command);
    }

    if (selectedCommand.opKey && this.key) {
      commandLine.push(this.key);
    }

    if (selectedCommand.opInput && this.input === 1 && this.inputFile) {
      commandLine.push(this.inputFile);
    }

    return commandLine.join(' ');
  };
}

export class Command {
  description: string;
  command: string;
  expertCommand?: string;
  opKey?: boolean;
  opInput?: boolean;
  opOutput?: boolean;
  opRecipient?: boolean;
  opArmor?: boolean;
  opMinimal?: boolean;
}
