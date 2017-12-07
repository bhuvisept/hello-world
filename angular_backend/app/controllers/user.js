// Load required packages
var User        = require('../models/user');
//var User = require('./../../models/adminlogins/adminlogin.js');
// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
    console.log("I am in user controller",req.body);
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });
    
    user.save(function(err) {
        if (err)
          return res.send(err);

        res.json({ message: 'New Admin user added to the Collection!' });
    });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err)
            return res.send(err);

        res.json(users);
    });
};