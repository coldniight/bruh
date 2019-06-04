const { botconfig } = require("../../botconfig.json")
const botstatus = "epic gamer games";

module.exports = async (bot) => {
    bot.user.setActivity(botstatus, {type: 'PLAYING'});
}
