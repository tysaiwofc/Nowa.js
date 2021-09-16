const Discord = require("discord.js");
const fs = require("fs");
const express = require("express");
require("dotenv").config();
const db = require("quick.db");
const disbut = require('discord-buttons');
const usersMap = new Map();
const LIMIT = 5;
const TIME = 230000;
const DIFF = 3000;
const inlinereply = require('discord-reply');
const fetch = require('node-fetch');




//ping
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

const client = new Discord.Client();


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});



client.on('ready', () => {

    let activities = [
            `⚙️ Prefixo [ n! ]`,
            `💻 ${client.guilds.cache.size} servidores`,
            `💁 ${client.users.cache.size} usuários`,
            `🗣️ ${client.channels.cache.size} canais`,

    ],  /** rich presence */
        i = 1;
    setInterval(
        () =>
            client.user.setActivity(`${activities[i++ % activities.length]}`, {
                type: "STREAMING",
                url: "https://www.twitch.tv/nowatv22"
            }),
         1000 * 60
    );
})







client.login(process.env.TOKEN)
