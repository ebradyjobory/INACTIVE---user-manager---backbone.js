var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'usersdb',
    charset: 'utf8',
    filename: path.join(__dirname, '../data/users.sqlite')
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (link) {
      link.increments('id').primary();
      link.string('first_name', 255);
      link.string('last_name', 255);
      link.string('location', 100);
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
