const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a user from the server')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to ban')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for banning')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
            return interaction.reply({ content: '[ARS Utility] Error 403 - You don\'t have permissions to use this command', ephemeral: true });
        }

        const target = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || ' ';

        const warn = new EmbedBuilder()
            .setTitle('Warning!')
            .setDescription(`You have been banned from ${interaction.guild.name} by \`@${interaction.user.username}\` for the following reason: ${reason}`)
            .setFooter('This message is automatic!')
            .setColor('Red');
        const msg = new EmbedBuilder()
            .setTitle('Success!')
            .setDescription(`Successfully banned ${target.username}`)
            .setFooter('This message is automatic!')
            .setColor('Blurple');
        const embed = new EmbedBuilder()
            .setTitle('Error 404')
            .setDescription('User not found')
            .setFooter('This message is automatic')
            .setColor('Red');
        const notBannable = new EmbedBuilder()
            .setTitle('Error 401')
            .setDescription(`User @${target.username} cannot be banned`)
            .setFooter('This message is automatic')
            .setColor('Red');

        const member = interaction.guild.members.cache.get(target.id);

        if (!member) {
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        if (!member.bannable) {
            return interaction.reply({ embeds: [notBannable], ephemeral: true });
        }

        try {
            await target.send({ embeds: [warn] });
        } catch (error) {
            console.error('\x1b[91m[ARS Utility]\x1b[39m Could not send DM to the user:', error);
        }

        try {
            await member.ban({ reason });
            await interaction.reply({ embeds: [msg], ephemeral: true });
        } catch (error) {
            console.error(`\x1b[91m[ARS Utility] \x1b[39m Error 502 - Error Found!:`, error);
            await interaction.reply({ content: '[ARS Utility] Error 502 - Server Error!', ephemeral: true });
        }
    },
};
