const { load } = require("./load")
function reloadCommands(handler) {
	console.log("")
    console.log("Rechargement des commandes");
    handler.aliases = {};
    var reloadStart = Date.now();
    for (command in handler.commands) {
        delete require.cache[require.resolve(handler.commands[command].filename)];
        delete handler.commands[command];
    }
    load(handler);
    console.log("Toutes les commandes ont été rechargés en " + (Date.now() - reloadStart) + "ms");
}
exports.reloadCommands = reloadCommands
