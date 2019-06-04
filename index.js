const { Client, Collection } = require("discord.js");
const { token } = require("./botconfig");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login("NTg1MzEzMjIyNjQzNDE3MTA4.XPXpgg.azQOjkLOg9c2MQmdtKGnVqX7Sfc");