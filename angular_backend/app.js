
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');   
var db = require('./db.js');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var BearerStrategy = require('passport-http-bearer').Strategy;



var app = express();
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json({
    limit: '5000mb'
}));
app.use(bodyParser.urlencoded({
    limit: '5000mb',
    extended: true
}));

var adminLoginObj = require('./app/models/adminlogins/adminlogin.js');
//var userObj = require('./app/models/user.js');
//app.use('/api', oauth2Router);

//var constantObj = require('constants.js');

require('./routes/oauth2')(app, express, passport);
require('./routes/adminlogin')(app, express, passport);
require('./routes/userregistration')(app, express, passport);
require('./routes/user')(app, express, passport);
require('./routes/client')(app, express, passport);



module.exports = app;