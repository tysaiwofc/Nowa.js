const Discord = require("discord.js");
const inlinereply = require('discord-reply');
 
exports.run = async (client, message, args) => {
 
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`<:negado:879264424211402752> **| ${message.author}, Você não tem permissão para usar este comando.**`)
        return message.lineReply(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: true
    })
    const embed = `:lock: **| Chat trancado por ${message.author}**`
    message.lineReply(embed);
          
}