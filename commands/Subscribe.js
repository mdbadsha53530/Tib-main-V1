/*CMD
  command: Subscribe
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons =subscribe"
    {title: "😇 Subscribe", url: "https://www.youtube.com/c/argamingwarrior"},
    {title: "🦋 Subscribed", command: "Pending" }
;
Bot.sendInlineKeyboard(buttons, "⭐️ Must Subscribe Our Yt Channel To Use The Bot..");

Command = Pending
BJs = 
if(request.data){
var messageid = request.message.messageid
var chatid = request.message.chat.id

Api.deleteMessage({
chatid :  chatid,
messageid : messageid
})

}
Bot.sendMessage("*⚠️Not Subscribed*")
var buttons = [
    {title: "😇 Subscribe", url: "https://www.youtube.com/c/argamingwarrior"},
    {title: "🦋 Subscribed", command: "mainmenu" }
];
Bot.sendInlineKeyboard(buttons, "🚫 Not Subscribed + bell Youtube Channel🚧 

❌Must Subscribe + bell  Channel To Use Our Bot And Earn From It....");;
