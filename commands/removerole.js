const { Message } = require('discord.js');
const inlinereply = require('discord-reply');

module.exports = {
    name : 'removerole',
    run : async(client, message, args) => {
        //lets use parameters (optional)
        /**
         * @param {Message} message
         */
        //so firstly we will check whether the author of the message has permissions
        //this line means if the author doesn't have manage roles permission it will stop the process and send the following text
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , Você não tem a permissão \`Gerenciar cargos\``)
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , escolha um membro válido.**`) //when no member is pinged
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} , escolha um cargo válido.**`) //when no role is specified or pinged
        //now the code!
        await target.roles.remove(role) // removeing the role to the user
        message.lineReply(`<:negado:879264424211402752>  ** | ${message.author} retirou o cargo ${role} do membro <@${target.user.id}>** `) //this is optional and editable
    }
}