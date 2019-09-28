const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {



  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("member mention is a requirement which is missing");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Unfortunately, I can't do that.");
  let muterole = message.guild.roles.find(`name`, "fucked");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "fucked",
        color: "#ffffff",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }


  if(args[0]== "up") {
    tomute.addRole(muterole.id).then(message.channel.send("Unfortunately, you are in my badlist kids, looser"))}
  
  if(args[0] == "down" && tomute.roles.has(muterole.id)) {
    tomute.removeRole(muterole.id).then(message.channel.send("Now you are a good kid i guess :grin:"))}
    
  ;
  let embed = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarURL)
   .setTimestamp()
   .setColor("000000")
   .setDescription(`A member has been fucked off :\n\nTarget : **${tomute.user.tag}**\nModerator : **${message.author.tag}\n\n**`)  



let logs = message.guild.channels.find(channel => channel.name === "logs") 
    if(!logs) return
  logs.send(embed)
}
