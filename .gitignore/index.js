const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("b!"):
var randnum = 0;

bot.on('ready', ()=>{
    bot.user.setPresence({ game: { name: `TOUHOU`, type: 0}});
    console.log("Connecté");
});

bot.login(NTY1NTY0NTUzMjA3ODczNTM2.XK4RCQ.g0jFTxLQBSKMXKrsiMurPTJoZ38);

bot.on(`message`, message => {
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed();
        .setColor("#FF0000")
        .addField("Commande du BOT", "  -b!help : Affiche les commandes du BOT")
        message.channel.sendEmbed(help_embed);
        //message.channel.send("Voici les coommandes du BOT");
     console.log("Commande help demandée");
    }

    if (message.content === "Salut"){
        random();
        if(rendnum == 1){
            message.reply("Cher dame auriez vous l'obligeance de me montrer votre culotte. Si t'es un mec casse toi !");
            console.log(randnum);
        }
        if(randnum == 2){
            message.reply("Coucou toi ! tu veux voir ma bite ?")
            console.log(randnum);
        }
    }
});

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
};
