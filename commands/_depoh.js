/*CMD
  command: /depoh
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🗂 deposit history
  group: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var his = User.getProperty("history")
if(his == undefined){
var go ="*⚙️ Last 20 Investments*\n✨ No investments found";
Bot.sendMessage(go)
}else{
Bot.sendMessage("\n"+his,{disable_web_page_preview: true})
}
