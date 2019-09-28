
exports.run = (client, msg, args) => {
  msg.delete()
  if(msg.author.id !== "513024712457191434" ) return
  msg.channel.send(args.join(" "))
};
