exports.run = (client, msg, args) => {
  var toLeet = args.join(' ')
var result =  toLeet.replace(/o/g, "0").replace(/e/g, "3").replace(/i/g, "1").replace(/s/g, "$").replace(/a/g, "4").replace(/b/g, "8").replace(/l/g, "!")
msg.channel.send(`${result}. (requested by `+'`'+msg.author.tag+'`)')
};