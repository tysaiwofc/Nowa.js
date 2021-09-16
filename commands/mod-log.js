const Discord = require("discord.js");
const db = require("quick.db");
const inlinereply = require('discord-reply');

exports.run = async (bot, message, args) => {

    let channel = message.mentions.channels.first() 
    let cmod = await db.get(`cMod_${message.guild.id}`);

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        const embed = `<:negado:879264424211402752> **| ${message.author} , Você não possui permissao de \`Gerenciar canais\` para executar esse comando!**`
        return message.lineReply(embed);
      }


if(args[0] === "on") {

    if (!channel) {
        const embed1 = `<:negado:879264424211402752> **| ${message.author} ,  Mencione um canal.**`
        return message.lineReply(embed1);
      }
    try {
        if (channel.id === cmod) {
            const embed2 = `<:negado:879264424211402752> **| ${message.author} Esse canal ja está setado como modlog**`
            return message.lineReply(embed2);
     
      } else {
        bot.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send(`<:verificado:879264162906255390> **| ${message.author} , setou esse canal para mod-logs!**`);
        db.set(`cMod_${message.guild.id}`, channel.id);

        message.lineReply(
          `<:verificado:879264162906255390> **| ${message.author} , Canal de logs Setado em ${channel}**`
        );
      }
      
 
    } catch (e) {
      return message.lineReply(`Error - ${e.message}`);
    }
}
if(args[0] === "off") {
  
  db.delete(`cMod_${message.guild.id}`)
  const del = `<:verificado:879264162906255390> **| ${message.author} , Modlog desligado com sucesso.**`
message.lineReply(del)
   
   
}
}