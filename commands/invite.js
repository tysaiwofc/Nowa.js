const Discord = require ("discord.js");
const inlinereply = require('discord-reply');

module.exports = {
    name: "embed full by ferinha <3",
    description: "o bot vai enviar uma embed full + menção",
    author: "ferinha :))",

    run: async(client, message, args) => {

        let fera = message.author;

        let ferinha = new Discord.MessageEmbed()
        .setAuthor(`➔ Nowa.js™#9412`, /*url de alguma coisa*/)
        .setTitle(``)
        .setDescription(`**Clique [aqui](https://top.gg/bot/862847322908262400) para me convidar**`)
        .setFooter(`➔ Criador: nãoexisto#0001`)
        .setColor("YELLOW")
        .setThumbnail("https://cdn.discordapp.com/avatars/862160712401944577/6624c811d7584f54cfebc3e4b64d957e.png") //url de alguma imagem (na direita | parte de cima)
        .setTimestamp()
        .addFields(
          
            {
                name: "➔ Chave Pix para doações",
                value: "`031e9e7b-b2f9-4ec7-a4b9-52794f2883e9`",
                inline: true
            }
        );

        message.lineReply(ferinha)
  
    }
}