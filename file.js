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
            Tasks.insert({
                name: "task ",
                createdAt: new Date()
            },function (e,data) {
                console.log("data....",data)

            })
        }
    });
}

