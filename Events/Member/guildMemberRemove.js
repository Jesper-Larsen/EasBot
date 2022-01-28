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
      id: "936579006311038996",
      token:
        "pej7y1BL4IQf1zJVlMJM-e0q3IyiuEYfQRp-IYH-rd1KzAq8kXCCO_MfKWOmVt0sp7AN",
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
