bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;

  if (reaction.message.channel.id !== '2314') {
    if (reaction.emoji.name === ':one:')
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('803230809183223828');
    if (reaction.emoji.name === ':two:')
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('803230814451400704');
  }
});
bot.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;

  if (reaction.message.channel.id !== '2314') {
    if (reaction.emoji.name === ':one:')
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('803230809183223828');
    if (reaction.emoji.name === ':two:')
      await reaction.message.guild.members.cache
        .get(user.id)
        .roles.add('803230814451400704');
  }
});
