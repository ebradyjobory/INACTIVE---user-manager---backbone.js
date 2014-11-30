 var UserListViews = Backbone.View.extend({

  el: '.main',

  render: function() {
    var that = this;
    var users = new Users();
    users.fetch({
      success: function(users){
        console.log('fetch success');
        console.log('users', users.models);
        var template = _.template($('#usersTable').html(), {users: users.models});
        that.$el.html(template);
        // _.each(users.models, function(user){
        //   console.log(user.get('name'));
        //   that.$el.append(user.get('name'));
        //   that.$el.append(user.get('location'));
        // })
        
      }
    })  
  }
  
});
//var template = ('<table><thead><tr><th>Name</th><th>Location</th></tr></thead><tbody><tr><td>'+user.attributes.name +'</td><td>'+user.attributes.location +'</td></tr></tbody>');
