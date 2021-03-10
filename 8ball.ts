const karmaKv = new pylon.KVNamespace('8ball');

discord.on('MESSAGE_CREATE', async (message) => {
  if (
    message.content.toLowerCase().startsWith('#8ball') ||
    message.content.toLowerCase().startsWith('#eightball')
  ) {
    const eightballResponses = [
      '🎱| Yes',
      '🎱| No',
      '🎱| I thing so',
      '🎱| I dont think so',
      '🎱| HELL NO',
      '🎱| OF COURSE',
      '🎱| I wouldn`t',
      '🎱| I dont know',
      '🎱| I have no clue',
      '🎱| I cant help you',
      '🎱| Try it',
      '🎱| Don`t try it',
      '🎱| DONT YOU DARE',
      '🎱| Ask again later',
      '🎱| Most Likely',
      '🎱| You may rely on it',
      '🎱| Without a doubt',
      '🎱| Signs point to yes',
      '🎱| Signs point to no',
      '🎱| As I see it',
      '🎱| Maybe',
      '🎱| Why are you even trying?',
      '🎱| Very doubtful',
      '🎱| Concentrate and ask again',
      '🎱| Cannot predict now',
      '🎱| Better not tell you now',
      '🎱| Reply hazy, try again',
      '🎱| Yes – definitely',
      '🎱| Why not?',
      '🎱| Outlook good',
      '🎱| Outlook not so good',
      '🎱| Without a doubt'
    ];
    const randEightballResponse =
      Math.floor(Math.random() * eightballResponses.length) + 1;
    await message.reply(eightballResponses[randEightballResponse]);
  }
});
