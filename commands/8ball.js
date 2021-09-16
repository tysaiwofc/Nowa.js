const Discord = require("discord.js");
const inlinereply = require('discord-reply');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let prefix = db.get(`ferinha_prefixo_${message.guild.id}`);
  if(prefix === null) prefix = 'n!'

  let url = args[0];
    if (!url) {
      let embed = new Discord.MessageEmbed()
      .setAuthor('Nowa.js','https://cdn.discordapp.com/avatars/461346834342739978/a_cf4cc7f3d7667e6cedd8f0d500b48c43.gif')
      .setDescription(`<a:among:870719321142329405> \`${prefix}8ball\`\nPergunte para a bola mágica que ela responde\n:interrobang: **Como usar?** \`${prefix}8ball <pergunta>\``)
      .setThumbnail('https://cdn.discordapp.com/avatars/461346834342739978/a_cf4cc7f3d7667e6cedd8f0d500b48c43.gif')
      .addFields(
        {
          name: '<:livro:880967842160336897> __Exemplos:__',
          value: `**Pergunte qualquer coisa**\n${prefix}8ball o Nowa.js é lindo?`,
          inline: false
        },
        {
          name: '<a:vm_aviso_old:873031787423629332> __Permissões:__',
          value: 'Você não precisa de nenhuma permissão!'
        }
      )
      message.lineReply(embed)
    }
 try {
 let name = ('Bola 8');

 let avatar = {avatar: 'https://cdn.discordapp.com/attachments/862566063090171995/877483319309254736/magic-8-ball.png'}


 let batata = [
  'Sim.',
  'Talvez.',
  'Melhor você não saber.',
  'Não.',
  'Pare de me pertubar.',
  'Olhe para trás...',
  'Você não viu nada...',
  'Sabia que meu criador não existe ?',
  'Ninguém sabe.',
  'Me deixe em paz!',
  'Pergunte a loritta.',
  'Pergunte a Loritta e me deixe em paz.',
  'Nem eu consigo responder.',
  'Pergunta a outro bot.',
  'Error na linha 80 , zueira eu não tenho erros.',
  'Você não se cansa?',
  'É sério isso?',
  'Pra que isso...',
  'Sabia que são mais de 100 respostas?',
  'Meu dono ficou 2 horas fazendo esse comando e você usa assim.',
  'Deixe eu dormir!',
  'Paraaaaaa',
  'Não me pergunte nada , estou falando com a Loritta.',
  'Sem mais perguntas.',
  'Talvez sim , Talvez não.',
  'Pergunte a ela(e)',
  'Testando... 1 2 3.'

];
let arg = batata[Math.floor(Math.random() * batata.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.lineReply(`<:negado:879264424211402752> **| Eu não tenho permissão para criar webhooks.**`)
 }


}