/*CMD
  command: /mg2
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
User.setProperty("mg2" , msg_id,  "integer");
