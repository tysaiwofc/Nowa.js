const Discord = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');


exports.run = async (bot, message, args) => {
  let user2 = message.member

  let esmeraldas = await db.fetch(`xp_${user2.id}`);

  if(esmeraldas < 450){
    return message.lineReply(`❌**| <@${user2.id}> , Você precisa de <:petincomum:879139352725315636> \`450\` esmeraldas!**`)
  } else {

    

    var list = [
       'https://loritta.website/assets/img/actions/attack/generic/gif_5.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_63.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_30.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_107.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_80.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_24.gif',
       'https://loritta.website/assets/img/actions/attack/generic/gif_45.gif'
];
    var list1 = [
      'https://loritta.website/assets/img/actions/attack/generic/gif_5.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_63.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_30.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_107.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_80.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_24.gif',
      'https://loritta.website/assets/img/actions/attack/generic/gif_45.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()
   let user3 = message.member

    
    if(!user) {
        return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , Mencione algum membro para atacar!**`)
    }

if(user.id == message.author.id) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , parece que é impossível atacar você mesmo(a).**`)

    let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed() 
      .setColor('YELLOW')
      .setDescription(`🥊 **${message.author.username} atacou ${user.username}!**`, avatar)
      .setImage(rand)
      db.subtract(`xp_${user3.id}`, 450);

   await message.lineReply(`${message.author}`, embed)
}
  } 