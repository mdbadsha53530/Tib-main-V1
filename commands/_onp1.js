/*CMD
  command: /onp1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let json = options.body.result
let cur=Bot.getProperty("cur")
let rate = json[cur].balancef
if(!rate){ return }
let id=User.getProperty("adminmsgid")
let txt ="💵 *Account Balance:* \n\nYour CoinPayment Balance is :\n*"+rate+"* "+cur
if(params){
Bot.editMessage(txt,id)
var b=[
[{title:"⬅️ Back To Settings",command:"/adminlogin r"}]]
Bot.editInlineKeyboard(b,id)
}else{
Bot.sendMessage(txt)
}
