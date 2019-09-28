const Discord= require("discord.js")

exports.run = async (bot, msg, args) => {
 
  const user = msg.mentions.users.first() || bot.users.get(args[0]) || null
  const amount = !!user ? parseInt(msg.content.split(" ")[2], 10) : parseInt(msg.content.split(" ")[1], 10);
  if(isNaN(amount)) return msg.reply("amount is a requirement which must be a number")
  if (!amount) return msg.reply("amount is a requirement which is missing").then(msg.delete(2000));
  await msg.delete();
  if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("you don't have the permission to purge messages.")
  let messages = await msg.channel.fetchMessages();
  if(user) {
    messages = messages.array().filter(m=>m.author.id === user.id);
    messages.length = amount;
  } else {
    messages = messages.array();
    messages.length = amount;
  }
  msg.channel.bulkDelete(messages)
  let logs = msg.guild.channels.find(channel => channel.name === "logs")
  if(!logs) return
  let embed = new Discord.RichEmbed()
   .setAuthor(msg.author.username, msg.author.avatarURL)
   .setTimestamp()
   .setColor("000000")
   .setDescription(`An amount of messages have been purged :\n\nChannel : **${msg.channel}**\nModerator : **${msg.author}**\nMessages amount : **${amount}\n\n**`)  
  logs.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: 'purge',
  description: 'Deletes messages from anyone in the channel (requires Manage Messages)',
  usage: 'purge [number of messages]'
};