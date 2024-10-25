/*CMD
  command: /556677889900
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

//Design Of Bot

Bot.sendKeyboard(
  " Admin Message,📊 Stats",
  "*Welcome Admin*"
)
//BroadCast Data Code Started
var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
var fullBotUsers = Bot.getProperty("wholeUsers", [])
if(fullBotUsers.includes(user.telegramid)){
Bot.setProperty("Done"+user.telegramid,"Done","string")
} 

if(Bot.getProperty("Done"+user.telegramid)=="Done"){}else{ stat.add(1)}
if(fullBotUsers.includes(user.telegramid)){

} else {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}



