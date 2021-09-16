const { MessageEmbed } = require('discord.js');
const inlinereply = require('discord-reply');

module.exports = {
    config: {
        name: "eval",
        description: "Evaluates js code",
        accessableby: "Bot Owner",
        category: "owner",
        aliases: ["e"],
        usage: 'eval <input>'
    },
    run: async (bot, message, args) => {
        function clean(text) {
            if (typeof text === "string")
                return text
                    .replace(/`/g, "`" + String.fromCharCode(8203))
                    .replace(/@/g, "@" + String.fromCharCode(8203));
            else return text;
        }
        let owner = '461346834342739978'

        if (!owner.includes(message.author.id)) return;

        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

            message.react("✅");
            var emb = new MessageEmbed()
                .setTitle('Resultado')
                .setDescription(`\`\`\`js` + '\n' + clean(evaled) + `\n` + `\`\`\``)
                .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
                .setColor(0xd26a0e)
            message.lineReply(emb);
        } catch (err) {
            message.react("⚠");
            var emb = new MessageEmbed()
                .setTitle('Resultado')
                .setDescription(`\`\`\`js` + '\n' + clean(err) + `\n` + `\`\`\``)
                .setFooter(bot.user.username, bot.user.displayAvatarURL({ dynamic: true }))
                .setColor(0xd26a0e)
            message.lineReply(emb);
        }
    }
}