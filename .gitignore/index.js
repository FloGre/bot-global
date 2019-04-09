const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("b!"):
var randnum = 0;

bot.on('ready', ()=>{
    bot.user.setPresence({ game: { name: `TOUHOU`, type: 0}});
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on(`message`, message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed();
        .setColor("#FF0000")
        .addField("Commande du BOT", "  -b!help : Affiche les commandes du BOT")
        message.channel.sendEmbed(help_embed);
        //message.channel.send("Voici les coommandes du BOT");
     console.log("Commande help demandée");
    }
});
