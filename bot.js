#!/bin/sh

var Discord = require("discord.js");

var bot = new Discord.Client();

var chanName;

bot.on('ready', () => {
	console.log("Connected");
});

bot.on('message', message => {
	
	chanName = message.channel;

	if(message.author.id == 234755942695174144){
		return;
	}

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

  if (message.content === '!lenny') {
    message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
  }
  
  if (message.content.includes('cry ')) {
    message.channel.sendMessage(':cry: Don\'t cry @' + message.author.username + ' :cry: http://i.imgur.com/dNbP1Bp.gifv :cry: :cry: ');
  }


  if (message.content === 'Clear') {
    message.channel.sendMessage('Nice image \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Nice image');
  }

  if (message.content === 'Meme') {
    message.channel.sendMessage('Me mes');
  }

});

bot.login("");
