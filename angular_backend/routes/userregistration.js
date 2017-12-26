module.exports = function(app, express, passport) {

	var router = express.Router();

	var userRegistrationObj = require('./../app/controllers/userregistrations/userregistrations.js');
	
	router.post('/saveUserData', userRegistrationObj.saveUserData);
	
	app.use('/userregistration', router);

}