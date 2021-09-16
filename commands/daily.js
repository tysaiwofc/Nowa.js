const db = require('quick.db');
const ms = require('pretty-ms');
const inlinereply = require('discord-reply');

exports.run = async (bot, message, args) => {
        let user = message.author;
        let timeout = 86400000;
        let author = await db.fetch(`worked_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.lineReply(`<:negado:879264424211402752> **| Você já coletou seu money diario, volte em** \`${time}\``)
        } else {
            let amount = Math.floor(Math.random() * 4000) + 1;
            db.add(`money_${user.id}`, amount)
            db.set(`worked_${user.id}`, Date.now())

            message.lineReply(`<:verificado:879264162906255390>  **| ${user} , Você recebeu \`${amount}\` moedas do seu daily!**`)
        }
    }