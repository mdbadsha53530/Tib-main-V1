/*CMD
  command: /setprop
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let msg_id = options.result.message_id;
User.setProperty("msgid2" , msg_id,  "integer");
