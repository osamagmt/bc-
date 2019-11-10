const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://tttt.glitch.me/`);
}, 280000);


const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const moment = require("moment");
const prefix = "±"
const adminprefix = "#";

const devs = ['ID1' , 'ID2'];


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
 if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
      if (!devs.includes(message.author.id)) return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.login("");
