import { Meteor } from 'meteor/meteor';


import '../imports/file';
import '../public/publicFile';
//import '../private/privateFile';


var data = Assets.getText('privateFile.js');
console.log(data);

Meteor.startup(() => {
  // code to run on server at startup
    console.log("Meteor StartUp....");
});
