const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();
const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

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
}
   var msgauthor = message.author.id;
    if(message.author.bot)return;
    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

    if(message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Stat des XP de ${message.author.username}`)
            .setColor('#850606')
            .setDescription("Affichage des XP")
            .addField("XP:", `${xpfinal[1]} xp`)
        message.channel.send({embed: xp_embed});
    }
});
