 exports.run = (client, message, args) => {
 var userMention = message.guild.member(message.mentions.users.first())
 if(!userMention) return message.channel.send("Esti prea prost sa ii dai mention cuiva?")
 if(userMention.id == "328764691654377472") return message.reply("da' ce pula mea ai tu cu Dedi?")
  var insults  = [`${userMention.user.username}, ${message.author.username} si-a bagat pula-n mortii tai, cam necrofil.`,
                  `${userMention.user.username}, ${message.author.username} ti-a futut mama.. `,
                  `${userMention.user.username}, ${message.author.username} ti-a dat-o la muie.`,
                  `${userMention.user.username}, sa-i sugi pula lu' ${message.author.username} `,
                  `${userMention.user.username}, esti mai prost decat prevede legea.`,
                  `${userMention}, ${message.author.username} are o dilema, daca sperma are 7g, maica-ta de ce e obeza?`
                ]
  var rand = insults[Math.floor(Math.random() * insults.length)];
   message.channel.send(rand)
 }