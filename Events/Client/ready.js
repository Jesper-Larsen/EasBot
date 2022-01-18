const { Client } = require("discord.js");
const mongoose = require("mongoose");
require('dotenv').config();


module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        console.log("The client is now ready!");
        client.user.setActivity("Hello!", {type: "WATCHING"});

        if (!process.env.Database) return;
        mongoose.connect(process.env.Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The client is now connected to the database!")
        }).catch((err) => {
            console.log(err)
        });
    }
}