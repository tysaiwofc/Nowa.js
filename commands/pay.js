const db = require('quick.db');
const Discord = require('discord.js');
const inlinereply = require('discord-reply');


exports.run = async (client, message, args) => {

 let pr = db.get(`ferinha_prefixo_${message.guild.id}`);





      const err = `<:negado:879264424211402752> **| ${message.author} , tente usar** \`${pr}pay <@user> <quantia>\``;



if(!isNaN(args[2])){
return message.channel.send(err)
}
  let user = message.author
  let author = message.mentions.users.first()
  if (author === (user)) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , você não pode pagar a si mesmo!**`)
  if(!author) return message.lineReply(err)
  let amount = args.join(" ").slice(22)
  if(!amount) return message.lineReply(err)
    if (isNaN(args.join(" ").slice(22))) return message.lineReply(err)
  let authorBalance = await db.fetch(`money_${user.id}`)
  if (authorBalance <(amount)) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , você não tem moedas suficientes.**`)
  if(amount < 0){
    return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , você não tem moedas suficientes.**`)
  }
  const embedPago = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('💸 Pay')
    .setDescription(`> 💳 <@${message.author.id}> **Pagou \`${amount}\` moedas para <@${author.id}> com sucesso!**`)
  db.add(`money_${author.id}`, amount);
  db.subtract(`money_${message.author.id}`, amount)

  message.lineReply(embedPago)
}
module.exports.help = {
	aliases: ["pagar"],
	name: "pay"
}