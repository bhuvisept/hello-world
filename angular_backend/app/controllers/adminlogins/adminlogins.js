var adminLoginObj = require('./../../models/adminlogins/adminlogin.js');

//authenticate
// exports.authenticate = function(req, res) {
// 	//console.log(res.req.user);
// 	res.jsonp({'status':'success', 'messageId':200, 'message':'User logged in successfully','displayName':res.req.user.firstname+" "+res.req.user.lastname,'access_token':res.req.user.token,image:res.req.user.image});
// }


exports.login = function(req,res){
	console.log("My Data==",req.body);
	return false;
}

