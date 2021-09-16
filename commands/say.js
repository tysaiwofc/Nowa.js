const Discord = require("discord.js");

module.exports = {
  name: "say",
  //o bot fala sua msg!

  run: async(client, message, args) => {
 
    let msg = args.join(" "); //setando...
    let author = message.author

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply(`<:negado:879264424211402752> **| ${message.author} Você não possui a permissão** \`GERENCIAR MENSAGENS\`!`);


    if (!msg) return message.lineReply(`:<:negado:879264424211402752> **| ${message.author} , Você precisa escrever algo para eu falar!**`); //verificando se há alguma mensagem

    message.lineReply(`${msg}\n\n**Enviado por:** ${message.author}`)
     //comando para o bot falar sua mensagem
  }
}