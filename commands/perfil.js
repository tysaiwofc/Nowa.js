const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');


const flags = {
	DISCORD_EMPLOYEE: '<a:staff_ferinha:870007622001119275>',
	DISCORD_PARTNER: '<:dboatsDiscordPartner:879901288832311386>',
	BUGHUNTER_LEVEL_1: '<:TCC_IconBugHunterBadge:879901392779739216>',
	BUGHUNTER_LEVEL_2: '<:TCC_IconBugHunterGoldBadge:879901432235573268>',
	HYPESQUAD_EVENTS: '<a:hyper_sq:879899501400301588>',
	HOUSE_BRAVERY: '<:HypeSquadBravery:878201508032827423>',
	HOUSE_BRILLIANCE: '<:HypeSquadBrilliance:879899227034120253>',
	HOUSE_BALANCE: '<:HypeSquadBalance:878201328101392394>',
	EARLY_SUPPORTER: '<:zz_earlysupport:879900034785759284>',
	TEAM_USER: 'Team user',
	SYSTEM: 'Sistema',
	VERIFIED_BOT: '<:Bot_Flag:879901889565704222>',
	VERIFIED_DEVELOPER: '<:dev:874717224047374417>',
  MODERATOR: '<:moderator:879955583447486494>',
  DISCORD_NITRO: 'TESTE'
};


exports.run = async (bot, message, args) => {

  

  let prefixo_fera = db.get(`ferinha_prefixo_${message.guild.id}`);
  if (prefixo_fera === null) prefixo_fera = 'n!';

        let user =await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        const userFlags = user.user.flags.toArray();

        let money = await db.fetch(`money_${user.id}`);

        let bank = await db.fetch(`bank_${user.id}`);

        let premium = await db.fetch(`premium_${user.id}`);

        let sobremim = await db.fetch(`sobremim_${user.id}`);

        let xpzin = await db.fetch(`xp_${user.id}`);

        let casado = db.fetch(`casado_${user.id}`)

        if(sobremim === null) sobremim = `use ${prefixo_fera}sobremim , para personalizar.`
        if(bank === null) bank = 0
        if(money === null) money = 0
        if(xpzin === null) xpzin = 0
        if(premium === null) premium = ``
        if(casado ===null) casado = ``

        const embed = new MessageEmbed()
            .setTitle(`Perfil de ${user.user.username}`)
            .setColor(`YELLOW`)
            .setFooter('Perfil beta')
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
        {
            name: '__Carteira:__',
            value: `:dollar: \`${money}\``,
            inline: false
        },
        {
          name: '__Banco:__',
          value: `:coin: \`${bank}\``,
          inline: false
        },
        {
          name: '__Esmeraldas:__',
          value:`<:petincomum:879139352725315636> \`${xpzin}\``,
          inline: false
        },
        {
          name: '__Emblemas:__',
          value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : ''} ${casado} ${premium}`,
          inline: false
        },
        {
          name: '__Sobre mim:__',
          value: `${sobremim}`,
          inline: false
        },
    )

        await message.lineReply(`${message.author}`, embed)
    }




