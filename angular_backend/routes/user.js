
module.exports = function(app, express, passport){
	var express = require('express');
	var router  = express.Router();

	var authController   = require('../app/controllers/auth');
	var userController   = require('../app/controllers/user');


	console.log("i am in user",app);
	router.get('/users', userController.getUsers);
	router.post('/users', userController.postUsers);
	//router.post('/token', authController.isClientAuthenticated, oauth2Controller.token);  
	app.use("/api",router);
}


/**
* @swagger
* /users:
*   get:
*     description: get the list of all the registered users
*     tags: [Default]
*     responses:
*       200:
*         description: API is working.
*         schema:
*           type: object
*/



/**
* @swagger
* /users:
*   post:
*     description: Add new user to the user collection
*     tags: [Default]
*     responses:
*       200:
*         description: API is working.
*         schema:
*           type: object
*/

// router.post('/users',authController.isAuthenticated, userController.postUsers);


//module.exports = router;