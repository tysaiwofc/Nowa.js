const jimp = require("jimp")
const Discord = require('discord.js')
const cooldowns = {}
const ms = require("ms")
const inlinereply = require('discord-reply')

exports.run = async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 100
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle('<:negado:879264424211402752>  Muita Calma nessa hora amigão !!!')
  .setColor('#F500FF')
    .setImage('https://cdn.discordapp.com/attachments/755506991019065425/765688678801604659/purple_load.gif')
  .setDescription(`**<:negado:879264424211402752> **| ${message.author}, espere \`${time}\` para executar outro comando**`)
        message.channel.send(`<:negado:879264424211402752> **| ${message.author} , Espere um pouco para utilizar esse comando novamente.**`).then(msg=> {
    msg.delete({ timeout: 100 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://cdn.discordapp.com/attachments/814270412422119435/816055040031719424/PicsArt_03-01-06.07.10.png")
        if (!args[0]) return message.channel.send(`<:negado:879264424211402752> **| ${message.author} , escreva algo para o bolsonaro escrever.**`)
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(885, 494)
                                           image.print(font, 450, 180, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.lineReply({files: [{ attachment: i, name: "bolsonaro.png"}]})
                })
            })
        })
    }