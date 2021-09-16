const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ownerid = "461346834342739978";

module.exports = {
    config: {
        name: "addmoney",
        aliases: ["am"],
        category: "economy",
        description: "Adds Money to a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    },
    run: async (bot, message, args) => {
      if (message.author.id === ownerid) {
        if (!args[0]) return message.channel.send("**Escolha um usuário!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Escolha um usuário válido**")
        if (!args[1]) return message.channel.send("**Escolha um valor válido**")
        if (isNaN(args[1])) return message.channel.send(`**❌ Error**`);
        if (args[0] > 10000) return message.channel.send("**Error**")
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = `<:verificado:879264162906255390> **|  Enviado ${args[1]} moedas**\n\n**Nova carteira: \`${bal}\` , <@${user.id}>**`
        message.channel.send(moneyEmbed)
      } else return message.channel.send("<a:among:870719321142329405> **| Apenas meu dono pode usar esse comando.**")
        

    }
}