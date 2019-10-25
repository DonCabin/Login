import '../imports/api/tasks.js';

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
ServiceConfiguration.configurations.remove({
  service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '2606632389429669',
    secret: '5a4cc8cb1b6614654909719992baead5'
});
