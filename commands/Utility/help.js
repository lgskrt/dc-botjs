const Discord = require("discord.js")

module.exports = {
  name: "help",
  description: "Painel de comandos do bot", 
  type: Discord.ApplicationCommandType.ChatInput,
 

  run: async (client, interaction) => {

    let embed_painel = new Discord.EmbedBuilder()
    .setColor("Aqua")
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({dynamic: true})})
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **utilidade** abaixo:`);

    let embed_diversao = new Discord.EmbedBuilder()
    .setColor("Aqua")
    .setAuthor({name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({dynamic: true})})
    .setDescription(`Olá ${interaction.user}, veja meus comandos de **diversão** abaixo:`);

    let painel = new Discord.ActionRowBuilder().addComponents(
        new Discord.StringMenuBuilder()
        .setCustomId("painel_ticket")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "Painel Inicial",
                    emoji: "📖",
                    value: "painel" 
                },
                {
                    label: "Utilidades",
                    description: "Veja meus comandos de utilidades",
                    emoji: "🌟",
                    value: "utilidade" 
                },
                {
                    label: "Diversão",
                    description: "Veja meus comandos de diversão",
                    emoji: "😂",
                    value: "diversao" 
                },
               
            )

    )

    interaction.reply({})

    


  }
}