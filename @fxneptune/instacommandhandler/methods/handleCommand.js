function handleCommand(message) {
    var prefix = this.getPrefix(message.author.id);
    if (!message.content.startsWith(prefix))
        return;
    var plain = message.content.substr(prefix.length, message.content.length - prefix.length);
    var args = plain.trim().split(" ");
    var command = args.shift().toLowerCase();
    var executeCmd = this.commands[command] || this.commands[this.aliases[command]];
    if (executeCmd) {
        var startTime = Date.now();
        executeCmd.run(this.client, command, args, message).then(function () {
            console.log(message.author.username + " (" + message.author.id + ") - Commande " + command + " exécuté en " + (Date.now() - startTime) + "ms");
        })
    }
}
exports.handleCommand = handleCommand