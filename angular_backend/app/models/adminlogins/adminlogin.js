var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminloginSchema = new Schema({
	firstname: String,
	lastname: String,
	username: String,
	password: String,
	email:String,
	
},  {collection:'admins'});


var adminlogin = mongoose.model('admin', adminloginSchema);
module.exports = adminlogin;