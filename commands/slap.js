const Discord = require('discord.js');
const db = require('quick.db');
const superagent = require("superagent");
const inlinereply = require('discord-reply');


exports.run = async (bot, message, args) => {
  let user2 = message.member

  let esmeraldas = await db.fetch(`xp_${user2.id}`);

  if(esmeraldas < 220){
    return message.lineReply(`<:negado:879264424211402752> **| <@${user2.id}> , Você precisa de <:petincomum:879139352725315636> \`220\` esmeraldas para usar esse comando.**`)
  } else {
    const { body } = await superagent.get('https://nekos.life/api/v2/img/slap');

   let user = message.mentions.users.first()
   let user3 = message.member

    
    if(!user) {
        return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , Mencione algum membro para bater!**`)
    }

if(user.id == message.author.id) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , parece que é impossível bater em si mesmo(a).**`)

    let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('YELLOW')
      .setDescription(`🤗 **${message.author} Bateu em <@${user.id}>!**`, avatar)
      .setImage(body.url)
      db.subtract(`xp_${user3.id}`, 220);

   await message.lineReply(`${message.author}`, embed)
}
  } 