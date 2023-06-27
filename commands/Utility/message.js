const Discord = require("discord.js")

module.exports = {
  name: 'mensagens',
  description: 'Contador de mensagens', 
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'usuário',
      description: 'Veja a quantia de mensagens desse usuário',
      type: Discord.ApplicationCommandOptionType,
      required: false,
    }
  ],

  run: async (client, interaction) => {

    let user = interaction.options.getUser('usuário')
    if (!user) user = interaction.user


  }
}