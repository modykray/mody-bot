const venom = require('venom-bot');

venom
  .create({
    session: 'bot-session',
    multidevice: true
  })
  .then(client => {
    client.onMessage(message => {
      if (message.body === 'م1') {
        client.sendText(message.from, 'قسم الصور شغال ✅');
      } else {
        client.sendText(
          message.from,
          'اكتب م1 عشان أشغال القسم'
        );
      }
    });
  })
  .catch(err => console.log(err));
