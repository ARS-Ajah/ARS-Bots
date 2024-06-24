const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder, Client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('warn')
        .setDescription('Kick a user from the server')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to warn')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for warning')
                .setRequired(true)),
    async execute(interaction) {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply({ content: '[ARS Utility] Error 403 - You don\'t have permissions to use this command', ephemeral: true });
        }

        const target = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || ' ';
        const warn1 = interaction.options.getRole('Warned1');
        const warn2 = interaction.options.getRole('Warned2');
        const warn3 = interaction.options.getRole('Warned3');
        const warn4 = interaction.options.getRole('Warned4');
        const warn5 = interaction.options.getRole('Warned5');  
        const warn = new EmbedBuilder()
            .setTitle('Warning!')
            .setDescription(`You have been warned from ${interaction.guild.name} by \`@${interaction.user.username}\` for the following reason: ${reason}`)
            .setAuthor('This message is automatic!')
            .setColor('Red');
        const msg = new EmbedBuilder()
            .setTitle('Success!')
            .setDescription(`Successfully Warned @${target.username}`)
            .setAuthor({ text:'This message is automatic' })
            .setColor('Blurple');
        const embed = new EmbedBuilder()
            .setTitle('Error 404')
            .setDescription('User not found')
            .setAuthor({ text:'This message is automatic' })
            .setColor('Red');
        const notKickable = new EmbedBuilder()
            .setTitle('Error 401')
            .setDescription(`User @${target.username} cannot be warned`)
            .setAuthor({ text:'This message is automatic', iconURL: client.user.displayAvatarURL() })
            .setColor('Red');
        const kick  = new EmbedBuilder()
            .setTitle('Warning!')
            .setDescription(`You have been Kicked from ${interaction.guild.name} by \`@${interaction.user.username}\` for the following reason: You've Reached the 5 Warn Limit. Your Last Warn: ${reason}`)
            .setAuthor({ text:'This message is automatic' })
            .setColor('Red');

        const member = interaction.guild.members.cache.get(target.id);

        if (!member) {
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        if (!member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
            return interaction.reply({ embeds: [notKickable], ephemeral: true });
        }

        if (!member.permissions.has(PermissionsBitField.Flags.Administrator)) {
            return interaction.reply({ embeds: [notKickable], ephemeral: true });
        }
        if (target.roles.cache.some(role => role.name === 'Warned5')) {
            target.send({ embeds: [kick]})
            member.kick(reason);
            interaction.reply({ embeds: [msg] })
        }
        try {
            await target.send({ embeds: [warn] });
        } catch (error) {
            console.error('\x1b[91m[ARS Utility]\x1b[39m Could not send DM to the user:', error);
        }

        if (!target.roles.cache.some(role => role.name === 'Warned1', 'Warned2', 'Warned3', 'Warned4', 'Warned5')) {
            member.roles.add(warn1);
        }
        if (target.roles.cache.some(role => role.name === 'Warned1')) {
            member.roles.add(warn2);
        }
        if (target.roles.cache.some(role => role.name === 'Warned2')) {
            member.roles.add(warn3);
        }
        if (target.roles.cache.some(role => role.name === 'Warned3')) {
            member.roles.add(warn4);
        }
        if (target.roles.cache.some(role => role.name === 'Warned4')) {
            member.roles.add(warn5);
        }

        try {
            await interaction.reply({ embeds: [msg], ephemeral: true });
        } catch (error) {
            console.error(`\x1b[91m[ARS Utility] \x1b[39m Error 502 - Error Detected!:`, error);
            await interaction.reply({ content: '[ARS Utility] Error 502 - Server Error', ephemeral: true });
        }
    },
};
