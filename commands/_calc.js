/*CMD
  command: /calc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
*🖥 Profit Calculator 🖥*

Calculate here your incoming profits!

*Send the amount of TRX you want to invest*
  ANSWER
  keyboard: Back 🔙
  aliases: 🖥 calculator
  group: 
CMD*/


var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
var value = message
if(!isNumeric(value)){
return
}
let amount = parseFloat(data.message);

let daily = amount*1.1;
let profit = amount*1.1;
let dail = amount*2;
let profi = amount*2;

if (amount>= 1 && amount <=1999.999999999){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 110.00% for 30 Minutes_\n\n_⏱ Your first payment will arrive after 30 Minutes!_\n\n*💰 After 30 Minutes: *" +
    daily.toFixed(1) +
    " TRX\n_❓ You will get back more than what you invested after just 30 Minutes_\n\n*🔥 Total Profit: *" +
    profit.toFixed(1) +
    " TRX")
Bot.runCommand("/calf")
return
}
if (amount>= 2000 && amount <=99999){
Bot.sendMessage(
  "*💻 Profit Calculator 💻*\n\n_Plan: 200.00% for 30 Minutes_\n\n_⏱ Your first payment will arrive after 30 Minutes!_\n\n*💰 After 30 Minutes: *" +
    dail.toFixed(1) +
    " TRX\n_❓ You will get back more than what you invested after just 30 Minutes_\n\n*🔥 Total Profit: *" +
    profi.toFixed(1) +
    " TRX")
Bot.runCommand("/calf")
}else{
Bot.runCommand("/mainf")
}

