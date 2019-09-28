const Discord = require("discord.js");
const ms = require("ms");

exports.run = (client, msg, args) => {
  const embed = new Discord.RichEmbed()
    .setColor(msg.member.highestRole.hexColor)
    .setThumbnail(msg.guild.iconURL)
    .setAuthor(`${msg.author.tag}`, msg.author.avatarURL)
    .setDescription(`:white_medium_small_square: Server Name : **${msg.guild.name}**\n:white_medium_small_square: SERVER ID : **${msg.guild.id}**\n:white_medium_small_square: OWNER : **${msg.guild.owner}**\n:white_medium_small_square: Region : **${msg.guild.region}**\n:white_medium_small_square: Server created : **${ms(new Date() - msg.guild.createdAt)} days ago.**\n:white_medium_small_square: Member count : **${msg.guild.memberCount} members.**\n:white_medium_small_square: Channels Count : **${msg.guild.channels.size}**\n:white_medium_small_square: Online Members   : **${msg.guild.members.filter(m => m.presence.status === 'online').size}**\n:white_medium_small_square: Roles count : **${msg.guild.roles.size}\n\n**`)
    .setTimestamp()
 
    
  


  msg.channel.send({
    embed
  });
};