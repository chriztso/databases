var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        var messageToReturn = data;
        res.statusCode = 200;
        res.send(messageToReturn);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req);
      res.statusCode = 201;
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        var userToReturn = data;
        res.statusCode = 200;
        res.send(userToReturn);
      });
    },
    post: function (req, res) {
      models.users.post(req);
      res.statusCode = 201;
      res.send();
    }
  }
};

