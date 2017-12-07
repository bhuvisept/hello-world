/*
This file will have information about database connectivity
*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
//mongoose.connect('mongodb://oddjob:oddjob#9809@localhost:27017/oddjob');

//check if we are connected successfully or not
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
