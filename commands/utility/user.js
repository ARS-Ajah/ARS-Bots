const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle(`${interaction.user.username} Info`)
      .setColor('Gold')
      .setFields(
        {
          name: `${interaction.user.username} Name`,
          value: interaction.user.username
        },
        {
          name: `${interaction.user.username} Joined At`,
          value: interaction.member.joinedAt
        },
        {
          name:` `,
          value: `|| @${interaction.user.username} ||`
        }

      )
    await interaction.reply({
      embeds: [embed]
  });
  },
};
