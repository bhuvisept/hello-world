var userRegistrationObj = require('./../../models/user.js');


var moment = require('moment');

exports.profileData = function(req,res){
	var UserId = req.param('id');
	var errorMessage = "";
 	var outputJSON = "";
	userRegistrationObj.find({"_id":UserId},function(err,resData){
 		if(err){
 			outputJSON = {
 				'status':'failed',
 				'messageId':400,
 				'message':'Invalid query'
 			}
 			
 		}else{
 			//console.log("============",resData[0]);
 			outputJSON = {
 				'status':'success',
 				'messageId':200,
 				'data':resData[0]
 			}
 			
 		}
 		res.jsonp(outputJSON);
 	});
}



