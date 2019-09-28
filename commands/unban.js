const Discord = require("discord.js")

module.exports.run = async (bot, message, args, con) => {
	if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("permission is a requirment which is missing");
	let search = args.join(" ");
	if(!search) return message.reply("please provide a valid ID or name.");

	try {
		let bans = await message.guild.fetchBans();
		let banned = bans.get(search) || bans.find(u => u.tag.toLowerCase().includes(search.toLowerCase()));

		if(!banned) return message.reply("this user wasn't banned.");

		await message.guild.unban(banned);

   let embed = new Discord.RichEmbed()
       .setColor(message.member.highestRole.color)
       .setAuthor(message.author.username ,message.author.avatarURL)
       .setDescription(`A member has been unbanned:\nAuthor : **${message.author}**\nMember unbanned : **${search}\n\n**`)
       .setTimestamp()
   
		message.channel.send(`:ok_hand:`).then(()=>{
      let logs = message.guild.channels.find(channel => channel.name === "logs")
      if(!logs) return
      logs.send(embed)

    })

	} catch(e) {
		console.log(e)
	}
}

module.exports.help = {
	name: "unban"
}
