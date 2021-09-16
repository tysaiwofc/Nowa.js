const Discord = require("discord.js");
const inlinereply = require('discord-reply');
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setDescription(` `)
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/avatars/461346834342739978/a_cf4cc7f3d7667e6cedd8f0d500b48c43.webp')
    .setFooter(`Enviado por ${message.author.username}`)
    .addFields(
        {
            name: '🤖 __Eu sou:__',
            value: `\`${client.user.tag}\``,
            inline: false
        },
        {
            name: '<:DedicatedServer:878905810862886952> __Servidores:__',
            value: `\`${client.guilds.cache.size}/75\``,
            inline: false
        },
        {
            name: '<a:e_wPencil:870007345328062504> __Canais:__',
            value: `\`${client.channels.cache.size}\``,
            inline: false
        },
        {
            name: '<:users:879288614494810143> __Usuários:__',
            value: `\`${client.users.cache.size}\``,
            inline: false
        },
        {
            name: '🏓 __Meu ping:__',
            value: `\`${Math.round(client.ws.ping)}\` ms`,
            inline: false
        },
        {
            name: '<a:staff_ferinha:870007622001119275> __Criador:__',
            value: '\`nãoexisto#0001\`',
            inline: false
        },
        {
            name: '<a:Valid_Code_Developer:872460716056133692>   __Meu servidor:__',
            value: 'https://discord.gg/5xDNgyhaVr',
            inline: false
        },
    )
    message.lineReply(`${message.author}`, embed);
}