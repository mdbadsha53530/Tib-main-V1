/*CMD
  command: /invedtmenthouradmin01
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let ad=Bot.getProperty("admin01")
let id=User.getProperty("adminmsgid")
if(chat.chatid==ad){
let p1=Bot.getProperty("daily_hour1","⛔ ")
let p2=Bot.getProperty("daily_hour2","⛔ ")
let p3=Bot.getProperty("daily_hour3","⛔ ")
let x= "_Here is your currently settuped Accural Hour._\n\n*1⃣ "+p1+" Hour\n2⃣ "+p2+" Hour\n3⃣ "+p3+" Hour*\n\nClick on the buttons bellow to change investment plan* Accural Hour*"

var b=[
[{title:"All 24 Hours",command:"/adminallhour"}],
[{title:"Hour°1- "+p1+" hr", command:"/admininvhour01"}],
[{title:"Hour°2- "+p2+" hr",command:"/admininvhour02"}],
[{title:"Hour°3- "+p3+" hr", command:"/admininvhour03"}],
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]

Bot.editMessage(x,id)
Bot.editInlineKeyboard(b,id)
}else{
Bot.runCommand("/start")
}
