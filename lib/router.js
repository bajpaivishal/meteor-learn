FlowRouter.route('/', {
    action: function (params, queryParams) {
        console.log("its working for defalut route....");
    },
    triggersEnter: [function (context, redirect) {
        // console.log('triggersEnter Called...');
        // alert(); // trigger called befor enter in url
        // console.log(context);
        // redirect('/admin');

    }],
    triggersExit: [function (context, redirect) {
        console.log('triggers Exit Called...');
        // alert("exit"); // trigger called when  exit
    }]
});

// FlowRouter.current()

FlowRouter.route('/blog/:postId', {
    action: function (params, queryParams) {
        // console.log("Yeah! We are on the post:", params.postId);
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
    }
});
// FlowRouter.go('/blog/my-post?comments=on&color=dark');


// Group Raoute

var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin',
    triggersEnter: [function (context, redirect) {
        console.log('running group triggers');
    }]
});

// handling /admin route
adminRoutes.route('/', {
    action: function () {
        // BlazeLayout.render('componentLayout', {content: 'admin'});
    },
    triggersEnter: [function (context, redirect) {
        console.log('running /admin trigger');
    }]
});

// handling /admin/posts
adminRoutes.route('/posts', {
    action: function () {
        // BlazeLayout.render('componentLayout', {content: 'posts'});
    },
    triggersEnter: [function (context, redirect) {
        console.log('running /admin/posts trigger');
    }]
});

// FlowRouter.current().route.group.name
// FlowRouter.current().route.group.parent.name


// Defining Triggers Globally
FlowRouter.triggers.enter([trackRouteEntry]/*, {only: ["home"]}*/);
// FlowRouter.triggers.exit([trackRouteExit], {except: ["home"]});
function trackRouteEntry(context, redirect) {
    // console.log("Gobal Trigger");
}


// Not Found Routes

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function () {

    },
    action: function () {
        console.log("Page not found..")
    }
};



