import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.reactiveVarCounter.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.reactiveVarCounter.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.reactiveVarCounter.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.reactiveVarCounter.onCreated(function () {
  var self = this;
  this.autorun(function() {
    console.log("Reactive Var Counter value changed....",Template.instance().counter.get())
  });
});



// counter starts at 0
  Session.setDefault("counter", 0);

  Template.sessionCounter.helpers({
    counter: function () {
      return Session.get("counter");
    }
    ,session: function () {
      map = []
      for (prop in Session.keys) {
        map.push({key: prop, value: Session.get(prop)})
      }
      return map
    }

  });

  Template.sessionCounter.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

Template.sessionCounter.onCreated(function () {
  var self = this;
  this.autorun(function() {
    console.log("Session value changed....",Session.get('counter'))
  });
});





Template.reactiveDictExample.onCreated( function() {
  this.templateDictionary = new ReactiveDict();

  for(var i=1;i<=10;i++){
      this.templateDictionary.set( 'dictValue_' + i,0);
   }

  var self = this;
  this.autorun(function() {
    console.log("Reactive Dict value changed....",Template.instance().templateDictionary.keys);
    for(var i=1;i<=10;i++){
      Template.instance().templateDictionary.get('dictValue_'+i);
    }
  });

});

Template.reactiveDictExample.helpers({
  showExtraFields: function() {
    return Template.instance().templateDictionary.get( 'dictValue' );
  },
  increase: function(value) {
    console.log(value);
    for(var i=1;i<=10;i++){
      //Template.instance().templateDictionary.set( 'dictValue_' + i, Template.instance().templateDictionary.get( 'dictValue_' + i) +  value);
    }
    return false;
  }
});

Template.reactiveDictExample.events({
  'click .add': function( event, template ) {
    var value = +event.target.getAttribute('rel')
    for(var i=1;i<=10;i++){
      template.templateDictionary.set( 'dictValue_' + i, i + value);
    }
  }
});
