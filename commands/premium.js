const db = require('quick.db')

module.exports = {
  
  run: async (client, message, args) => {

    const ownerid = '461346834342739978'

    if (message.author.id === ownerid) {
      let user =await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

 db.set(`premium_${user.id}`, '<:diamante:876608977679552524>');

 message.channel.send(`<:verificado:879264162906255390> **| ${message.author} , premium dado para ${user} , agora o ${user} ganhará o emblema <:diamante:876608977679552524> no seu perfil e diversas funcionalidades!**`)
    } else {
      message.channel.send(`<:negado:879264424211402752> **| ${message.author} , apenas meu dono pode usar esse comando!**`)
    }

    
    
  }
}