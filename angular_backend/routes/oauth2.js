module.exports = function(app, express, passport){
	var authController   = require('../app/controllers/auth');
	var router  = express.Router();
	var oauth2Controller = require('../app/controllers/oauth2');

	// Create endpoint handlers for oauth2 authorize
	//router.get('/oauth2/authorize', authController.isAuthenticated, oauth2Controller.authorization)
	//router.post('/oauth2/authorize', authController.isAuthenticated, oauth2Controller.decision);
	console.log("Router STEP1");
	// Create endpoint handlers for oauth2 token
	// router.post('/oauth2/token',  oauth2Controller.token); 

	// AFTER ENTER LOGIN DETAIL THIS ROUTER WILL CALL  
	router.post('/token', oauth2Controller.token);   
	console.log("Router STEP12121");
	//router.post('/token', authController.isClientAuthenticated, oauth2Controller.token);  
	app.use("/oauth2",router);
}