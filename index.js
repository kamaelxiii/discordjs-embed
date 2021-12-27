const ReactionRoleManager = require('discord.js-collector');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');
const { prefix, token, airtable_apikey, airtable_base } = require('./config-dev.json');
const client = new Discord.Client();

const txtEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot online');
    client.user.setActivity('Kamael愛2885 | Reverie', {type: "PLAYING" } ).catch(console.error);
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        const txtEmbed = new Discord.MessageEmbed();
        client.commands.get(command).execute(message, args, base, txtEmbed, fetch, Discord, client,ReactionRoleManager);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);