module.exports = {
	name: 'help',
	description: 'Help Helper',
	execute(message, args, base, txtEmbed, fetch, Discord) {
		const re = new Discord.MessageEmbed()
        .setTitle('Sample Embed')
		.setDescription('Sample Discord Embed with Fields')
        .setColor('0xfd700')
		.addFields(
			{
				
				name: 'Field 1',
                value: 'Value 1',
				inline: false
			  },
			  {
				name: 'Field 2',
                value: 'Value 2',
				inline: true
			  }
		)
		.setFooter('Sample Footer',"https://cdn.discordapp.com/emojis/716646785606484079.png?v=1")
		  .setThumbnail("https://cdn.discordapp.com/emojis/716646785606484079.png?v=1");
		message.channel.send(re);
	},
};

