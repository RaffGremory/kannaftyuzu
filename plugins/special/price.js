exports.run = {
   usage: ['premium'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `Upgrade to premium plan at a price of Rp. 5,000 for 0 Limit, send :v *${isPrefix}owner* if want to buy.`, m)
   },
   error: false,
   cache: true,
   location: __filename
}