const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('💀 **RABBIT NXT** 💀')
	.setDescription("**Layer 7** \n `HTTP-RAW` `HTTP-CF` `HTTPGET` \n `HTTP-FLOOD` `HTTP-BROWSER` `HTTP-BÉO` \n **Layer 4** \n `TCP-KILL` `UDP-KILL`")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['methods'],
  permLevel: 0
}

exports.help = {
  name: 'methods',
  description: 'Rabbitx#6150',
  usage: 'methods'
}
