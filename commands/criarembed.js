const Discord = require("discord.js");
const inlinereply = require('discord-reply');
 
exports.run = (client, message, args) => {
 
    const { guild } = message
 
    const icon = guild.iconURL()
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply(`<:negado:879264424211402752> **| Você não tem a permissão de \`Gerenciar mensagens.\`**`);
 
 
    const embed = `<a:e_wPencil:870007345328062504> **| ${message.author} , em qual chat vai ser a embed?**`
    message.lineReply(embed).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                const embed = `<:off:879263907418615838> **| ${message.author} ,  você não mencionou um chat válido!**`
                return message.lineReply(embed);
 
            } else {
                const embed = `<a:e_wPencil:870007345328062504> **| ${message.author} , Qual vai ser a descrição?** `
                message.lineReply(embed).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                    
                        const embed = `<a:e_wPencil:870007345328062504> **| ${message.author} , Qual vai ser o titulo da sua embed ?**`
                        message.lineReply(embed).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content
 
                                const embed1 = `<:verificado:879264162906255390> **| ${message.author} , Sua embed foi criada com sucesso!**`
                                message.lineReply(embed1)
 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('YELLOW')
                                .setFooter(`${message.author.username}`)
                                .setTitle(title)
                                .setThumbnail(icon)
                                .setTimestamp()
                                .setDescription(desc)
 
                                canal.send(embed)
 
                            })
                        })
                    })
                })
            }
        })
    }) 
 
}