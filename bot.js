#!/bin/sh

var Discord = require("discord.js");

var bot = new Discord.Client();

var chanName;

bot.on('ready', () => {
	console.log("Connected");
});

bot.on('message', message => {
	
	chanName = message.channel;

	//Prevents bot from reacting to its own messages
	if(message.author.id == 234755942695174144){
		return;
	}

	/* Failed attempt at creating a find function that discord so desperately lacks
	if(message.content.includes("!find")){
		var regEx = /\s(.*)/;
		console.log(regEx.exec(message.content)[0]);
		var all = message.channel.fetchMessages({limit: 2});
		all.then(function (all){
			console.log(all.get("Message"));
			for(var i in all.entries()){
				console.log(i);
			}
		});
	}
	*/

  if (message.content === '!lenny') {
    message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
  }
  
  if (message.content.includes('cry ')) {
    message.channel.sendMessage(':cry: Don\'t cry @' + message.author.username + ' :cry: http://i.imgur.com/dNbP1Bp.gifv :cry: :cry: ');
  }


  //Large blank message, just in case someone is using discord at work and someone feels like messing with you by posting terrible images
  if (message.content === '!clear') {
    message.channel.sendMessage('X\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCleared');
  }

  if (message.content === '!meme') {
    message.channel.sendMessage('Me mes');
  }

});

bot.login("");
