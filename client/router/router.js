var Router = Backbone.Router.extend({
  // Router take an object routes
  routes: {
    '/home': 'home'
  }
});

var router = new Router();

router.on('route:home', function(){
  UserListViews.render();
});

