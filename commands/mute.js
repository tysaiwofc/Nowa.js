const {Message, MessageEmbed}= require('discord.js');
const ms = require('ms');
const inlinereply = require('discord-reply');

module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , Você precisa da permissão** \`GERENCIAR MENSAGENS\``)
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!Member) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , membro não encontrado.**`)
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.lineReply('Cargo `muted` não existe,tentando criar...')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.lineReply('Cargo `muted` criado.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.lineReply(`:mute: **| <@${Member.id}> foi mutado por ${message.author}**`)
        await Member.roles.add(role2)
        message.lineReply(`:mute: **| <@${Member.id}> foi mutado por ${message.author}**`)
    }
}