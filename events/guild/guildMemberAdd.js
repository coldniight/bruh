const { prefix } = require("../../botconfig.json")

module.exports = async (bot, member) => {
    var role = bot.guilds.get("560092120325685259").roles.find('id', '560128326291816448');
    member.addRole(role);
}