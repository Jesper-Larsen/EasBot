const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});

client.commands = new Collection()

// makes hidden .env file readable and loads the env file
require('dotenv').config();

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);


client.login(process.env.TOKEN);