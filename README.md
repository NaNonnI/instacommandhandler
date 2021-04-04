# instacommandhandler
A simple command handler for insta.js

First of all, install it with NPM

[npm i @fxneptune/instacommandhandler](https://www.npmjs.com/package/@fxneptune/instacommandhandler)

Then
Make a config.json file for clarity
```json
{
	"user": "username",
	"password": "password",
	"prefix": "../"
}
```

In your main bot class add
```javascript
const Insta = require('@androz2091/insta.js')
const client = new Insta.Client()
const config = require('./config.json');
var handler = require("@fxneptune/instacommandhandler")
var prefix = config.prefix
var cmdhandler = new handler(client, "/commands", prefix)
```

And
```javascript
client.on('messageCreate', message => {
	if(!(message.author.id == client.user.id)) {
		cmdhandler.handleCommand(message)
	}
})

client.login(config.user, config.password);
```

Now in order to have a command works you have to make a folder "commands" and in it a category like "utils"

In utils make an "help.js"

And, in help.js put
```javascript
module.exports = {
    name: "help", //main command like ../help
    aliases: [ "help", "h", "commands" ], //aliases for the command, like ../h ../help ../commands
    category: "utils", //The category where the file is, here, in "utils"
    description: "Send all commands",
    usage: "../help", //Command with the prefix
    run: async function (client, command, args, message) {

      //Here put your code as normal
    	message.reply(`Help command \n * help, h, commands`);

    }
}
```

And.. That's it!

The module is in french, if a lot of eg user want's it translated I can do it
*My english is bad when I have to write a lot sorry*
_and it's 11:50 pm_
