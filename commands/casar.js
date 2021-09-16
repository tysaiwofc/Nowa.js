const Discord = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');

exports.run = async (bot, message, args) => {

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed1 = `<:negado:879264424211402752> **| ${message.author} , mencione alguém para casar!**`
  if (!user) return message.channel.send(embed1);

    let embed2 = `<:negado:879264424211402752> **| ${message.author} , você não pode se casar com si mesmo!**`
   if (user == message.member) return message.channel.send(embed2);

   let casado = db.fetch(`casado_${user.id}`)
   let embed4 = `<:negado:879264424211402752> **| ${message.author} , o membro mencionado já esta casado com alguém!**`
   if (casado) return message.lineReply(embed4)

   let casado2 = db.fetch(`casado_${message.author.id}`)
   let prefixo = db.get(`ferinha_prefixo_${message.guild.id}`);
   if(prefixo === null) prefixo = 'n!'
   let embed5 = `<:negado:879264424211402752> **| ${message.author} , você já esta casado com alguém , utilize \`${prefixo}divorciar\` se quiser ser solteiro**`
   if (casado2) return message.lineReply(embed5)

  const embed6 = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .setDescription(`<@${user.id}> , ${message.author} quer se casar com você, aceita?`)
   message.lineReply(embed6).then(msg => {
  msg.react('💍');

  let filtro = (reaction, usuario) => reaction.emoji.name === '💍' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let embed7 = `**💍 | <@${user.id}> e ${message.author} Agora estão casados!!!**`
 message.lineReply(embed7)
db.set(`casado_${user.id}`, '💍', message.author.username)
db.set(`casado_${message.author.id}`, '💍', user.user.username)
   })



  })

}