const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(
      `\x1b[91m[ARS Utility] \x1b[39mReady! Logged in as ${client.user.tag}`
    );
  },
};
