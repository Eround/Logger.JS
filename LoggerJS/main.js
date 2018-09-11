const Discord = require("discord.js");
const Client = new Discord.Client();

var channel = message.channel;

Client.on('message', message => {
    if(message.content = "Ur Mum Gey"){
        message.delete();
        channel.send("no u");
    }
});

var token = "NDg5MTgzNzQ3NTUyNTc1NDg4.DnnF0g.t-jIL-ZGXGkQuMwbn7gBPLCm5rM";
Client.login(token);
