const { MessageEmbed } = require("discord.js"); /*puxando a livraria discord.*/
const db = require("quick.db");
const button = require("discord-buttons");
const inlinereply = require('discord-reply');

module.exports = {
  config: {
    name: "Carteira",
    category: "economia",
    description: "Veja sua carteira",
  }, // deixa os crédito bb <3
  run: async (bot, message, args) => {


    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

    let bal = db.fetch(`money_${user.id}`);

    if (bal === null) bal = 0;

    let bank = await db.fetch(`bank_${user.id}`);

    if (bank === null) bank = 0;

    if (user) {
      let moneyEmbed = new MessageEmbed()
        .setColor("YELLOW")
        .setDescription(
          `**${user.user.username} Carteira**\n\n:dollar: **Saldo:** \`${bal}\`\n\n:coin: **Cofre:** \`${bank}\``
        );
      message.lineReply(`${message.author}`, moneyEmbed);
    } else {
      return message.lineReply("Mencione um usuário válido");
    }
    
  }
}; // criado por nãoexisto#0001


