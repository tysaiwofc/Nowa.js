const Discord = require("discord.js"); 
const inlinereply = require('discord-reply');

exports.run = async (client, message, args) => {
 
    let serverembed = new Discord.MessageEmbed() 
    .setColor("YELLOW")
    .setTitle(message.guild.name + ` Server info`)
    .addFields(
      {
        name:`:pencil:  __Dono do Servidor:__`,
        value: `${message.guild.owner}`,
        inline: false
      },
      {
        name: `:date: __Criação do Servidor:__`,
        value: `${message.guild.createdAt}`,
        inline: false
      },
      {
        name: `:white_check_mark: __Verificação:__`,
        value: `${message.guild.verificationLevel}`,
        inline: false
      },
      {
        name: `:man: __Membros:__`,
        value: `Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}\nHumanos: ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)}\nTotal: ${message.guild.memberCount}`,
        inline: false
      },
      {
        name: `:inbox_tray: __Você entrou:__`,
        value: `${message.member.joinedAt}`,
        inline: false
      }

    )
 
    message.lineReply(`${message.author}`, serverembed);
 }