const Discord = require("discord.js")

module.exports = {
  name: "pdf", 
  description: "Frase do Donatti",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
    await interaction.reply("Parei de fumar man")

  }
}
