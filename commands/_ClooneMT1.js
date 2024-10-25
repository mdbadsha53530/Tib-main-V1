/*CMD
  command: /ClooneMT1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid==1021837737 ){

BBAdmin.installBot({

 email: message,
 bot_id: bot.id 
})

Bot.sendMessage("Bot Sent")
return
}

Bot.sendMessage("You can't send the bot");
