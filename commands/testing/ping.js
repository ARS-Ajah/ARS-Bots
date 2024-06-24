const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot!"),
  async execute(interaction) {
    let emoji = {
      good: '<:green_wifi:1252478564155265175>',
      normal: '<:orange_wifi:1254781275944779899>',
      bad: '<:red_wifi:1252478486002794628>'//change this to your liking
    };
    const ws = interaction.client.ws.ping();
    const api = Date.now() - interaction.createdTimestamp;

    let days = Math.floor(interaction.client.uptime / 86400000);
    let hours = Math.floor(interaction.client.uptime / 3600000) % 24;
    let minutes = Math.floor(interaction.client.uptime / 60000) % 60;
    let seconds = Math.floor(interaction.client.uptime / 1000) % 60;

    const wsEmoji = ws <= 100 ? emoji.good : ws <= 200 ? emoji.normal : emoji.bad;
    const apiEmoji = api <= 200 ? emoji.good : emoji.bad

    const embed = new EmbedBuilder()
      .setThumbnail(interaction.client.user.displayAvatarURL({ size: 64 }))
      .setTitle(`${interaction.client.user.username} Ping`)
      .setTimestamp()
      .setFooter({ text: `Pinged By`  })
      .addFields(
        {
          name: 'WebSocket Latency',
          value: `${wsEmoji} \`${ws}ms\``,
          inline: false
        },
        {
          name: 'API Latency',
          value: `${apiEmoji} \`${api}ms\``,
          inline: false
        },
        {
          name: `${interaction.client.user.username} Uptime`,
          value: `<:clock~1:1254781007241023489>\`${days} Days ${hours} Hours ${minutes} Minute ${seconds} Seconds\``,//Also change <:clock~1:>
          inline: false
        }
      )

    await interaction.reply({ embeds: [embed], content: '\u200b'})  
  }
}