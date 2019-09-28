const Discord = require("discord.js")
const jimp = require("jimp")
const imgur = require("imgur")
module.exports.run = async (client, message, args) => {
  
  const member = message.mentions.members.first()
  const member2 = message.author
  if (!member) return message.reply("member mention is a requirement which is missing")
  if(member2.id === member.user.id) return message.reply("inteleg ca esti trist, dar nu poti sa dai ship cu tine insuti")
  if(member.user.bot) return message.reply("inteleg ca esti disperat, dar nu dai ship cu un bot")
var string = member2.id
  var array = string.split("").map(Number)
  var sum = array.reduce((a, b) => a + b, 0)
  var string1 = member.id
  var array1 = string1.split("").map(Number)
  var sum1 = array1.reduce((a, b) => a + b, 0)
  var x; 
    if(message.author.id !=="513024712457191434") 
      x = Math.floor((sum + sum1)-100)
    if(message.author.id == "513024712457191434")
      x = Math.floor((sum + sum1) -70);
   
  
  var c = x/10
  var op = "█".repeat(c)
  
  
  

  var a = member +  ' :heart: '+ member2 +'\n**'+ x +'%**  '+op 
  
  
jimp.read(message.author.avatarURL, (err, lenna) => {
jimp.read("https://i.imgur.com/XCYs0JY.png", (err, blue) => {
jimp.read(member.user.avatarURL, (err, av) => {
  lenna
    .resize(215, 215) 
    .quality(60)
  av.resize(215, 215)
    .quality(60)
  blue.composite(lenna, 15, 90)
  blue.composite(av, 372, 93) 
      .write('/app/b.png')

        var embed = new Discord.RichEmbed()
           .setAuthor("Ship result:", client.user.avatarURL)
           .setDescription(a)
           .setColor("#C70039")
        message.channel.send("",{file:"b.png"})
      setTimeout(function(){message.channel.send(embed)},300)
  
  
  
  
   
            })
        })
});

  
  
  
}


   
