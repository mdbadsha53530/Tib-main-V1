/*CMD
  command: /ball
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances",
    },
    onSuccess: "/oninf"
  })
}else{
return
}
