
const Discord = require("discord.js")

exports.run = (client, message, args) => {

const helpFolder = './commands/';
const fs = require('fs');
var arrayRM = []
fs.readdir(helpFolder, (err, files) => {
  var a = arrayRM.push(files)
  var b = JSON.stringify(arrayRM)
  var c = b.replace(/.js/g, '')
  var d = c.replace(/"/g, '')
  var e = d.split(",").join('\n· ')
  var f = e.split("[[").join('')
  var aa = f.split("· eval\n").join('')
  var dd = aa.split("· exec\n").join('')
  var bb = dd.split("· reload\n").join('')
  var g = bb.split("]]").join('')
  
  var embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setAuthor('Commands of Sushi Cat\n\n· '+g)
    .setColor('ffffff')
    .setTimestamp()
    message.channel.send(embed)
  });
 
}