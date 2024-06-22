const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`\x1b[91m[ARS Utility]\x1b[39m No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: '\x1b[91m[ARS Utility]\x1b[39m Error 500 - Internal Server Error', ephemeral: true });
			} else {
				await interaction.reply({ content: '\x1b[91m[ARS Utility]\x1b[39m Error 500 - Internal Server Error', ephemeral: true });
			}
		}
	},
};