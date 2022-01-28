const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
  name: "guildMemberRemove",
  /**
   *
   * @param {GuildMember} member
   */
  execute(member) {
    const { user, guild } = member;
    const Welcomer = new WebhookClient({
      id: process.env.GUILD_MEMBER_REMOVE_ID,
      token: process.env.GUILD_MEMBER_REMOVE_TOKEN,
    });

    const Welcome = new MessageEmbed()
      .setColor("RED")
      .setAuthor({
        name: user.tag,
        iconURL: user.avatarURL({ dynamic: true, size: 512 }),
      })
      .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `
    ${member} has left the community\n
    Joined:<t:${parseInt(member.joinedTimestamp / 1000)}:R>\n
    Latest Member Count: **${guild.memberCount}** `
      )
      .setFooter({
        text: `ID: ${user.id}`,
      });

    Welcomer.send({ embeds: [Welcome] });
  },
};
