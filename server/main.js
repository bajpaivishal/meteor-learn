import { Meteor } from 'meteor/meteor';
// import '../imports/api/tasks.js';
Tasks = new Mongo.Collection('tasks');
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.methods({
    'remove':function (id) {
        if (Meteor.isServer)
            Meteor._sleepForMs(5000);
        return Tasks.remove(id);
    },'add':function (id) {
        if (Meteor.isServer)
            Meteor._sleepForMs(5000);
        return Tasks.update({_id:id},{$set:{name:"UPDATED...."}});
    }
})
