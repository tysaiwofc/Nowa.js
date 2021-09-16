const Discord = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');

exports.run = async (bot, message, args) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed2 = `<:negado:879264424211402752> **| ${message.author} , Mencione seu marido(a)**`
  if (!user) return message.lineReply(embed2);

    let embed1 = `<:negado:879264424211402752> **| ${message.author} , Você não pode se auto-divorciar!`
   if (user == message.member) return message.lineReply(embed1);

  const embed3 = `<a:among:870719321142329405> **| <@${user.id}> , O usuário ${message.author.tag} se divorciou de você! \n Pela taxa do divorcio eu cobrei 5000 moedas!!**`
   message.lineReply(embed3)

   db.delete(`casado_${user.id}`, '💍', message.author.username)
   db.delete(`casado_${message.author.id}`, '💍', user.user.username)
   db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
}