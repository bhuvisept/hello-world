module.exports = function(app, express, passport){
	var express = require('express');
	var router  = express.Router();

	var authController   = require('../app/controllers/auth');
	var clientController = require('../app/controllers/client');

	// router.post('/clients', authController.isAuthenticated, clientController.postClients)
	router.post('/clients', clientController.postClients)
	router.get('/clients', authController.isAuthenticated, clientController.getClients);

	app.use("/api",router);
}