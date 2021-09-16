const inlinereply = require('discord-reply');

module.exports.run = async(client, message, args) => {
  const ferinha = await message.lineReply(` 🏓 **Pong!** `);
  ferinha.edit(`<:DedicatedServer:878905810862886952> **| ${message.author} , Meu ping ping é:** \`${Math.round(
      client.ws.ping
    )}ms\``);
}