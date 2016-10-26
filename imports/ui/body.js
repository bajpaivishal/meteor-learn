import {Template} from 'meteor/templating';

import './body.html';

Meteor.startup(function () {
    if (Meteor.isClient) {
        Blaze.render(Template.myNewTemplate, document.getElementById('myContainer'));
    }
});


/**
 *On the client, there's no difference between them.

 On the server, when code is running for a specific user (for example in method calls), you need to use Meteor.setTimeout instead of window.setTimeout to make Meteor remember for which user the function should be called. In the time between the function passed to Meteor.setTimeout is called and when it's called, other users may have called methods on the server, chancing Meteor.userId to return their user id instead. Meteor.setTimeout will change back so Meteor.userId return the user id for the user the call to Meteor.setTimeout was made before calling the function passed to it.
 */

Template.body.helpers({
    tasks: [
        {text: 'This is task 1', status: 'pending'},
        {text: 'This is task 2', status: 'done'},
        {text: 'This is task 3', status: 'pending'}
    ],
    members: ["max", "john", "neo", "reo"],
    dog: {
        name: 'Spot',
        age: 3,
        sleeping: true
    }
});

Template.complitedTask.helpers({
    statusIs: function (status) {
        return this.status === status;
    }
})



var myRenderedTemplate
Template.myNewTemplate.events({
    'click .about': function () {
        myRenderedTemplate && Blaze.remove(myRenderedTemplate);
        myRenderedTemplate = Blaze.render(Template.aboutTemplate, document.getElementById('about'));
        console.log("About.....");

    }, 'click .contact': function () {
        myRenderedTemplate && Blaze.remove(myRenderedTemplate);
        myRenderedTemplate = Blaze.render(Template.contactTemplate, document.getElementById('contact'));
        console.log("Contact.....");
    }, 'click .home': function () {
        myRenderedTemplate && Blaze.remove(myRenderedTemplate);
        myRenderedTemplate = Blaze.render(Template.homeTemplate, document.getElementById('home'));
        console.log("Home.....");
    }
})



