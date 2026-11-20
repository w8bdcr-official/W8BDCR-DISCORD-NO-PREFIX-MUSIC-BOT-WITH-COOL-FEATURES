const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "destroy",
    aliases: ["dc"],
    category: "Music",
    description: "Fix The Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    voteonly: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setAuthor("| Destroyed The Player",client.user.displayAvatarURL({dynamic: true}))
          return message.reply({embeds: [thing]});
	
    }
};