const Discord = require("discord.js");
const ms = require("ms");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do not disturb",
  offline: "Offline"
};
exports.run = (client, msg, args) => {
  const userRM = msg.mentions.members.first() ||  msg.member;
  let bot;
  if (userRM.user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }
  const embed = new Discord.RichEmbed()
    .setColor(userRM.highestRole.hexColor)
    .setThumbnail(userRM.user.avatarURL)
    .setAuthor(`${msg.author.tag}`, msg.author.avatarURL)
    .setDescription(`\n :white_medium_small_square: Username : **${userRM.user.username}**\n:white_medium_small_square: Nickname : **${userRM.nickname || "No nickname setted"}**\n:white_medium_small_square: Discriminator : **#${userRM.user.discriminator}**\n:white_medium_small_square: USER ID : **${userRM.id}**\n:white_medium_small_square: Account created : **${ms(new Date - userRM.user.createdAt)} ago.**\n:white_medium_small_square: Account joined : **${ms(new Date() - userRM.joinedAt)} ago.**\n:white_medium_small_square: Presence Status : **${status[userRM.user.presence.status]}**\n:white_medium_small_square: Game Status : **${userRM.user.presence.game ? `${userRM.user.presence.game.name}` : "not playing anything."}**\n:white_medium_small_square: Roles : **${userRM.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ")|| "No Roles"}\n\n**`)
    .setTimestamp()
 
    
  


  msg.channel.send({
    embed
  });
};