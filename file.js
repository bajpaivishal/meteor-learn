import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Template} from 'meteor/templating';
// import {Template} from 'meteor/templating';

Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
    Template.body.helpers({
        tasks:function () {
            return Tasks.find();
        }
    });
    Template.body.events({
        'click .add' : function (event) {
            Meteor.call('add',function (e,data) {
                console.log(data,"----------")
            });
        }
    });
}

// if (Meteor.isServer)
Meteor.methods({
    'add': function () {
        name = "task ";
        if (Meteor.isServer){
            Meteor._sleepForMs(2000);
        }else{
            name += " (client)"
        }
        return Tasks.insert({
            name: name,
            createdAt: new Date()
        })
    }
})

