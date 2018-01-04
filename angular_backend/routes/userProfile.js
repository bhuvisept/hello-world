module.exports = function(app, express, passport) {

	var router = express.Router();

	var userProfileObj = require('./../app/controllers/UserProfile/userProfile.js');
	
	router.post('/profileData', userProfileObj.profileData);
	
	app.use('/UserProfile', router);

}