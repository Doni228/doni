const Discord = require('discord.js'); 
const user = new Discord.Client(); 
user.login(process.env.token);

user.on('ready', () => {
user.user.setActivity('за тобой', { type: "WATCHING" });
});
