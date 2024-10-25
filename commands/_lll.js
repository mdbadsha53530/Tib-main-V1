/*CMD
  command: /lll
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

if (params) {
  Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances"
    },
    onSuccess: "/onp1 r"
  })
} else {
  Libs.CoinPayments.apiCall({
    fields: {
      cmd: "balances"
    },
    onSuccess: "/onp1"
  })
}

