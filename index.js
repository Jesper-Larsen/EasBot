const { Client } = require("discord.js");
const client = new Client({intents: 32767});

// makes hidden .env file readable and loads the env file
require('dotenv').config();
require("./Handlers/Events")(client);


client.login(process.env.TOKEN);