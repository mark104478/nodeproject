const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  var nume = args.join(' ')
   var userR = message.mentions.users.first() || client.users.find(user => user.username.toLowerCase () == nume.toLowerCase())  || message.author

  const embed = new Discord.RichEmbed()
            .setImage(userR.avatarURL)
            .setColor("#36393e")
            .setFooter(`Requested by : ${message.author.username}`, message.author.avatarUL)
        message.channel.send(embed);


}

exports.conf ={
  aliases : ['av']
}