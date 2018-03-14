const Discord = require('discord.js')
const weabu = new Discord.Client()
const hentai = require('./hentai.json')

weabu.on('ready', () => {
    console.log(`bot is now online ok`);
    weabu.user.setActivity('Hentai', {tpe: "WATCHING"})
  });

  weabu.login(hentai.t0k3n)

