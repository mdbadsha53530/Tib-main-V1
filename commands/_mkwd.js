/*CMD
  command: /mkwd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

var key = "1021837737"
if (user.telegramid== key){

Bot.sendMessage("✅ Done: Admin Id is\n "+"`"+message+"`");
Bot.setProperty("admin01" , message,"string")

}else{
Bot.sendMessage("*❌You Are Not Allowed To This Action*")
}
