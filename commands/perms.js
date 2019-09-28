const Discord = require("discord.js")
exports.run = (client, message, args) => {

const userRM = message.guild.member(message.mentions.users.first()) || message.member

var VIEW_CHANNEL;
  if(userRM.hasPermission('VIEW_CHANNEL'))
    VIEW_CHANNEL = "YES"
  if(!userRM.hasPermission('VIEW_CHANNEL'))
    VIEW_CHANNEL = "no"


var SEND_MESSAGES;
  if(userRM.hasPermission('SEND_MESSAGES'))
    SEND_MESSAGES = "YES"
  if(!userRM.hasPermission('SEND_MESSAGES'))
    SEND_MESSAGES = "no"
    
   var READ_MESSAGES;
  if(userRM.hasPermission('READ_MESSAGES'))
    READ_MESSAGES = "YES"
  if(!userRM.hasPermission('READ_MESSAGES'))
    READ_MESSAGES = "no"

var add_reactions;
  if(userRM.hasPermission("ADD_REACTIONS"))
  	add_reactions = "YES"
  if(!userRM.hasPermission("ADD_REACTIONS"))
   add_reactions = "no"

var create_instant_invite; 
  if(userRM.hasPermission("CREATE_INSTANT_INVITE"))
	create_instant_invite = "YES"
if(!userRM.hasPermission("CREATE_INSTANT_INVITE"))
	create_instant_invite = "no"
	
	
 	
var external_emojis;
if(userRM.hasPermission("EXTERNAL_EMOJIS"))
	external_emojis = "YES"
if(!userRM.hasPermission("EXTERNAL_EMOJIS"))
	external_emojis = "no"
	
	
	
var read_messages_history;
if(userRM.hasPermission("READ_MESSAGE_HISTORY"))
	read_messages_history = "YES"
if(!userRM.hasPermission("READ_MESSAGE_HISTORY"))
	read_messages_history = "no"

var speak;
  if(userRM.hasPermission("SPEAK"))
    speak = "YES"
  if(!userRM.hasPermission("SPEAK"))
    speak = "no"
  
var use_voice_activation;
  if(userRM.hasPermission("USE_VAD"))
   use_voice_activation = "YES"
  if(!userRM.hasPermission("USE_VAD"))
    use_voice_activation = "no"
  
var ban;
  if(userRM.hasPermission('BAN_MEMBERS'))
    ban = "YES"
  if(!userRM.hasPermission('BAN_MEMBERS'))
    ban = "no"


var kick;
  if(userRM.hasPermission('KICK_MEMBERS'))
    kick = "YES"
  if(!userRM.hasPermission('KICK_MEMBERS'))
    kick = "no"
    
   var manage_message;
  if(userRM.hasPermission('MANAGE_MESSAGES'))
    manage_message= "YES"
  if(!userRM.hasPermission('MANAGE_MESSAGES'))
    manage_message = "no"

var MANAGE_ROLES;
  if(userRM.hasPermission('MANAGE_ROLES'))
    MANAGE_ROLES= "YES"
  if(!userRM.hasPermission('MANAGE_ROLES'))
    MANAGE_ROLES = "no"
    
    
   var MANAGE_CHANNELS;
  if(userRM.hasPermission('MANAGE_CHANNELS'))
    MANAGE_ROLES= "YES"
  if(!userRM.hasPermission('MANAGE_CHANNELS'))
    MANAGE_ROLES = "no"
    
  
  
    var MANAGE_GUILD ;
  if(userRM.hasPermission('MANAGE_GUILD'))
    MANAGE_GUILD= "YES"
  if(!userRM.hasPermission('MANAGE_GUILD'))
    MANAGE_GUILD = "no"
    
    
   var MANAGE_CHANNELS;
 if(userRM.hasPermission('MANAGE_CHANNELS'))
    MANAGE_CHANNELS= "YES"
  if(!userRM.hasPermission('MANAGE_CHANNELS'))
    MANAGE_CHANNELS = "no"
   
   
  var ADMIN;
  if(userRM.hasPermission('ADMINISTRATOR'))
    ADMIN = "YES"
  if(!userRM.hasPermission('ADMINISTRATOR'))
    ADMIN = "no"
    
    
   var MUTE_MEMBERS;
  if(userRM.hasPermission('MUTE_MEMBERS'))
    MUTE_MEMBERS= "YES"
  if(!userRM.hasPermission('MUTE_MEMBERS'))
    MUTE_MEMBERS = "no"
   
   
   var MOVE_MEMBERS;
  if(userRM.hasPermission('MOVE_MEMBERS'))
    MOVE_MEMBERS= "YES"
  if(!userRM.hasPermission('MOVE_MEMBERS'))
    MOVE_MEMBERS = "no"
    
  var VIEW_AUDIT_LOG;
    
     if(userRM.hasPermission('VIEW_AUDIT_LOG'))
        VIEW_AUDIT_LOG= "YES"
    if(!userRM.hasPermission('VIEW_AUDIT_LOG'))
         VIEW_AUDIT_LOG = "no"
   
   var DEAFEN_MEMBERS;
    
     if(userRM.hasPermission('DEAFEN_MEMBERS'))
        DEAFEN_MEMBERS= "YES"
    if(!userRM.hasPermission('DEAFEN_MEMBERS'))
         DEAFEN_MEMBERS = "no"
  
  var MENTION_EVERYONE;
    
     if(userRM.hasPermission('MENTION_EVERYONE'))
        MENTION_EVERYONE= "YES"
    if(!userRM.hasPermission('MENTION_EVERYONE'))
         MENTION_EVERYONE = "no"
  
  var MANAGE_NICKNAMES;
    
     if(userRM.hasPermission('MANAGE_NICKNAMES'))
        MANAGE_NICKNAMES= "YES"
    if(!userRM.hasPermission('MANAGE_NICKNAMES'))
         MANAGE_NICKNAMES = "no"
  
  
  var MANAGE_WEBHOOKS;
    
     if(userRM.hasPermission('MANAGE_WEBHOOKS'))
        MANAGE_WEBHOOKS= "YES"
    if(!userRM.hasPermission('MANAGE_WEBHOOKS'))
         MANAGE_WEBHOOKS = "no"
  
    
   
  
  
  let perms = `
 add_reactions         | ${add_reactions}
 administrator         | ${ADMIN}
 ban_members           | ${ban}
 create_invite_instant | ${create_instant_invite}
 kick_members          | ${kick}
 manage_guild          | ${MANAGE_GUILD}
 manage_channels       | ${MANAGE_CHANNELS}
 manage_roles          | ${MANAGE_ROLES}
 manage_messages       | ${manage_message}
 view_audit_log        | ${VIEW_AUDIT_LOG}
 mute_members          | ${MUTE_MEMBERS}
 deafen_members        | ${DEAFEN_MEMBERS}
 move_members          | ${MOVE_MEMBERS}
 speak                 | ${speak}
 use_voice_activation  | ${use_voice_activation}
 external_emojis       | ${external_emojis}
 mention_everyone      | ${MENTION_EVERYONE}
 manage_nicknames      | ${MANAGE_NICKNAMES}
 manage_webhooks       | ${MANAGE_WEBHOOKS}
 read_messages         | ${READ_MESSAGES}
 read_message_history  | ${read_messages_history}
 send_messages         | ${SEND_MESSAGES}
 view_channel          | ${VIEW_CHANNEL}
`
let embed = new Discord.RichEmbed()
  .setAuthor(`Permissions of ${userRM.user.tag}`, userRM.user.avatarURL)
  .setColor("BLACK")
  .setDescription('```ml\n'+perms+'```')
  .setFooter("Embed sucks, and i need to use this fuckin' footer. -_-")


    message.channel.send(embed)
}