const Discord = require("discord.js");
const inlinereply = require('discord-reply');
const db = require('quick.db')

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
let prefixo_fera = db.get(`ferinha_prefixo_${message.guild.id}`);
if (!prefixo_fera) prefixo_fera =  'n!';
    const embed = new Discord.MessageEmbed()
          .setTitle('__Nowa.js__™ | Painel de ajuda')
          .setDescription(`Olá, eu sou o Nowa.js™ , um bot para ajudar no seu servidor\neu também possuo vários comandos de diversão,economia,utilidade e etc...\nno caso de dúvidas entre no meu servidor de [suporte](https://discord.gg/5xDNgyhaVr)`)
          .setColor('YELLOW')
          .setThumbnail('https://cdn.discordapp.com/avatars/461346834342739978/a_cf4cc7f3d7667e6cedd8f0d500b48c43.gif')
          .setFooter(`Use ${prefixo_fera}feedback e me avalie!`)
          .addFields(
            {
              name: '⚙️ Moderação',
              value: '\`unbanall\` , \`unban\` , \`kick\` , \`criarembed\` , \`lock\`\n\`unlock\` , \`mute\` , \`unmute\` , \`tempmute\` , \`prefixo\`\n\`setautorole\` , \`addrole\` , \`removerole\`\n\`say\` , \`clear\` \`mod-log on\` \`mod-log off\`',
              inline: false
            },
            {
              name: '🪙 Economia',
              value: '\`atm\` , \`pay\` , \`dep\` , \`moneytop\` , \`sacar\`\n\`daily\` , \`apostar\`',
              inline: false
            },
            {
              name: '🤣 Diversão',
              value: '\`hug\` , \`kiss\` , \`atacar\` , \`ship\`\n\`snake\` , \`casar\` , \`divorciar\`\n\`bolsonaro\` , \`bobfogueira\` , \`slap\`',
              inline: false
            },
            {
              name: '💁 Utilidade',
              value: '\`userinfo\` , \`sobremim\` , \`perfil\` , \`status\`\n\`userinfo\` , \`invite\`  , \`botinfo\` , \`help\` ,  \`afk\`',
              inline: false
            },
            {
              name: '🔗 Links úteis',
              value: '💻 **Servidor:** [link](https://discord.gg/5xDNgyhaVr)\n🌐 **Site:** \`em breve\`\n🤖 **Convidar:** [link](https://discord.com/api/oauth2/authorize?client_id=862160712401944577&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D862160712401944577%26permissions%3D8%26scope%3Dbot&scope=bot%20applications.commands)'
            }
          );   
    message.lineReply(`${message.author}`, embed)
}}