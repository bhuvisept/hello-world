module.exports = function(app, express, passport) {

	var router = express.Router();

	var adminLoginObj = require('./../app/controllers/adminlogins/adminlogins.js');
	
	router.post('/login', adminLoginObj.login);
	
	app.use('/adminlogin', router);

}