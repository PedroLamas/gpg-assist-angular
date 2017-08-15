"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GpgAssistComponent = (function () {
    function GpgAssistComponent() {
        this.selectedCommand = null;
        this.input = 0;
        this.output = 0;
        this.availableCommands = [
            { description: 'generate a new key', command: '--generate-key', expertCommand: '--expert --full-generate-key' },
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
    }
    GpgAssistComponent.prototype.buildCommandLine = function () {
        var selectedCommand = this.selectedCommand;
        if (!selectedCommand) {
            return null;
        }
        var commandLine = ['gpg'];
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
        }
        else {
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
    ;
    return GpgAssistComponent;
}());
GpgAssistComponent = __decorate([
    core_1.Component({
        selector: 'gpg-assist',
        templateUrl: './app.gpg-assist.component.html'
    })
], GpgAssistComponent);
exports.GpgAssistComponent = GpgAssistComponent;
var Command = (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=app.gpg-assist.component.js.map