const Discord = require("discord.js")
const google = require("google-searcher")

exports.run = (client, msg, args) => {
  var search = args.join(1)
  if(!search) return msg.reply("search input is a requirment which is missing")
    new google()
    .host("www.google.com/search?q=")
    .lang("en")
    .query(args.join(' '))
    .exec()
    .then(result => {
 // https://www.youtube.com/watch?v=qb_hqexKkw8
    
    
    msg.channel.send(`Brings you the top result.\n${result[0]}\n\nAlso \n<${result[1]}>\n<${result[2]}>`)})
};
