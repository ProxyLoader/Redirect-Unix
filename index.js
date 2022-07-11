const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('HHHConnecing'))
app.listen(port, () =>
console.log('Connecting')
);


const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {

  console.log("Connecting.... Good im connected")
  
     client.user.setActivity('⚡ | members');


});

 client.on('guildMemberAdd', async member => { 

     member.roles.add('985219522699083827');
  setTimeout(function(){
     member.roles.remove('985219522699083827');
     member.roles.add('983305253032198174');

    
    member.send("**✅｜redirect You have been got accses to see channels**").catch(error =>{
      return;
    })


        member.send("**Welcome to Unix-Community We hope to stay and Enjoy!**").catch(error =>{
      return;

        });
      
}, 10000);

});


client.login(process.env.tokens1)
