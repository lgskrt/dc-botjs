const { SlashCommandBuilder } = require("discord.js")

module.exports = {
   data: new SlashCommandBuilder()
    .setName("pdf")
    .setDescription("Frase do Donatti"),

async execute(interaction) {
    await interaction.reply("Parei de fumar man")

  }
} 

