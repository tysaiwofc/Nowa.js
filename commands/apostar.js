const Discord = require("discord.js");
const talkedRecently = new Set();
const inlinelineReply = require('discord-reply')

const db = require("quick.db")
 module.exports.run = async (client, message, args) => {


if (talkedRecently.has(message.author.id)) {
    message.lineReply(`<:negado:879264424211402752> **| ${message.author} , Espere um pouquinho até usar este comando novamente!**`)
  
  } else {


 let moedas = await db.fetch(`money_${message.author.id}`)
 if (moedas === null) moedas = 0; 

if(moedas < 99){ return message.lineReply(`<:negado:879264424211402752>  **| ${message.author} , você precisa de \`100\` moedas para apostar!**`)
}

var coi= Math.floor(Math.random() * 250) - 99;

const ajuda = `<:verificado:879264162906255390> **| ${message.author} apostou , e conseguiu \`${coi}\` moedas.**`


 db.add(`money_${message.author.id}`,coi)
 


message.channel.send(ajuda)
 }

  talkedRecently.add(message.author.id);
  setTimeout(() => {
      talkedRecently.delete(message.author.id);
  }, 13000);
 }
 module.exports.help = {
     aliases: ["apostar", "ap"],
     name: "ap"
 }