import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('tasks');
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

