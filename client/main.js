console.log("Files are sorted in alphabetical order.\n main.* files are loaded last.")

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Any directory named imports/ is not loaded anywhere and files must be imported using import.
import '../imports/file';
import '../public/publicFile';
// import '../private/privateFile';



Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
