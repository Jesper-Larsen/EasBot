const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

require("dotenv").config();

module.exports = {
  name: "guildMemberAdd",
  /**
   *
   * @param {GuildMember} member
   */
  execute(member) {
    const { user, guild } = member;
    member.roles.add("810199455063343155");
    const Welcomer = new WebhookClient({
      id: process.env.GUILD_MEMBER_ADD_ID,
      token: process.env.GUILD_MEMBER_ADD_TOKEN,
    });

    const Welcome = new MessageEmbed()
      .setColor("AQUA")
      .setAuthor({
        name: user.tag,
        iconURL: user.avatarURL({ dynamic: true, size: 512 }),
      })
      .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `
    Welcome ${member} to the **${guild.name}**!\n
    Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\n
    Latest Member Count: **${guild.memberCount}** `
      )
      .setFooter({
        text: `ID: ${user.id}`,
      });

    Welcomer.send({ embeds: [Welcome] });
  },
};
