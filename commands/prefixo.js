const db = require("quick.db");
const inlinereply = require('discord-reply');

module.exports = {
    name: "set prefix",
    author: "ferinha",
    servidor: "discord.gg/ferinha",

    run: async(client, message, args) => {

        let ferinha_author = message.author;
        let permissão_ferina = "GERENCIAR SERVIDOR"

        if (!message.member.hasPermission("MANAGE_GUILD")) return message.lineReply(`<:negado:879264424211402752> **| ${ferinha_author} , Você não possui a permissão** \`${permissão_ferina}\`.`);
        if (!args[0]) return message.lineReply(`<:negado:879264424211402752> **| ${ferinha_author} , Você precisa definir um prefixo!**`);

        let novo_prefixo = args.join("");

        let ferinha = await db.set(`ferinha_prefixo_${message.guild.id}`, novo_prefixo);

        message.lineReply(`<:verificado:879264162906255390> **| ${ferinha_author} , O meu prefixo para esse servidor foi definido para \`${novo_prefixo}\` com sucesso!**`)
    }
}