const settings = require('../settings.json');
exports.run = (bot, message, args) => {
    message.channel.send(args.join(" "))
    message.delete(message.author)
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['copy'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Says what you want the bot to say',
  usage: 'say [message]'
};
