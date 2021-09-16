module.exports = {
    config: {
        name: "purge",
        aliases: ["delete", "clear", 'prune'],
        category: "moderation",
        description: "Deletes messages from a channel",
        usage: "delete [amount of messages]",
        accessableby: "Administrator"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , você não tem a permissão \`Gerenciar mensagens\``)
        if (isNaN(args[0]))
            return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , especifique um valor válido!**`);

        if (args[0] > 100)
            return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , não consigo limpar mais de \`100\` mensagens!**`);

        if (args[0] < 1)
            return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , impossível limpar menos de \`1\` mensagem`);

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`<:verificado:879264162906255390> **| ${message.author} , Deletou \`${messages.size}/${args[0]}\` mensagens**`).then(msg => msg.delete({ timeout: 4000 }))).catch(() => null)
    }
}