const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {



  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("member mention is a requirement which is missing");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I can't mute that user.");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("time amount is a requirement which is missing");
  let embed = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarURL)
   .setTimestamp()
   .setColor("000000")
   .setDescription(`A member has been muted :\n\nTarget : **${tomute.user.tag}**\nModerator : **${message.author.tag}**\n Time amount : **${mutetime}\n\n**`)  


  await(tomute.addRole(muterole.id));
  message.channel.send(`:white_check_mark: | <@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);


  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`:white_check_mark: | <@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


let logs = message.guild.channels.find(channel => channel.name === "logs") 
    if(!logs) return
  logs.send(embed)
}
