var userRegistrationObj = require('./../../models/user.js');

var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');

exports.saveUserData = function(req,res){
	var errorMessage = "";
 	var outputJSON = "";
 	var registerModelObj = {};
 	registerModelObj = req.body;
 	//console.log("---------",req.body);
 	req.body.date_of_birth = new moment(req.body.date_of_birth.jsdate);
 	//console.log("--->>>------",req.body);
 	//return false;
 	userRegistrationObj(registerModelObj).save(req.body,function(Usererr,Userres){
	    if(Usererr){
  			switch(Usererr.name) {
  				case 'ValidationError' :
      				for(field in Usererr.errors) {
	 					if(errorMessage == "") {
	 						errorMessage = Usererr.errors[field].message;
	 					}else {							
	 						errorMessage+=", " + Usererr.errors[field].message;
	 					}
					}//for loop closed
				break;
				case 'MongoError':
					errorMessage = 	req.body.email_address+" email is already exist.Please try again..";
				break;
			}//switch  closed
			outputJSON = {'status': 'failure', 'messageId':401, 'message':errorMessage};
			res.status(401).jsonp(outputJSON);
		}else{
			outputJSON = {
  				'status':'success',
  				'messageId':200,
  				'message':'User saved successfully'
  			}
  			res.status(200).jsonp(outputJSON);
  		}
  	});
}

// var refreshTokenObj = require('./../../models/refreshtoken.js');
// var accessTokenObj = require('./../../models/accesstoken.js');
//authenticate
// exports.authenticate = function(req, res) {
// 	//console.log(res.req.user);
// 	res.jsonp({'status':'success', 'messageId':200, 'message':'User logged in successfully','displayName':res.req.user.firstname+" "+res.req.user.lastname,'access_token':res.req.user.token,image:res.req.user.image});
// }


// exports.login = function(req,res){
// 	console.log("My Data==",req.body);
// 	return false;
// }
// exports.logOut = function(req,res){
// 	console.log("Data is ",req.param('id'));
// 	var UserId = req.param('id');
	
// 	var DeleteLogedInUser = {'userId':UserId};

// 	// Remove refreshtoken
// 	refreshTokenObj.remove(DeleteLogedInUser,function(err,res){
// 		if(err){
// 			var outputJson = {};
// 			outputJson.msg = err;
// 			res.status(400).jsonp(outputJson);
// 		}else{
// 			var outputJson = {};
// 			outputJson.msg = 'success';
// 			res.status(200).jsonp(outputJson);
// 		}
// 	});
// 	// Remove accesstokens
// 	accessTokenObj.remove(DeleteLogedInUser,function(err,res){
// 		if(err){
// 			var outputJson = {};
// 			outputJson.msg = err;
// 			res.status(400).jsonp(outputJson);
// 		}else{
// 			var outputJson = {};
// 			outputJson.msg = 'success';
// 			res.status(200).jsonp(outputJson);
// 		}
// 	});
// 	console.log("Data is ",DeleteLogedInUser);
	
// }



