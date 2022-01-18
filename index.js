const { Client } = require("discord.js");
const client = new Client({intents: 3});

// makes hidden .env file readable and loads the env file
require('dotenv').config();

client.once("ready", () => {
    console.log("The bot is now online!");
    client.user.setActivity("Hello!", {type: "WATCHING"})
});

client.login(process.env.TOKEN)