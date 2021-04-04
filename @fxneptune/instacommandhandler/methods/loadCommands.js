const { load } = require("./load")
function loadCommands(handler) {
	console.clear()
	console.log("")
    console.log("Loading commands");
    load(handler);
    console.log("All commands loaded in " + (Date.now() - handler.startTime) + "ms");
}
exports.loadCommands = loadCommands