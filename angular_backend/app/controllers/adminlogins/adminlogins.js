var adminLoginObj = require('./../../models/adminlogins/adminlogin.js');
var refreshTokenObj = require('./../../models/refreshtoken.js');
var accessTokenObj = require('./../../models/accesstoken.js');
//authenticate
// exports.authenticate = function(req, res) {
// 	//console.log(res.req.user);
// 	res.jsonp({'status':'success', 'messageId':200, 'message':'User logged in successfully','displayName':res.req.user.firstname+" "+res.req.user.lastname,'access_token':res.req.user.token,image:res.req.user.image});
// }


exports.login = function(req,res){
	console.log("My Data==",req.body);
	return false;
}
exports.logOut = function(req,res){
	console.log("Data is ",req.param('id'));
	var UserId = req.param('id');
	
	var DeleteLogedInUser = {'userId':UserId};

	// Remove refreshtoken
	refreshTokenObj.remove(DeleteLogedInUser,function(err,res){
		if(err){
			var outputJson = {};
			outputJson.msg = err;
			res.status(400).jsonp(outputJson);
		}else{
			var outputJson = {};
			outputJson.msg = 'success';
			res.status(200).jsonp(outputJson);
		}
	});
	// Remove accesstokens
	accessTokenObj.remove(DeleteLogedInUser,function(err,res){
		if(err){
			var outputJson = {};
			outputJson.msg = err;
			res.status(400).jsonp(outputJson);
		}else{
			var outputJson = {};
			outputJson.msg = 'success';
			res.status(200).jsonp(outputJson);
		}
	});
	console.log("Data is ",DeleteLogedInUser);
	
}



