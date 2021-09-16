const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    config: {
        name: "deposit",
        aliases: ["dep"],
        category: "economy",
        description: "Deposite seu money",
        usage: "<amount>",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

        let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = `<:negado:879264424211402752> **| ${message.author} , você não tem moedas suficiente!**`

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = `<:verificado:879264162906255390> **| ${message.author} , você depositou todo seu dinheiro!**`
            message.channel.send(sembed)

        } else {

            let embed2 = `<:negado:879264424211402752> **| ${message.author} , especifique um valor válido.**`

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = `<:negado:879264424211402752> **| ${message.author} , especifique um valor válido.**`

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = `<:negado:879264424211402752> **| ${message.author} , você tem moedas negativas!**`

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = `<:negado:879264424211402752> **| ${message.author} , você não tem moedas suficientes.**`

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = `<:verificado:879264162906255390> **| ${message.author} , Você depositou \`${args[0]}\` moedas no seu banco**`

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }
}