const Discord = require("quick.db");
const db = require("quick.db");


module.exports = {
    name: "set autorole",
    author: "",

    run: async(client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Permissões insuficientes!`);

        
        if (!args[0]) {
          await message.channel.send('Nenhum canal informado!')
        }

        let ch = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        db.set(`entrada_${message.guild.id}`, ch.id);


        message.channel.send(`Canal de entrada setado para <#${ch}>`)
        ch.send('Este canal foi setado como canal de entrada!')

    }
}
