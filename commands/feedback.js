const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'feedback',
    description: 'Envie feedback para o bot',
    usage: 'feedback <feedback>',
    category: 'Utility',
    guildOnly: true,
    run: async (client, message, args) => {

      let user2 = message.member;

      let fe = db.fetch(`feed_${user2.id}`);

      if (fe === 2) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , você já enviou seu feedback!**`)
        let feednumber = message.content.split(" ").slice(1)
        let feedstr = message.content.split(" ").slice(2).join(" ");
        let feednumber1 = parseInt(feednumber)
        if (!feedstr) return message.channel.send(`<:negado:879264424211402752> **┃ ${message.author} , Por favor, avalie o bot em uma escala de 1 - 5 com um motivo**`).then(msg => msg.delete({timeout: 10000}));

        if (!feednumber1 || isNaN(parseInt(feednumber)) || parseInt(feednumber) <= 0 || parseInt(feednumber) > 5) return message.channel.send(`<:negado:879264424211402752> **┃ ${message.author} , Por favor avaliação de 1 a 5**`
        ).then(msg => msg.delete({timeout: 10000}));

        if (feednumber1 > 5) return message.channel.send(`<:negado:879264424211402752> **┃ ${message.author} Por favor, avalie o bot em uma escala de 1 - 5 com um motivo**`)
        let stararray = []
        for (i = 0; i < feednumber1; i++) {
            stararray.push("⭐")
        }
        let channel = client.channels.cache.get("880666931261210634")

        let user = message.member;

    if (!channel) return;
        let embed = new Discord.MessageEmbed()
            .setTitle(`Nova Avaliação`)
            .addField(`🤩 ┃ Estrelas:`, `\`\`\`${stararray.join("")}\`\`\``)
            .setColor("YELLOW")
            .addField(`📝 ┃ Comentário:`, `\`\`\`${feedstr}\`\`\` `)
            .addField(`👥 ┃ Autor:`, `\`\`\`${message.author.tag}\`\`\` `, true)
            .addField("🆔 ┃ ID:", `\`\`\`${message.author.id}\`\`\` `)
            .setThumbnail(message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setFooter(`${message.guild.name}`);

        let embed2 = new Discord.MessageEmbed()
            .setTitle(`<:verificado:879264162906255390> Avaliação enviada!`)
            .setDescription(`🤩 **┃ Estrelas:** \n\`\`\`${stararray.join("")}\`\`\``)
            .setThumbnail(message.author.displayAvatarURL({
                dynamic: true
            }))
            .setTimestamp()
            .setFooter(`${message.guild.name}`);
        await channel.send(`${message.author}`, embed)
        await db.set(`feed_${user.id}`, 2);
        await message.channel.send(embed2)
    }
}