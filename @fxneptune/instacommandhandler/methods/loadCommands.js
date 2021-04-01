const { load } = require("./load")
function loadCommands(handler) {
	console.clear()
	console.log("")
    console.log("Chargement des commandes");
    load(handler);
    console.log("Toute les commandes ont été chargés en " + (Date.now() - handler.startTime) + "ms");
}
exports.loadCommands = loadCommands