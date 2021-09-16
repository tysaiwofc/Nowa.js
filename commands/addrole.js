const { Message } = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');
const Discord = require('discord.js');

module.exports = {
    name : 'addrole',
    run : async(client, message, args) => {
        let prefix = db.get(`ferinha_prefixo_${message.guild.id}`);
  if(prefix === null) prefix = 'n!'

  let url = args[0];
    if (!url) {
      let embed = new Discord.MessageEmbed()
      .setAuthor('Nowa.js','https://cdn.discordapp.com/avatars/461346834342739978/a_cf4cc7f3d7667e6cedd8f0d500b48c43.gif')
      .setDescription(`<a:among:870719321142329405> \`${prefix}addrole\`\nAdicione cargos para seus membros!\n:interrobang: **Como usar?** \`${prefix}addrole <@usuário> <@cargo>\``)
      .setThumbnail('https://cdn.discordapp.com/avatars/461346834342739978/a_cf4cc7f3d7667e6cedd8f0d500b48c43.gif')
      .addFields(
        {
          name: '<:livro:880967842160336897> __Exemplos:__',
          value: `**Adicione cargo por menção**\n${prefix}addrole @cleitin @Server Booster`,
          inline: false
        },
        {
          name: '<a:vm_aviso_old:873031787423629332> __Permissões:__',
          value: 'Você da permissão \`Gerenciar emojis\` para usar esse comando!'
        }
      )
      message.lineReply(embed)
    }
        //lets use parameters (optional)
        /**
         * @param {Message} message
         */
        //so firstly we will check whether the author of the message has permissions
        //this line means if the author doesn't have manage roles permission it will stop the process and send the following text
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , você não tem a permissão \`Gerenciar cargos\``)
        //next we define some variables
        const target = message.mentions.members.first() //member = mentions
         //when no member is pinged
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , esse cargo não existe , ou está acima do meu cargo.**`) //when no role is specified or pinged
        //now the code!
        await target.roles.add(role) // adding the role to the user
        message.channel.send(`<:verificado:879264162906255390> **| <@${target.user.id}> recebeu o cargo** ${role}`)
    }
}