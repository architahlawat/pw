var push = require('web-push')

let vapidKeys = {
    publicKey: 'BBeIMBzW84KUxIjuOY77eb59fx1ShSIlwE6WuekcHoTnRMaeVCOoYqvh9AtrNSKBJVgPDCLvP7yUdPn8Nm85S9o',
    privateKey: 'QNkp3R69tRxAq5G4UdLXKB7FQ1HKAonDRwrHRnAAg-Y'
  }

//= push.generateVAPIDKeys();
//console.log(vapidKeys);

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey);
let sub = {};
push.sendNotification(sub, 'test message')