exports.run = (client, msg, args) => {
  msg.delete();
  msg.channel.send("Ping?").then(m => m.edit(`**Latency is [${m.createdTimestamp - msg.createdTimestamp}ms].\nAPI Latency is [${Math.round(client.ping)}ms]**`));
};
