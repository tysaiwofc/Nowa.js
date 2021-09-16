const block = ".";
const heart = "🟥";//put your own block emoji if you have smth
const { MessageEmbed } = require("discord.js");
const inlinereply = require('discord-reply');

module.exports = {
    name: "ship",
}
    module.exports.run = async (client, message, args) => {
 const user = message.mentions.users.first();
    if (!user) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , Escolha alguém pra shipar!**`)
if (message.mentions.users.size < 2) {
    let loveEmbed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle('Será que temos um novo casal aqui?')
        .setDescription(`${message.author} e ${user}!`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.author.displayAvatarURL({ dynamic: false, format: "png" })}&user2=${user.displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`**Chance:**`, ship())
        
   return message.lineReply(loveEmbed)
} else if (message.mentions.users.size > 1) {
let luv = new MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Será um novo casal?')
        .setDescription(`Shipado ${message.mentions.users.first()} é ${message.mentions.users.last()}!`)
        .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.mentions.users.first().displayAvatarURL({ dynamic: false, format: "png" })}&user2=${message.mentions.users.last().displayAvatarURL({ dynamic: false, format: "png" })}`)
        .addField(`**Chance:**`, ship())
    message.lineReply(`${message.author}`, luv)
}
}

function ship() {
    const hearts = Math.floor(Math.random() * 110) + 0;
    const hearte = (hearts/10)
  
    const str = `\`[${heart.repeat(hearte)}${block.repeat(11 - hearte)} ]\` ${hearts}%`;
    return str;
}