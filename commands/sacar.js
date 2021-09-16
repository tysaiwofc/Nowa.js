const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const inlinereply = require('discord-reply');

module.exports = {
    config: {
        name: "withdraw",
        aliases: ["wd"],
        category: "economy",
        description: "Withdraws Money From Bank",
        usage: "<amount>"
    },
    run: async (bot, message, args) => {
        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = `<:negado:879264424211402752> **| ${message.author} , você não tem moedas suficientes.**`
            if (!money) return message.lineReply(embed)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = `<:verificado:879264162906255390> **| ${message.author} , você todas as moedas do seu cofre.**` 
            message.lineReply(embed5)

        } else {

            let embed2 = `<:negado:879264424211402752> **| ${message.author} , escolha um valor válido pra sacar.**`

            if (!args[0]) {
                return message.lineReply(embed2)
            }
            let embed6 = `<:negado:879264424211402752> **| ${message.author} , escolha um valor válido.**`

            if(isNaN(args[0])) {
                return message.lineReply(embed6)
            }
            let embed3 = `<:negado:879264424211402752> **| ${message.author} , você tem moedas negativas.**`

            if (message.content.includes('-')) {
                return message.lineReply(embed3)
            }
            let embed4 = `<:negado:879264424211402752> **| ${message.author} , saldo bancário insuficiente.**`

            if (member2 < args[0]) {
                return message.lineReply(embed4)
            }

            let embed5 = `<:verificado:879264162906255390> **| ${message.author} , Você sacou ${args[0]} moedas do seu cofre`

            message.lineReply(embed5)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }
    }
}