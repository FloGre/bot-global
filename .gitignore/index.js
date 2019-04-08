const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".")

bot.on('ready', function(){
    bot.user.setGame("TOUHOU");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);

bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n /help: afficher les commandes \n /xp: affiche le nombre d'XP \n Salut ou Bonne nuit: le BOT réponds");
    }
    if(message.content === "Salut"){
        message.reply("Bien le bonjour. \n Auriez vous l'obligence de vous la fermer ! MERCI :angel:");
        console.log("Commande Salut effectué");
    }
    if(message.content === "Bonne nuit"){
        message.reply("Déjà ?! Petite nature !!!");
        console.log("Commande Bonne nuit effectué");
    }
});
