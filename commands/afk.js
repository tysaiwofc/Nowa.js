const Discord = require('discord.js');
const db = require('quick.db');
const Commando = require('discord.js-commando');


exports.run = async (bot, message, args) => {
  
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
    
let embed1 = `<:verificado:879264162906255390> **| ${message.author.username} entrou em AFK. \nPara sua conveniência o afk será desativado quando você falar no chat \n Motivo:** \`${args.join(" ") ? args.join(" ") : "AFK"}\``
const target = message.member;
const member = message.guild.members.cache.get(target.id);
const nickname = `[ AFK ] ${message.author.username}`
member.setNickname(nickname)
status.set(message.author.id, args.join(" ") || `AFK`);
if (!afk) return message.channel.send(embed1);


else {

    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
}


