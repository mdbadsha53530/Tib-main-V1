/*CMD
  command: /broadcast0786
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Message
  keyboard: 
  aliases: 
  group: 
CMD*/


}
else{
if (Bot.getProperty("ban" + user.telegramid) == user.telegramid) {
  Bot.sendMessage("You are Ban Mother Fucker")
  return
}
//Id Specification

//if (user.telegramid != "5193971865")
//if (user.telegramid != "1021837737") {
//Bot.sendMessage("u r not a admin")
//  return }

//Broadcast Code
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
var fullBotUsers = Bot.getProperty("wholeUsers")
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  var i = info
  Bot.sendMessage({
    chat_id: info,
    text:
      "*Admin*\n\n*Message*:  " +
      message +
      ".\n\nBy: *Admin You Want This Bot Free Mess Me*",
    parse_mode: "Markdown"
  })
}
Bot.sendMessage({
  chat_id: user.telegramid,
  text:
    "*Your Signal Is successfully Processed\n\nTotal Users:- " +
    status.value().toFixed(0) +
    "*",
  parse_mode: "Markdown"
})}
//Made By @TechHyip

