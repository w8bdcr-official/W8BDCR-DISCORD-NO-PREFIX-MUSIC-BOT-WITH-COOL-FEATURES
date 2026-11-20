const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "profile",
  category: "Information",
  aliases: ["whois", "userinfo"],
  description: "Show a user's profile",
  args: false,
  usage: "[@user]",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const user = message.mentions.users.first() || message.author;
    const member = message.guild.members.cache.get(user.id);
    const badges = require("./badge.json");
    const ownerIds = [process.env.OWNERID || "1573318430461923472"];

    const embed = new MessageEmbed()
      .setColor(client.embedColor)
      .setAuthor({ name: `${user.tag}`, iconURL: user.displayAvatarURL({ dynamic: true }) })
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: "Username", value: `${user.username}`, inline: true },
        { name: "User ID", value: `${user.id}`, inline: true },
        { name: "Account Created", value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true }
      );

    if (member && member.joinedTimestamp) {
      embed.addField("Joined Server", `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, true);
    }
    if (ownerIds.includes(user.id)) {
      embed.addField("Badge", `${badges.owner || "👑"} Bot Owner`, true);
    }

    return message.reply({ embeds: [embed] });
  },
};
