const math = require('discord-math');

module.exports = {
  name: "kick",
  aliases: ["ckl"],
  usage: "kick",
  description: "kicks member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('KICK_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.kick();
          message.channel.send(`<:verificado:879264162906255390> **| ${message.author} , o usuário <@${memberTarget.user.id}> foi expulso.**`);

      }else {
        message.channel.send(`<:negado:879264424211402752> **| ${message.author} , especifique um usuário para expulsar!**`);
      }
    }else {
      message.channel.send(`<:negado:879264424211402752> **| ${message.author} , sem permissão para expulsar este membro!**`);
    }
  },
};

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */