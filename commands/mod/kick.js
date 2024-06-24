const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a user from the server')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to kick')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for kicking')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) {
            return interaction.reply({ content: '[ARS Utility] Error 403 - You don\'t have permissions to use this command', ephemeral: true });
        }

        const target = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || ' ';

        const warn = new EmbedBuilder()
            .setTitle('Warning!')
            .setDescription(`You have been kicked from ${interaction.guild.name} by \`@${interaction.user.username}\` for the following reason: ${reason}`)
            .setFooter('This message is automatic!')
            .setColor('Red');
        const msg = new EmbedBuilder()
            .setTitle('Success!')
            .setDescription(`Successfully kicked ${target.username}`)
            .setFooter('This message is automatic!')
            .setColor('Blurple');
        const embed = new EmbedBuilder()
            .setTitle('Error 404')
            .setDescription('User not found')
            .setFooter('This message is automatic')
            .setColor('Red');
        const notKickable = new EmbedBuilder()
            .setTitle('Error 401')
            .setDescription(`User @${target.username} cannot be kicked`)
            .setFooter('This message is automatic')
            .setColor('Red');

        const member = interaction.guild.members.cache.get(target.id);

        if (!member) {
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        if (!member.kickable) {
            return interaction.reply({ embeds: [notKickable], ephemeral: true });
        }

        try {
            await target.send({ embeds: [warn] });
        } catch (error) {
            console.error('\x1b[91m[ARS Utility]\x1b[39m Could not send DM to the user:', error);
        }

        try {
            await member.kick(reason);
            await interaction.reply({ embeds: [msg], ephemeral: true });
        } catch (error) {
            console.error(`\x1b[91m[ARS Utility] \x1b[39m Error 502 - Error Detected!:`, error);
            await interaction.reply({ content: '[ARS Utility] Error 502 - Server Error', ephemeral: true });
        }
    },
};
