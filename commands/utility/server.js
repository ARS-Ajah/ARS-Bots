const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`${interaction.guild.name} Info`)
            .setColor('DarkButNotBlack')
            .setFooter(
                {
                    name: `${interaction.guild.name} Name`,
                    value: interaction.guild.name
                },
                {
                    name: `${interaction.guild.name} Member Count`,
                    value: `${interaction.guild.name} Has ${interaction.guild.memberCount} Members.`
                }
            )
		await interaction.reply({ embeds: [embed] });
	},
};