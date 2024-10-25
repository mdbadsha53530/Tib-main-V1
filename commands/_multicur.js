/*CMD
  command: /multicur
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💱 multicurrency, 💱 multi currency, 💱 multicurrency 💱
  group: 
CMD*/

var b=[
[{title:"BTC",command:"/multidep BTC"},{title:"ETH", command:"/multidep ETH"},{title:" LTC", command:"/multidep LTC"}],
[{title:"TRX",command:"/multidep TRX"}],
[{title:"DOGE", command:"/multidep DOGE"},{title:"BCH", command:"/multidep BCH"},{title:"XRP",command:"/multidep XRP"}]]
let cur=Bot.getProperty("cur")
let txt ="*💱 Please select the Currency to make a Deposit!\n\n🚩 Note: *you deposit will automatically be conveted to "+cur
Bot.sendInlineKeyboard(b, txt,{on_result:"/settaki"})
