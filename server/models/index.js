var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // con.connect(function(err) {
      //   if (err) throw err;
      db.query('SELECT * FROM messages', function (err, result, fields) {
        if (err) { throw err; }
        callback(null, result);
      });
      // });
    }, // a function which produces all the messages
    post: function (req) {
      // con.connect(function(err) {
      //   if (err) throw err;
      //   console.log("Connected! Models");
      var sql = `INSERT INTO messages (username, message, roomname) VALUES ('${req.body.username}', "${req.body.message}", '${req.body.roomname}')`;
      //var sql = "INSERT INTO messages (username, message, roomname) VALUES ('Valjean', 'In mercy\'s name, three days is all I need.', 'Hello')";
      db.query(sql, function (err, result) {
        if (err) { throw err; }
      
          

      });
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', function (err, results, fields) {
        if (err) { throw err; }
        callback(null, results);
      });
    },
    post: function (req) {
      console.log(req.body.username, typeof req.body.username);

      var sql = `INSERT INTO users (id, username) VALUES ('1', '${req.body.username}');`;
      //var sql = "INSERT INTO users (id, username) VALUES ('1', 'valjeen)";
      db.query(sql, function (err, result) {
        if (err) { throw err; }
        console.log('success');
      });
    }
  }
};

