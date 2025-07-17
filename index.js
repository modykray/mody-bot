const venom = require('venom-bot');

venom
  .create({
    session: 'sessionName',  // اسم الجلسة ويتحفظ في فولدر sessions/sessionName
    multidevice: true
  })
  .then(client => start(client))
  .catch(err => console.log(err));

function start(client) {
  client.onMessage(message => {
    if (message.body === 'م1') {
      client.sendText(message.from, 'قسم الصور شغال ✅');
    } else {
      client.sendText(message.from, 'اكتب م1 عشان أشغل القسم');
    }
  });
}