/*CMD
  command: Goo1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var x = Date().toLocaleString("en-US", {
  timeZone: "America/NewYork"
})
Bot.sendMessage(x)
