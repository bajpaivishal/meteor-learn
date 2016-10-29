import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
// import { Tasks } from '../imports/api/tasks.js';
Tasks = new Mongo.Collection('tasks');
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  tasks() {
    return Tasks.find();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    Tasks.insert({
      name: "task "+ instance.counter.get(),
         date: new Date()
    });
  },
  'click .remove': function(){
    if (Meteor.isServer)
      Meteor._sleepForMs(5000);
    Meteor.call('remove',this._id,function (e,data) {
      console.log(data)
    })
    // return Tasks.remove(this._id);
  },
  'click .add': function(){
    Meteor.call('add',this._id,function (e,data) {
      console.log(data,"Updatae,,,,");
    })
  }
});
// if (Meteor.isServer)
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

